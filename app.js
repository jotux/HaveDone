'use strict';

// Renders README.md as a timeline. The README is the only source of content:
// "## Org (years)" is a timeline entry, "### Title (meta)" is a card inside it,
// and "*" / "-" bullets (nested by indent) are the card's details.

const README_URL = 'README.md';
const IMAGE_URL = /\.(jpe?g|png|gif|webp)$/i;
const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s)]+)/g;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// "Torpedo (Consultant, 2006 - Present)" -> { title: "Torpedo", meta: "Consultant, 2006 - Present" }
function splitParen(text) {
  const m = text.match(/^(.*?)\s*\(([^()]*)\)\s*$/);
  return m ? { title: m[1].trim(), meta: m[2].trim() } : { title: text.trim(), meta: '' };
}

function parseYears(meta) {
  const range = meta.match(/(\d{4})\s*-\s*(\d{4}|present)/i);
  if (range) {
    const ongoing = /present/i.test(range[2]);
    return { start: +range[1], end: ongoing ? null : +range[2], ongoing, match: range[0] };
  }
  const single = meta.match(/\b\d{4}\b/);
  if (single) return { start: +single[0], end: +single[0], ongoing: false, match: single[0] };
  return null;
}

function nest(flat) {
  const root = { children: [] };
  const stack = [{ indent: -1, node: root }];
  for (const { indent, text } of flat) {
    while (stack[stack.length - 1].indent >= indent) stack.pop();
    const node = { text, children: [] };
    stack[stack.length - 1].node.children.push(node);
    stack.push({ indent, node });
  }
  return root.children;
}

function parseReadme(md) {
  const sections = [];
  let section = null;
  let item = null;

  for (const line of md.split(/\r?\n/)) {
    let m;
    if ((m = line.match(/^##\s+(.+)$/))) {
      const { title, meta } = splitParen(m[1]);
      const years = parseYears(meta);
      const role = (years ? meta.replace(years.match, '') : meta).replace(/^[\s,]+|[\s,]+$/g, '');
      section = { title, years, role, items: [], flat: [] };
      sections.push(section);
      item = null;
    } else if (!section) {
      continue;
    } else if ((m = line.match(/^###\s+(.+)$/))) {
      item = { ...splitParen(m[1]), flat: [] };
      section.items.push(item);
    } else if ((m = line.match(/^(\s*)[*-]\s+(.*)$/))) {
      (item || section).flat.push({ indent: m[1].length, text: m[2].trim() });
    } else if (line.trim() && !line.startsWith('#')) {
      (item || section).flat.push({ indent: 0, text: line.trim() });
    }
  }

  for (const s of sections) {
    s.bullets = nest(s.flat);
    for (const it of s.items) it.bullets = nest(it.flat);
  }
  return sections;
}

// Dated entries newest first; undated ones (side projects, school) follow in README order.
function order(sections) {
  const dated = sections.filter((s) => s.years).sort((a, b) => b.years.start - a.years.start);
  return [...dated, ...sections.filter((s) => !s.years)];
}

function link(label, url) {
  if (IMAGE_URL.test(url)) {
    return `<a class="thumb" href="${esc(url)}"><img src="${esc(url)}" alt="${esc(label)}" loading="lazy" onerror="this.remove()"><span>${esc(label)}</span></a>`;
  }
  return `<a href="${esc(url)}">${esc(label)}</a>`;
}

function inline(text) {
  let out = '';
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const url = m[2] || m[3];
    const label = m[1] || url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    out += esc(text.slice(last, m.index)) + link(label, url);
    last = m.index + m[0].length;
  }
  return out + esc(text.slice(last));
}

function list(nodes) {
  if (!nodes.length) return '';
  return `<ul>${nodes.map((n) => `<li>${inline(n.text)}${list(n.children)}</li>`).join('')}</ul>`;
}

function dateLabel(s) {
  const parts = [];
  const y = s.years;
  if (y) {
    parts.push(y.start === y.end ? `${y.start}` : `${y.start} — ${y.ongoing ? 'Present' : y.end}`);
    const span = (y.ongoing ? new Date().getFullYear() : y.end) - y.start;
    if (span >= 2) parts.push(`${span} years`);
  }
  if (s.role) parts.push(s.role);
  return parts.join(' · ');
}

function navLabel(s) {
  const y = s.years;
  if (!y) return '';
  if (y.ongoing) return `${y.start}–`;
  return y.start === y.end ? `${y.start}` : `${y.start}–${y.end}`;
}

function renderShipped(item) {
  const rows = item.bullets.map((b) => {
    const { title, meta } = splitParen(b.text);
    return `<li><span class="name">${inline(title)}</span>${meta ? `<span class="role">${inline(meta)}</span>` : ''}${list(b.children)}</li>`;
  });
  return `<div class="shipped"><h3 class="label">${esc(item.title)}</h3><ul>${rows.join('')}</ul></div>`;
}

function renderDuties(item) {
  const chips = item.bullets.map((b) => `<li>${inline(b.text)}</li>`);
  return `<div><h3 class="label">${esc(item.title)}</h3><ul class="chips">${chips.join('')}</ul></div>`;
}

function renderCard(item) {
  return `<article class="card"><h3>${inline(item.title)}</h3>${item.meta ? `<p class="tag">${inline(item.meta)}</p>` : ''}${list(item.bullets)}</article>`;
}

function renderSection(s) {
  const isShipped = (it) => /^product contributions$/i.test(it.title);
  const isDuties = (it) => /^general duties$/i.test(it.title);
  const parts = [];

  for (const it of s.items.filter(isShipped)) parts.push(renderShipped(it));
  for (const it of s.items.filter(isDuties)) parts.push(renderDuties(it));

  const cards = s.items.filter((it) => !isShipped(it) && !isDuties(it)).map(renderCard);
  if (s.bullets.length) cards.unshift(`<article class="card">${list(s.bullets)}</article>`);
  if (cards.length) parts.push(`<div class="cards">${cards.join('')}</div>`);

  const state = !s.years ? 'undated' : s.years.ongoing ? 'ongoing' : '';
  const date = dateLabel(s);
  return `<section class="entry ${state}" id="${slug(s.title)}">
    <div class="rail"><div class="dot"></div></div>
    <div class="body">
      ${date ? `<div class="date">${esc(date)}</div>` : ''}
      <h2>${inline(s.title)}</h2>
      ${parts.join('\n')}
    </div>
  </section>`;
}

function render(sections) {
  const sorted = order(sections);
  document.getElementById('nav').innerHTML = sorted.map((s) => {
    const when = navLabel(s);
    return `<a href="#${slug(s.title)}">${esc(s.title)}${when ? ` <span>${esc(when)}</span>` : ''}</a>`;
  }).join('');
  document.getElementById('timeline').innerHTML = sorted.map(renderSection).join('\n');
}

async function main() {
  const timeline = document.getElementById('timeline');
  try {
    const res = await fetch(README_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    render(parseReadme(await res.text()));
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  } catch (err) {
    timeline.innerHTML = `<p class="status">Couldn't load ${esc(README_URL)} (${esc(err.message)}). If you opened this file directly, serve the folder over HTTP instead, for example <code>python -m http.server</code>.</p>`;
  }
}

if (typeof document !== 'undefined') main();
if (typeof module === 'object') module.exports = { parseReadme, order };

## Honeywell (2007-2010)

### Product Contributions
 * IS2500SN (Primary firmware developer)
 * DT7500SN (Primary firmware developer)
 * DTPI8M (Primary firmware developer)

### General Duties
 * C firmware development on MSP430
 * C# utility development
 * Python/Javascript scripting for misc. tool support

### Experiment to determine feasibility of resistance to bright incandescent light
 * Multiple circuit/software/mechanical experiments performed
 * Formal report written and presented to peers
 * New method discovered
 * Implemented new method in all sensors under development at the time
 * Allowed products, for the first time, to be sold in Russian markets
 * Granted patent [US8035514B2](https://patents.google.com/patent/US8035514B2/en)

### Investigated method to record and simulate motion detector algorithms (Walk-Test Simulator)
 * Created database of sensor samples
 * Developed C# application to run different algorithms on the data set and visualize the output
 * Developed C# framework to interface with LabJack USB DAQ hardware for signal injection
 * Developed C# framework to inject pre-recorded walk-test signals

### Developed visual real-time debugging application for sensors
 * Developed Packet format to be used over RS232 port
 * Developed C# application to visualize data in real-time
 * Improved SQA and helped to identify bugs

### Investigated CR123 battery performance issues
 * Created circuit interfacing relays to controller board and had it manufactured
 * Developed firmware to output sample data to logging PC
 * Developed C# application to parse and log data to a database
 * Developed Ruby script to parse data and host a local webserver with data visualization (google visualization API)
 * Determined batteries from some manufacturers had critical performance issues

### Investigated clock jitter performance issue
 * Setup experiment comparing clock jitter among several controller platforms (TI MSP430 vs PIC18 vs Atmel ATMega)
 * Correlated clock jitter to microwave performance degradation

### Investigated dropped wireless packet issue
 * Setup experiment with varying number of sensors and broadcast periods
 * Developed C# logging application to interface with proprietary security panel
 * Logged and time-stamped received packets
 * Determined packet loss could be attributed to RF collision for sufficiently large installations

### Investigated alarm latching issue
 * Evaluated hardware problem related to alarm relays latching too long
 * Simulated circuit in spice
 * Performed smoke analysis on circuit
 * Determined that when all components varied (within tolerance) they could latch the drive transistor
 * Suggested circuit/component change to fix problem

### Investigated use of LED as light detection source
 * Created sample hardware/firmware
 * Showed working prototype

### Developed firmware for motion detectors
 * Power-over-network motion detector [DT7500SN](http://www.security.honeywell.com/hsc/products/sensor/mo/vplex/263626.html) / [IS2500SN](http://www.security.honeywell.com/hsc/products/sensor/mo/vplex/263620.html)
 * EMEA wireless motion detector (DTPI8m)
 * Developed new algorithm for immunity to noisy fluorescent lights
 * Developed low-power framework (<50uA) to extend battery life to > 4 years on devices

## Verifone (2010-2012)

### Product Contributions
 * [Vx520 Sprocket](http://www.verifone.com/PDF/VX520_Acq_Ltr.pdf) (Primary OS driver developer)
 * [Vx680 WiFi/Bluetooth](http://www.verifone.com/PDF/VX680_Acq_Ltr.pdf) (Primary OS driver developer)
 * Verix OS

### General Duties
 * C firmware development on proprietary financial terminal OS (ARM1176 with security Enclave)
 * C# utility development
 * Ruby/Python/Javascript scripting for misc. tool support
 
### Developed dot-matrix printer driver Vx520 Sprocket
 * Driver to efficiently run printer hardware within specification
 * Developed C# simulator application to simulate printer-head motor-control timing and troubleshoot driver issues

### Ported 802.11b/g driver for BCM4329 from linux to proprietary OS for Vx680 WiFi/Bluetooth
 * Identified necessary changes and created development strategy
 * Created test applications to interface directly with driver and test essential hardware
 * Worked with library development team to create user-level interfaces
 * Worked with test engineers to develop tests for Wifi-Alliance certification

### Merged build and authentication tools into source controlled environment
 * Moved all build/authentication/signing tools into single "tools" git repository
 * Developed batch files to automate installation and easy switching between tool versions
 * Synchronized version tracking of tools with projects such that tool versions and releases were correlated
 * Created scripts to make pulling/building projects a single-step
 * New developer bring-up time dropped from days to ~15 minutes

### Migrated OS team from legacy source control management system to modern DVCS(git)
 * PVCS to Git
 * Developed Ruby script to automate database conversion
 * Mentored team members
 * Hosted training sessions
 * Worked with management to ensure seamless transition -- no developer down-time

### Developed helper utilities to automate tedious build and release processes
 * Developed Ruby script to automate release note extraction from git log
 * Developed Ruby script for "smart" project directory cleaning
 * Added commit-template feature to Git Extensions (open source project)

### Setup continuous integration server and automated build system
 * Researched and purchased server machine and CI software systems
 * Configured Jenkins CI software with multiple-level email reporting
 * Developed C# email bot that could build specified versions and reply with binary
 * Configured VNC software for secure remote file signing

## DMEA (2012 - Present)

### Product Contributions
 * PCMCIA/USB Data Transfer Device for Avionics (Primary firmware developer -- used on C-5/C-130/F-22)
 * Milstar Time Synchronization Module (Primary firmware developer)
 * USB 3.0 Data Transfer Module for Avionics (Technical team lead, firmware team member -- F-15)
 * Numerous battery-operated SATCOM transmitter modules (Program lead)

### General Duties
 * C++ firmware development on ARM Cortex-M microcontrollers
 * C# utility development
 * Python/Javascript scripting for misc. tool support
 * Program/Growth/Partnership management
 
### Developed configuration application for numerous custom embedded device
 * C# GUI to read/write device configuration for embedded devices

### Created tool to automated microcontroller/CPLD programming and testing
 * Detect each programming interface
 * Erase-Program-Test each device
 * Trigger SATCOM transmits and verify message receipt on back-end server to end-to-end verificiton

### Created unit test framework for embedded software
 * Implemented on IAR compiler/simulator
 * Created parser to output results to junit compatible format readable by CI server

### Architectural hardware design and firmware design of dual-interface data storage device for C-5
 * PCMCIA and USB mass storage
 * C++ firmware on ARM Cortex-M3 (LPC18xx)

### Architectural hardware design and firmware design of high-performance data storage device for F-15
 * Embedded Linux on ARM Cortex A8 (ATSAMA5D36)
 * C Firmware on ARM Cortex M0 (LPC824)
 * Architected hardware design over ~12 months to meet vigorous requirements
 * Worked to bring up embedded linux with <3 second boot time
 * 512GB SSD, 64MB DDR RAM disks, configuration interface over USB2.0/3.0

### Team lead and principal firmware developer on numerous bespoke SATCOM modules
 * ST STM32 L4/F7/H7
 * Custom, ultra-small, and ultra-low-power (<1uA), battery-operated SATCOM modules
 * Lead a multi-disciplinary team of 12+ HW/SW/test/mechanical engineers to deliver products on short timelines

## Torpedo (Consultant, 2006 - Present)

### Developed controller for networked pan-tilt cameras (OnScene Systems, 2008)
 * Schematic capture/layout for handheld controller, central routing and camera controller
 * Developed firmware for controller signal routing (ATmega32)

### Developed controller for automated cat-litter cleaning machine (Litter Revolution, 2010)
 * Schematic capture/layout for machine controller
 * Developed firmware (UI, motor control, audio indication, safety)

### Developed Controller and infrastructure for research-grade modular robot (Barobo iMobot, 2011)
 * Schematic capture/layout for central controller, sensors, and peripheral connector boards
 * Worked with mechanical engineer to ensure placement and compatibility with mechanical housing
 * Developed three-layer hardware platform: Sensor(MSP430) <-> (Hardware Controller)ARM Cortex-M3 <-> (Master Controller)OMAP 3530
 * Developed custom multi-master I2C protocol to allow transactions between each layer
 * Wrote hardware drivers for device bring-up
 * http://www.barobo.com/

### Firmware for IR LED biomedical device (Photon Inc/HealthLight, 2015-2021)
 * Version 1
   * PSOC
   * Firmware for 4-port controller and single controller
   * C
 * Version 2
   * LPC8xx/LPC15xx
   * Added overcurrent/short detection
   * C++
 * Version 3
   * ATSAMD21
   * C++

## NASA (Summer internship, 2006)
 * Researched high efficiency closed-form solution to the forward kinematics of the NASA Contact Dynamics Simulation Laboratory six-DOF Stewart platform.
 * Developed and programmed solution algorithm (MATLAB)
 * [Project](https://github.com/jotux/Steward-Platform-Forward-Kinematics-Solver)

## Just for fun

### Created web app to expand C macros
 - Used for macro debugging
 - ASP.net and python

### Created proof-of-concept app to generate interactive pages from plaintext (coffeescript)
 * http://jotux.github.io/fangle/

### Created proof-of-concept app to visual display GCC linker map files (javascript)
 * http://jotux.github.io/GccMapVisualizer/

### Designed Sentry Robot For defcon 15/16 robot contest (DEFCONBOTS)
 * Robotic shooting gallery robot to shoot down targets as fast as possible
 * 15
    * [Screenshot of software](https://github.com/jotux/HaveDone/raw/master/img/bot29b.png)
    * [First Version](https://github.com/jotux/HaveDone/raw/master/img/bot29.jpg)
    * [Video of Pan-tilt system](http://www.youtube.com/watch?v=6BDaiTIeJFQ&list=UUIRt6onLVr6kQqrAGQUXr_Q&index=13&feature=plcp)
    * [Video of custom hopper I machined for first version](http://www.youtube.com/watch?v=Lcp9O3q8qRk&list=UUIRt6onLVr6kQqrAGQUXr_Q&index=15&feature=plcp)
    * [Video of development](http://www.youtube.com/watch?v=XiPxKCMyNRM&list=UUIRt6onLVr6kQqrAGQUXr_Q&index=11&feature=plcp)
    * [Video of competition](http://www.youtube.com/watch?v=qNHM4yJPc9o&list=UUIRt6onLVr6kQqrAGQUXr_Q&index=12&feature=plcp)
 * 16
    * [Pic1](https://github.com/jotux/HaveDone/raw/master/img/bot19.jpg)
    * [Pic2](https://github.com/jotux/HaveDone/raw/master/img/bot20.jpg)
    
### Designed and hosted robot laser contest for defcon 22/23 (DEFCONBOTS)
 * Defconbots.org
 * Hardware design of targets
 * Firmware for targets
 * Contacted sponsors and got ~$3000 in prizes donated
 * 22
   * MSP430G2452 and standalone targets
 * 23
   * LPC824 with zigbee connection to targets
   * Wrote application to communicate with targets and run contest from laptop (C#)

## CSUS

### Designed step-up voltage converter

### Cofounded on-campus robotics enthuist club (Competitive Robotics @ CSUS)

### Designed 360-degree robotic camera platform
 * [Model](https://github.com/jotux/HaveDone/raw/master/img/cambot.JPG)
 * [Finished Robot](https://github.com/jotux/HaveDone/raw/master/img/cambot3.JPG)

### Design electro-ocular PC mouse replacement (senior project)

### Super-Heavyweight battlebot (340 lb)
 * [Video of competition](http://www.youtube.com/watch?v=tXloMf5v4C4&feature=autoplay&list=UUIRt6onLVr6kQqrAGQUXr_Q&lf=p)

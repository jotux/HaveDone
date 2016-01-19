###Honeywell

####Experiment to determine feasibility of resistance to bright incandescent light
 * Multiple circuit/software/mechanical experiments performed
 * Formal report written and presented to peers
 * New method discovered
 * Implemented new method in all sensors under development at the time
 * Allowed products, for the first time, to be sold in Russian markets
   Filed and granted patent [US8035514B2](http://www.google.com/patents?id=ZPb3AQAAEBAJ&printsec=frontcover&dq=US8035514B2)

####Investigated alternative motion detection algorithms
 * Created database of sensor samples
 * Developed C# application to run different algorithms on the data set and visualize the output
 * Created framework for in-circuit signal injection

####Developed C# framework to generate and visualize signals to be injected into motion detector
 * Developed C# framework to interface with LabJack USB DAQ hardware for signal injection
 * Developed C# framework to inject pre-recorded walk-test signals

####Developed visual real-time debugging application for sensors
 * Developed Packet format to be used over RS232 port
 * Developed C# application to visualize data in real-time
 * Sped SQA cycle and exposed several minor bugs

####Investigated battery performance issues
 * Created schematic interfacing relays to controller board and had it manufactured
 * Developed firmware to output sample data to logging PC
 * Developed C# application to parse and log data to a database
 * Developed Ruby script to parse data and host a local webserver with data visualization (google visualization API)
 * Determined batteries from some manufacturers had critical performance issues

####Investigated clock jitter performance issue
 * Setup experiment comparing clock jitter among several controller platforms
 * Correlated clock jitter to microwave performance degradation

####Investigated dropped wireless packet issue
 * Setup experiment with varying number of sensors and broadcast periods
 * Developed C# logging application to interface with proprietary security panel
 * Logged and time-stamped received packets
 * Determined packet loss could be attributed to RF collision for sufficiently large installations

####Investigated alarm latching issue
 * Evaluated hardware problem related to alarm relays latching too long
 * Simulated circuit in spice
 * Performed smoke analysis on circuit
 * Determined that when all components varied (within tolerance) they could latch the drive transistor
 * Suggested circuit/component change to fix problem

####Investigated use of LED as light detection source
 * Created sample hardware/firmware
 * Showed working prototype

####Developed firmware for motion detectors
 * Power-over-network motion detector [DT7500SN](http://www.security.honeywell.com/hsc/products/sensor/mo/vplex/263626.html) / [IS2500SN](http://www.security.honeywell.com/hsc/products/sensor/mo/vplex/263620.html)
    * Developed new algorithm for immunity to noisy fluorescent lights
    * Developed low-power framework (<1mA)
    * MSP430F2232/MSP430F2274
 * EMEA wireless motion detector (DTPI8m)
    * Developed ultra-low-power framework (<50uA) to extend battery life to > 4 years

####Investigated sustainment hardware issues
 * Part replacement for legacy pulse-extender circuit

###Verifone
####Developed dot-matrix printer driver ([Vx520](http://www.verifone.com/PDF/VX520_Acq_Ltr.pdf) Sprocket)
 * Driver to efficiently run printer hardware within specification
 * ARM1176?

####Ported 802.11b/g driver from linux to proprietary OS ([Vx680](http://www.verifone.com/PDF/VX680_Acq_Ltr.pdf))
 * Identified necessary changes and created development strategy
 * Created test applications to interface directly wtih driver and test essential hardware
 * Worked with library development team to create user-level interfaces
 * Worked with test engineers to develop interface for Wifi-Alliance certification
 * ARM1176?

####Merged build and authentication tools into source controlled environment
 * Moved all build/authentication/signing tools into single "tools" git repository
 * Developed batch files to automate installation and easy switching between tool versions
 * Synchronized version tracking of tools with projects such that tool versions and releases were correlated
 * Created scripts to make pulling/building projects a single-step
 * New developer bring-up time dropped from days to ~15 minutes

####Migrated OS team from legacy source control management system to modern DVCS(git)
 * PVCS to Git
 * Developed Ruby script to automate database conversion
 * Mentored team members
 * Hosted training sessions
 * Worked with management to ensure seamless transition -- no developer down-time

####Developed helper utilities to automate tedious build and release processes
 * Developed Ruby script to automate release note extraction from git log
 * Developed Ruby script for "smart" project directory cleaning
 * Added commit-template feature to Git Extensions (open source project)

####Setup continuous integration server and automated build system
 * Researched and purchased server machine and CI software systems
 * Configured Jenkins CI software with multiple-level email reporting
 * Developed C# email bot that could build specified versions and reply with binary
 * Configured VNC software for secure remote file signing

###DMEA

####Designed board to test GPS tracking hardware
 * Discovered more energy efficient hardware
 * PCB layout
 * Worked with in-house lab to ensure design-for-manufacturing

####Re-wrote configuration application for custom hardware
 * Dramatically reduced design complexity (x10 smaller)
 * Made communication asynchronous (no longer locks up while communicating)
 * More standardized and usable UI
 * Added support for flexible file formats (CSV, XML)
 * Created standard installer 

####Designed motion/vibration detection algorithm
 * Created demonstration UI in C#
 * Created design specification document
 * Assisted with implementation in several projects

####Evaluated alternative parity check algorithms
 * Created evaluation tool and tested several algorithms
 * benchmarked algorithms
 * suggested alternative to current implementation that would increase processing speed by 300-500%

####Created settings download and read protocol.
 * Wrote embedded protocol parser
 * Allows for n-length variable/value pairs to be configured on embedded device with simple string syntax
 * Implemented in several projects

####Redesigned timed-switch firmware and Gui interface
 * Wrote code to implement timed-switch
 * MSP430FR5728
 * Recreated .net gui interface
 * Implemented standard settings protocol to interface gui to hardware
 * Chose controller platform based on design needs
 * Synchronized design decisions with hardware engineer

####Created tool to automated microcontroller/CPLD programming (for production bring-up)
 * Detect each programming interface
 * Erase each device
 * Program each device
 * Created portable C# library to easily implement the interface in more complex applications 

####Created C syntax and language use standards
 * Created design document
 * Negotiated with team to agree on standard

####Created/Implemented standardized software development process
 * Repository management
 * Program management
 * Defect tracking
 * Continuous integration
 * Review

####Created unit test framework for embedded software
 * Implemented on IAR compiler/simulator
 * Created parser to output results to junit compatible format readable by CI server

####Firmware for multi-bus data storage device
 * PCMCIA and USB mass storage
 * Assisted with hardware development
 * ARM cortex-m3

####Architectural hardware design and firmware design of high-performance data storage device for F15
 * ARM Cortex A8 (ATSAMA5D36)
 * ARM Cortex M0 (LPC824)
 * Architected hardware design over ~12 months to meet vigorous requirements
 * Worked to bring up embedded linux with <5 second boot time
 * Brought up low-power controller for power management
 * 512GB SSD, 64MB DDR RAM disks, customer configuration interface over USB3/2

####Designed Enclosure for multi-protocol tracking device
 * Solidworks
 * 3D printed enclosure

####Designed case for tracking device that fits in pack of gum
 * Worked with hardware engineer to import/export designs
 * Solidworks
 * 3D printed case

####Assisted with reverse engineering effort
 * Provided archetectural overview consulting
 * Created target firmware to be used to verify process
 * Wrote scripts to automate output parsing (Python)

### Torpedo

####Developed controller for networked pan-tilt cameras
 * Schematic capture/layout for handheld controller, central routing and camera controller
 * Developed firmware for controller signal routing

####Developed controller for automated cat-litter cleaning machine
 * Schematic capture/layout for machine controller
 * Developed firmware (UI, motor control, audio indication, safety)

####Developed Controller and infrastructure for research-grade modular robot
 * Schematic capture/layout for central controller, sensors, and peripheral connector boards
 * Worked with mechanical engineer to ensure placement and compatibility with mechanical housing
 * Developed three-layer hardware platform: Sensor(MSP430) <-> (Hardware Controller)ARM Cortex-M3 <-> (Master Controller)OMAP 3530
 * Developed custom multi-master I2C protocol to allow transactions between each layer
 * Wrote hardware drivers for device bring-up
 * http://www.barobo.com/

####Firmware for IR LED biomedical device
 * PSOC
 * Firmware for 4-port controller and single controller

#### Hardware and firmware for redesigned IR LED biomedical device
 * LPC15xx
 * Added overcurrent/short detection
 * C++

#### Hardware design of biomedical IR helmet
 * Schematic capture in Altium
 * Circuit debug

### Just for fun

#### Created general pupose library for MSP430 microcontrollers
 * http://jotux.github.io/LaunchLib/
 * Fully documented
 * scheduler
 * PWM
 * UART (blocking and non-blocking)
 * ADC
 * State Machine framework
 * Interrupt handler

#### Created web app to expand C macros
 - Used for macro debugging
 - ASP.net and python

#### Created proof-of-concept app to generate interactive pages from plaintext (coffeescript)
 * http://jotux.github.io/fangle/

#### Created proof-of-concept app to visual display GCC linker map files (javascript)
 * http://jotux.github.io/GccMapVisualizer/

#### Designed robot laser contest for defcon 22/23
 * Defconbots.org
 * Hardware design of targets
 * Firmware for targets
 * Contacted sponsor and got ~$3000 in prizes donated
 * 22
   * MSP430G2452 and standalone targets
 * 23
   * LPC824 with zigbee connection to targets
   * Wrote application to communicate with targets and run contest from laptop (C#)

### CSUS
 * Designed step-up voltage converter
 * 

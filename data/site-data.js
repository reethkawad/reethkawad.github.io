// SITE DATA — single editable file for content

const ABOUT = {
  name: "Reeth S. Kawad",
  title: "Mechanical Engineer",
  tagline: "Hardware Test · Controls · Simulation",
  sub: "Clean Energy · Robotics · Dynamic Systems",
  bio: [
    "I'm a Mechanical Engineering student at USC (GPA 3.6, May 2026) with a minor in AI Applications, focused on controls, mechatronics, robotics, and thermofluid systems.",
    "My work sits at the intersection of physical hardware and intelligent system behaviour — I design, build, instrument, and test systems that interact with the real world.",
    "I've built a transient hot-wire thermal conductivity system from scratch, designed a production-ready robotic sanding fixture spanning 14 SKUs, developed full electronics and controls for USC's first Collegiate Wind Competition turbine, and co-founded FireWarden — a wildfire mitigation startup that won $20K at InnovateLA and entered Techstars.",
    "I'm actively looking for roles in robotics, clean energy, industrial automation, and hardware-focused engineering — wherever rigorous first-principles thinking and hands-on experimentation create real-world impact."
  ],
  photo: "assets/profile_picture.png",
  email: "kawad@usc.edu",
  linkedin: "https://www.linkedin.com/in/reethkawad/",
  github: "https://github.com/kawadreeth",
  resume: "assets/Reeth_Kawad_CV.pdf"
};

// Projects (converted from legacy `data/projects.js` format)
const PROJECTS = [
  {
    slug: "vawt",
    title: "Vertical Axis Wind Turbine",
    zone: "cleantech",
    thumb: "assets/projects/vawt/thumb.jpg",
    summary: "Adaptive pitch control for a VAWT to enhance energy capture in low-wind urban environments.",
    description: `Engineering an adaptive pitch control system for a vertical axis wind turbine to enhance energy efficiency in low-wind environments. The focus is on optimizing blade design and mechanical power conversion through iterative simulation and physical testing. Key challenges include passive vs. active pitch mechanisms and maintaining structural integrity under variable loading.`,
    tags: ["Wind Energy", "Controls", "SolidWorks"]
  },
  {
    slug: "dexhand",
    title: "8 DoF Robotic Hand",
    zone: "robotics",
    thumb: "assets/projects/dexhand/thumb.png",
    summary: "Dexterous robotic hand for USC's DRCL bipedal robot — tendon-driven with impact-tolerant MCP joints.",
    description: `Designing and building a robotic hand for the Dynamic and Robotic Controls Lab (DRCL) at USC, to be mounted on the bipedal robot Hector. The hand has two fingers and a thumb across 8 degrees of freedom...`,
    tags: ["Robotics", "Mechanical Design", "Actuation"]
  },
  {
    slug: "windtunnel",
    title: "Blowdown Wind Tunnel",
    zone: "hardware",
    thumb: "assets/projects/windtunnel/thumb.jpg",
    summary: "Designed and fabricated a 1.5 m blowdown wind tunnel validating honeycomb flow straighteners.",
    description: `Designed and built a 1.5-meter-long blowdown wind tunnel with a 100×100 mm² test section, primarily using plywood and acrylic...`,
    tags: ["Aerodynamics", "Fabrication", "Flow Testing"]
  },
  {
    slug: "firewarden",
    title: "Wildfire Defense Water Pump",
    zone: "cleantech",
    thumb: "assets/projects/firewarden/thumb.jpg",
    summary: "Pool-fed automated spray system with MATLAB-modeled hydraulics for Palisades wildfire defense.",
    description: `Developed a water pump system for wildfire protection by integrating a pool-based spray network with manual activation...`,
    tags: ["Cleantech", "Fluid Systems", "MATLAB"]
  },
  {
    slug: "fsae",
    title: "FSAE Projects",
    zone: "hardware",
    thumb: "assets/projects/fsae/thumb.jpg",
    summary: "Aero parts, CFD automation, custom tools, and CNC manufacturing for a Formula SAE race car.",
    description: `Multiple subsystem contributions to the USC Formula SAE team across aerodynamics, tooling, and manufacturing...`,
    tags: ["Automotive", "CFD", "CNC"]
  },
  {
    slug: "waterrocket",
    title: "Water Rocket Flight Optimization",
    zone: "hardware",
    thumb: "assets/projects/waterrocket/thumb.JPG",
    summary: "MATLAB simulation optimizing air/water ratio, pressure, and parachute size for maximum altitude.",
    description: `Developed a MATLAB simulation to optimize a water rocket's air-to-water fill ratio, initial pressure, and parachute surface area...`,
    tags: ["MATLAB", "Simulation", "Optimization"]
  },
  {
    slug: "drone",
    title: "Drone CAD & Structural Analysis",
    zone: "hardware",
    thumb: "assets/projects/drone/thumb.png",
    summary: "Full quadrotor drone CAD in Siemens NX with FEA and multi-body dynamics for structural validation.",
    description: `Designed a quadrotor drone frame using Siemens NX CAD and conducted comprehensive structural validation using FEA and MBD in ANSYS...`,
    tags: ["CAD", "FEA", "Drones"]
  },
  {
    slug: "bridge",
    title: "Truss Bridge Optimization",
    zone: "hardware",
    thumb: "assets/projects/bridge/thumb.png",
    summary: "Parametric MATLAB truss analysis optimizing bridge geometry for maximum load-to-weight ratio.",
    description: `Modeled and analyzed truss bridge forces using parametric MATLAB simulations...`,
    tags: ["Structural", "MATLAB", "Optimization"]
  },
  {
    slug: "monopoly",
    title: "Automated Monopoly Board",
    zone: "hardware",
    thumb: "assets/projects/monopoly/thumb.png",
    summary: "Electromechanical Monopoly board enabling human vs. bot gameplay — 1st place finish.",
    description: `Led the electro-mechanical design of a robotic Monopoly board game...`,
    tags: ["Mechatronics", "Arduino", "Fabrication"]
  },
  {
    slug: "walkane",
    title: "Walkane — Walker-Cane Hybrid",
    zone: "hardware",
    thumb: "assets/projects/walkane/thumb.png",
    summary: "Collapsible assistive device bridging cane and walker — 2nd place in competition.",
    description: `Engineered a hybrid walker-cane with a collapsible mechanism designed to improve stability during transitions...`,
    tags: ["Product Design", "Prototyping"]
  },
  {
    slug: "alarm",
    title: "Smart Alarm Clock — REM Monitoring",
    zone: "hardware",
    thumb: "assets/projects/alarm/thumb.png",
    summary: "Arduino DAQ alarm that tracks BPM to wake users during optimal REM sleep — 1st place hackathon.",
    description: `Built a smart alarm clock integrating a pulse oximeter sensor and Arduino-based DAQ to track heart rate...`,
    tags: ["Arduino", "Sensors"]
  },
  {
    slug: "kothcar",
    title: "2-DoF Bluetooth Car",
    zone: "robotics",
    thumb: "assets/projects/kothcar/thumb.jpg",
    summary: "Custom-built Arduino car with Bluetooth remote control and two-axis steering.",
    description: `Designed and built a two-degree-of-freedom remote-controlled car with Bluetooth communication...`,
    tags: ["Arduino", "Fabrication"]
  }
];

// Experience (populated from master career doc)
const EXPERIENCE = [
  {
    slug: "graymatter",
    company: "GrayMatter Robotics",
    logo: "",
    role: "Robotics Systems & Applications Intern",
    dates: "Jan 2026 – May 2026",
    location: "Torrance, CA",
    zone: "robotics",
    bullets: [
      "Led mechanical design for a production-ready universal sanding fixture accommodating 14 SKUs; eliminated vision misclassification and validated performance through force testing.",
      "Built a multimodal DAQ pipeline and analytics for sanding characterisation, reducing industrial engineering time studies by ~40% and producing a reusable analytics/visualisation stack."
    ]
  },
  {
    slug: "lumindt",
    company: "Lumindt Labs",
    logo: "assets/lumindt.JPG",
    role: "Mechanical Engineering Intern",
    dates: "Jun 2025 – Aug 2025",
    location: "San Francisco, CA",
    zone: "cleantech",
    bullets: [
      "Designed and built a transient hot-wire thermal conductivity measurement system (Raspberry Pi DAQ, custom signal conditioning) achieving <10% uncertainty for metal powder characterisation.",
      "Designed production-ready skid and modular fuel-cell frame hardware; performed ASME-based preliminary stress analysis and manifold routing for hydrogen/coolant lines."
    ]
  },
  {
    slug: "makerspace",
    company: "USC Baum Family Makerspace",
    logo: "assets/machining.jpg",
    role: "Machinist & Fabrication Engineer",
    dates: "Sep 2023 – Present",
    location: "Los Angeles, CA",
    zone: "hardware",
    bullets: [
      "Programmed and operated Haas CNC, ProtoTRAK, Omax waterjet, and laser cutter; manufactured GD&T-critical parts to ±0.001 inch tolerances.",
      "Fabricated 100+ 3D printed prototypes and provided DFM guidance to reduce iteration cycles for research teams."
    ]
  },
  {
    slug: "drcl",
    company: "USC Dynamic Robotics & Controls Lab",
    logo: "",
    role: "Mechanical Engineer",
    dates: "Sep 2025 – Present",
    location: "Los Angeles, CA",
    zone: "robotics",
    bullets: [
      "Designed a Series Elastic Actuator (SEA) module and 8-DOF robotic hand finger assemblies; validated force feedback fidelity on bench tests.",
      "Simulated hand kinematics in MuJoCo and wrote C++ motor driver code for embedded control."
    ]
  },
  {
    slug: "tutr",
    company: "TuTr Hyperloop",
    logo: "",
    role: "Mechanical Engineer Intern",
    dates: "Jun 2024 – Jul 2024",
    location: "Los Angeles, CA",
    zone: "hardware",
    bullets: [
      "Optimized hyperloop chassis weight by 30% using 1D/3D structural analysis in ANSYS and Siemens NX while preserving structural margins."
    ]
  }
];

const SKILLS = {
  controls: {
    label: "Controls & Firmware",
    items: ["Arduino IDE", "I2C architecture", "State machine design", "PID control", "Bayesian optimisation", "MOSFET braking", "Buck-boost converter", "Embedded C++"]
  },
  robotics: {
    label: "Robotics",
    items: ["ROS2", "RVIZ", "FANUC arm programming", "Toolpath planning (CNT/orientation/overlap)", "Point cloud segmentation", "MuJoCo simulation", "Reachability studies"]
  },
  sensing: {
    label: "Sensing & DAQ",
    items: ["Force sensors", "IMUs", "OpenVR position tracking", "Thermal sensors", "Transient hot-wire", "Multimodal sync 100+ Hz", "Signal conditioning", "Rerun visualisation", "LabVIEW"]
  },
  mechanical: {
    label: "Mechanical Design",
    items: ["SolidWorks", "Siemens NX", "Fusion 360", "GD&T", "DFM", "Compliant mechanisms", "SEA design", "Parallel link mechanisms", "Weldment design"]
  },
  simulation: {
    label: "Simulation & Analysis",
    items: ["ANSYS Mechanical FEA", "ANSYS Fluent CFD", "MuJoCo", "QBlade", "StarCCM+", "MATLAB/Simulink", "FLORIS wake optimiser"]
  },
  manufacturing: {
    label: "Manufacturing",
    items: ["Haas CNC Mill & Lathe", "ProtoTRAK", "Omax Waterjet", "Laser Cutter", "MasterCam", "FDM/SLA/Carbon Fibre 3D Printing", "Composite Layup", "Resin Infusion", "±0.001\" tolerancing"]
  },
  thermofluids: {
    label: "Thermofluids",
    items: ["Transient hot-wire method", "Heat exchanger design", "Coolant loop analysis", "Fluid dynamics", "CFD (Fluent)", "Thermal management", "Hydrogen system thermal characterisation"]
  },
  structural: {
    label: "Structural",
    items: ["ASME stress analysis", "Weldment structural calc", "Chassis optimisation", "Blade load case analysis", "1D & 3D FEA"]
  },
  software: {
    label: "Software & Scripting",
    items: ["Python", "MATLAB", "C++", "Arduino", "ROS2", "YAML/JSON", "GitHub", "LabVIEW"]
  },
  energy: {
    label: "Energy Systems",
    items: ["Wind turbine controls & design", "FLORIS farm optimisation", "QBlade/StarCCM+ blade aero", "Thermal energy storage", "Electrolyser & fuel cell systems", "Hydrogen gas handling"]
  },
  leadership: {
    label: "Leadership & Entrepreneurship",
    items: ["Team founding & management", "Cross-functional stakeholder coordination", "Customer discovery", "Pitch competitions", "Partnership development", "Chapter founding (AEE USC)"]
  }
};

// Expose for debugging
window.SITE = { ABOUT, PROJECTS, EXPERIENCE, SKILLS };

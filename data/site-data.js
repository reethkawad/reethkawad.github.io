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
    tags: ["Wind Energy", "Controls", "SolidWorks", "Bayesian Optimisation", "PID"],
    gallery: [],
    star: {
      situation: "VAWTs commonly operate below their theoretical aerodynamic efficiency due to fixed blade pitch — particularly at off-design wind speeds.",
      task: "Design, fabricate, and test a 5-inch H-type VAWT with individual blade pitch control, using Bayesian Optimisation and PID to improve efficiency across operating conditions.",
      action: [
        "Designed and fabricated a 5-inch H-type VAWT with individual blade pitch actuation mechanism.",
        "Implemented Bayesian Optimisation to search the pitch control parameter space.",
        "Developed PID controller for active pitch tracking.",
        "Tested in the wind tunnel — measured Cp vs wind speed curves to validate adaptive pitch performance against fixed-pitch baseline."
      ],
      result: [
        "Targeting approximately 8% efficiency improvement through adaptive pitch vs. fixed pitch baseline.",
        "Built practical expertise in control algorithm implementation (Bayesian Opt + PID), small turbine fabrication, and wind tunnel measurement."
      ]
    }
  },
  {
    slug: "dexhand",
    title: "8 DoF Robotic Hand",
    zone: "robotics",
    thumb: "assets/projects/dexhand/thumb.png",
    tags: ["Robotics", "Mechanical Design", "Actuation", "SolidWorks", "MuJoCo", "C++"],
    gallery: [],
    star: {
      situation: "USC's DRCL is developing an 8-DOF robotic hand capable of catching and throwing a basketball at 20 N force — requiring compliant actuation for safe, controllable contact.",
      task: "Design and prototype the Series Elastic Actuator (SEA) module and rigid finger joints with parallel link mechanism, and validate force feedback fidelity through bench testing.",
      action: [
        "Designed 8-DOF finger joint assemblies with parallel link mechanisms in SolidWorks.",
        "Designed and rapid-prototyped an SEA test fixture for an N20 motor — spring selection, mounting, adhesive strategy, and locking mechanism.",
        "Performed torque calculations for N20 motor selection and validated output torque and compliance against design targets using bench-level force sensor measurements.",
        "Wrote C++ motor driver code for low-level motor control.",
        "Simulated hand kinematics and dynamics in MuJoCo to validate design decisions before hardware build."
      ],
      result: [
        "Produced a functional SEA prototype with validated force feedback fidelity benchmarked against design targets.",
        "Parallel-link finger joints designed and iterated in SolidWorks; prototypes fabricated and tested.",
        "Built practical expertise in compliant actuation design, motor sizing, C++ embedded control, and simulation-to-hardware workflows."
      ]
    }
  },
  {
    slug: "windtunnel",
    title: "Blowdown Wind Tunnel",
    zone: "hardware",
    thumb: "assets/projects/windtunnel/thumb.jpg",
    tags: ["Aerodynamics", "Fabrication", "Flow Testing", "Pitot Tube"],
    gallery: [],
    star: {
      situation: "Wind tunnel turbulence reduces measurement repeatability and test quality.",
      task: "Design, build, and experimentally validate a 20-inch blow-down wind tunnel with a honeycomb flow straightener to quantify turbulence reduction.",
      action: [
        "Designed and fabricated the 20-inch test-section blow-down wind tunnel using a plywood frame, laser-cut acrylic panels, and 3D-printed PLA honeycomb.",
        "Conducted experiments using a pitot tube at multiple cross-sections to map turbulence intensity before and after the flow straightener."
      ],
      result: [
        "Turbulence intensity reduced by 53% at the front measurement location.",
        "Turbulence intensity reduced by 86% at the rear measurement location."
      ]
    }
  },
  {
    slug: "firewarden",
    title: "FireWarden — Wildfire Defense System",
    zone: "cleantech",
    thumb: "assets/projects/firewarden/thumb.jpg",
    tags: ["Cleantech", "Fluid Systems", "Web App", "Entrepreneurship"],
    gallery: [],
    star: {
      situation: "Wildfires are a growing risk for homeowners; most mitigation solutions are expensive and difficult to evaluate. No accessible tool existed for homeowners to size and plan a sprinkler-based defence system.",
      task: "Co-found the startup and lead technical development of a web application making wildfire sprinkler system design accessible — starting with pool-sourced systems.",
      action: [
        "Led development of a web application processing user addresses to generate optimised sprinkler layouts: analysing elevation data, pool resources, property geometry, and roof characteristics.",
        "Applied first-principles fluid dynamics to compute sprinkler flow rates, pressure requirements, and coverage geometry.",
        "Supported pilot deployment analysis on a Laguna Beach home.",
        "Led customer discovery, product development, and pitch competition preparation.",
        "Entered the Techstars Pre-Accelerator programme."
      ],
      result: [
        "Won the DAS InnovateLA Competition — $20,000 in prize funding.",
        "Entered the Techstars Pre-Accelerator programme.",
        "Validated product-market fit through customer discovery and pilot site analysis.",
        "Built strong foundations in startup strategy, technical product development, and technology commercialisation."
      ]
    }
  },
  {
    slug: "cwc",
    title: "USC Collegiate Wind Competition",
    zone: "cleantech",
    thumb: "assets/projects/vawt/thumb.jpg",
    tags: ["Wind Energy", "Controls", "Arduino", "Siemens NX", "QBlade", "FLORIS"],
    gallery: [],
    star: {
      situation: "USC had no CWC team. The turbine's electrical and controls system needed to be designed from scratch by a mechanical engineer with limited prior electronics experience. The team also needed full turbine mechanical design and utility-scale project development analysis to meet DOE competition deliverables.",
      task: "Found the team, design and implement end-to-end turbine electronics/controls and mechanical design, and lead all project development deliverables for the DOE competition.",
      action: [
        "Designed full electrical schematics integrating RPM, voltage, and current sensors via I2C protocol on an Arduino Uno, including firmware in Arduino IDE.",
        "Engineered an electrical braking system using MOSFETs and power resistors as a variable resistive load for rated-power control and safe shutdown.",
        "Implemented a state machine for turbine operating modes: startup, cut-in pitch for max power extraction, and feathering for braking.",
        "Led turbine mechanical design — structure, braking system, and drivetrain — in Siemens NX.",
        "Ran blade aerodynamic simulations in QBlade and StarCCM+ to optimise geometry for target power output.",
        "Developed a FLORIS-based wake and yaw optimiser to determine optimal turbine layout for utility-scale farm design.",
        "Initiated partnerships with 8+ energy companies; organised 5+ site tours and industry panels.",
        "Established the USC Chapter of AEE — drafted constitution, defined leadership structure, secured university recognition."
      ],
      result: [
        "Founded USC's first CWC team from nothing — recruited team, established structure, delivered competition entries.",
        "Built FLORIS-based wind farm layout optimiser; developed end-to-end utility-scale project development analysis.",
        "AEE chapter now operating with established industry partnerships and faculty engagement.",
        "Delivered a complete working turbine controls architecture built from first principles."
      ]
    }
  },
  {
    slug: "fsae",
    title: "FSAE Projects",
    zone: "hardware",
    thumb: "assets/projects/fsae/thumb.jpg",
    tags: ["Automotive", "CFD", "CNC", "ANSYS Fluent", "Composite Layup", "MATLAB"],
    gallery: [],
    star: {
      situation: "The team needed faster aerodynamic simulation iteration and tighter correlation between CFD predictions and physical test results.",
      task: "Improve aero development efficiency through simulation automation and build physical validation tools to close the simulation-to-hardware loop.",
      action: [
        "Automated aerodynamic mesh generation in ANSYS Fluent using a fault-tolerant mesh system and MATLAB scripting — cutting CFD setup time by approximately 60% and enabling rapid DOE iteration.",
        "Designed and analysed a tire cover in Siemens NX and ANSYS Fluent to minimise tire turbulence impact on drag.",
        "CNC-milled high-precision moulds and performed composite layup (resin infusion) to manufacture aerodynamic elements — including components twice the size yet 50% lighter using optimised fibre orientation.",
        "Developed setup and validation tools: toe alignment tool and yaw probe — used to correlate real-world aero measurements against simulation results."
      ],
      result: [
        "CFD setup time reduced by ~60% through MATLAB-driven mesh automation.",
        "Composite elements achieved target geometry accuracy for CFD correlation.",
        "Simulation-to-hardware validation loop closed through yaw probe and alignment tool data."
      ]
    }
  },
  {
    slug: "waterrocket",
    title: "Water Rocket Flight Optimisation",
    zone: "hardware",
    thumb: "assets/projects/waterrocket/thumb.JPG",
    tags: ["MATLAB", "Simulation", "Optimisation", "Flight Dynamics"],
    gallery: [],
    star: {
      situation: "Water rockets are typically tuned by trial and error; the relationship between air/water ratio, pressure, and parachute size is not intuitively optimised.",
      task: "Develop a MATLAB simulation to optimise air-to-water fill ratio, initial pressure, and parachute surface area for maximum altitude.",
      action: [
        "Developed a MATLAB simulation modelling the thrust phase (water expulsion), coast phase, and parachute descent.",
        "Swept air-to-water ratio, initial pressure, and parachute surface area as free parameters.",
        "Identified optimal configuration from simulation results."
      ],
      result: [
        "Identified optimal fill ratio, pressure, and parachute area for maximum altitude.",
        "Built practical expertise in MATLAB simulation and flight dynamics modelling."
      ]
    }
  },
  {
    slug: "drone",
    title: "Drone CAD & Structural Analysis",
    zone: "hardware",
    thumb: "assets/projects/drone/thumb.png",
    tags: ["CAD", "FEA", "Drones", "Siemens NX", "ANSYS"],
    gallery: [],
    star: {
      situation: "Drone structural design requires validation across multiple load cases before hardware commitment.",
      task: "Design a quadrotor drone frame in Siemens NX and conduct structural validation using FEA and multi-body dynamics (MBD) in ANSYS.",
      action: [
        "Designed a quadrotor drone frame using Siemens NX CAD.",
        "Conducted FEA analysis in ANSYS Mechanical for structural integrity under flight loads.",
        "Ran multi-body dynamics (MBD) analysis for dynamic loading scenarios."
      ],
      result: [
        "Validated structural integrity across multiple load cases.",
        "Demonstrated an integrated CAD + FEA + MBD workflow for drone structural design."
      ]
    }
  },
  {
    slug: "bridge",
    title: "Truss Bridge Optimisation",
    zone: "hardware",
    thumb: "assets/projects/bridge/thumb.png",
    tags: ["Structural", "MATLAB", "Optimisation"],
    gallery: [],
    star: {
      situation: "Truss bridge geometry significantly impacts load-to-weight efficiency, but manual analysis of many configurations is slow.",
      task: "Build a parametric MATLAB truss analysis sweeping geometry parameters to optimise for maximum load-to-weight ratio.",
      action: [
        "Modelled truss bridge forces using parametric MATLAB simulations.",
        "Swept geometric parameters to find the optimal configuration for structural efficiency.",
        "Validated simulation predictions with load cell testing."
      ],
      result: [
        "Identified optimal bridge geometry for load-to-weight efficiency.",
        "Validated simulation predictions against physical load cell testing."
      ]
    }
  },
  {
    slug: "monopoly",
    title: "Automated Monopoly Board",
    zone: "hardware",
    thumb: "assets/projects/monopoly/thumb.png",
    tags: ["Mechatronics", "Arduino", "Fabrication"],
    gallery: [],
    star: {
      situation: "A class project required designing an electromechanical system enabling human vs. bot gameplay on a physical Monopoly board.",
      task: "Lead the electro-mechanical design of a robotic Monopoly board game for a team of 6.",
      action: [
        "Led the electro-mechanical design of the robotic Monopoly board.",
        "Designed and built mechanisms for automated token movement and gameplay.",
        "Integrated Arduino-based control for bot decision-making and movement."
      ],
      result: [
        "Won 1st place in the class competition.",
        "Delivered a fully functional human vs. bot Monopoly system."
      ]
    }
  },
  {
    slug: "walkane",
    title: "Walkane — Walker-Cane Hybrid",
    zone: "hardware",
    thumb: "assets/projects/walkane/thumb.png",
    tags: ["Product Design", "Prototyping", "Medical Device", "Mechanism Design"],
    gallery: [],
    star: {
      situation: "Existing walkers and canes handle flat ground or stairs poorly — transitions between the two are unstable and risky for elderly users.",
      task: "Engineer a hybrid walker-cane with a collapsible design that improves stability during stair-to-flat-ground transitions.",
      action: [
        "Designed a collapsible mechanism to transition between walker and cane configurations.",
        "Prototyped and iterated on the mechanism for stability and ease of use."
      ],
      result: [
        "Won 2nd place at the ASBME Makeathon.",
        "Demonstrated a viable assistive device bridging walker and cane form factors."
      ]
    }
  },
  {
    slug: "alarm",
    title: "Smart Alarm Clock — REM Monitoring",
    zone: "hardware",
    thumb: "assets/projects/alarm/thumb.png",
    tags: ["Arduino", "Sensors", "Embedded Systems", "DAQ"],
    gallery: [],
    star: {
      situation: "Standard alarms wake users regardless of sleep stage, leading to grogginess and impaired alertness.",
      task: "Build a smart alarm clock that tracks BPM via pulse meter and Arduino DAQ, using sleep cycle data to wake the user during the optimal REM phase.",
      action: [
        "Integrated a pulse meter with an Arduino-based DAQ to continuously monitor BPM.",
        "Developed sleep cycle detection logic to identify the optimal wake window.",
        "Built the complete hardware and embedded system within a hackathon time constraint."
      ],
      result: [
        "Won 1st place at the IEEE Hack-IoT competition.",
        "Demonstrated a functional BPM-tracking sleep optimisation alarm."
      ]
    }
  },
  {
    slug: "kothcar",
    title: "2-DoF Bluetooth Car",
    zone: "robotics",
    thumb: "assets/projects/kothcar/thumb.jpg",
    tags: ["Arduino", "Fabrication", "Bluetooth", "Embedded Systems"],
    gallery: [],
    star: {
      situation: "A project required building a remote-controlled car from scratch with Bluetooth communication and two-axis steering.",
      task: "Design and build a two-degree-of-freedom remote-controlled car with Bluetooth communication.",
      action: [
        "Designed and built a 2-DoF RC car chassis with Arduino and motor drivers.",
        "Implemented Bluetooth communication for real-time remote navigation."
      ],
      result: [
        "Delivered a functional Bluetooth-controlled car with 2-axis steering.",
        "Demonstrated embedded systems and hardware fabrication skills."
      ]
    }
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
      "Built a multimodal DAQ pipeline and analytics for sanding characterisation, reducing industrial engineering time studies by ~40%."
    ],
    subprojects: [
      {
        title: "Production-Ready Universal Sanding Fixture",
        tools: ["SolidWorks", "MeshLab", "Point Cloud Processing", "Spring-Loaded Mechanisms", "Force Testing", "3D Printing", "ROS2"],
        gallery: [],
        star: {
          situation: "Initial fixture designs caused the robot to sand the fixture itself — vision segmentation could not distinguish fixture geometry from the workpiece. The product line had 14 SKUs ranging S to XL.",
          task: "Redesign the fixture from scratch to hold all 14 configurations reliably, eliminate vision misclassification, and meet customer requirements for operator comfort, throughput, and reliability.",
          action: [
            "Mapped all mechanical, vision, and software constraints across teams before touching a design.",
            "Developed SolidWorks concepts and analysed point clouds in MeshLab — tuned segmentation parameters iteratively with the vision team.",
            "Introduced compliant spring-loaded features to accommodate S–XL size variation without manual adjustment between variants.",
            "Incorporated displacement sensors to validate part seating before the sanding cycle begins.",
            "Performed force testing to identify failure modes and quantify performance improvements across design iterations.",
            "Executed rapid prototyping cycles using 3D printing and modular design for fast mechanical iteration."
          ],
          result: [
            "Universal fixture successfully accommodated all 14 SKUs (S through XL) in a single design.",
            "Eliminated vision misclassification — robot no longer sanded the fixture itself.",
            "Customer confirmed strong satisfaction with robustness and performance outcomes."
          ]
        }
      },
      {
        title: "Systems & Applications Engineering — Robotic Arm Process Development",
        tools: ["ROS2", "RVIZ", "MeshLab", "FANUC Arms", "Python", "YAML/JSON", "DOE", "GitHub"],
        gallery: [],
        star: {
          situation: "GrayMatter deploys robotic sanding arms on customer parts (helicopter blades, helmets, vehicle body panels) — each requiring custom segmentation, toolpath planning, and recipe validation before deployment.",
          task: "Lead system and applications engineering for customer parts: from 3D scan through segmentation, toolpath generation, FANUC robot programming, and process recipe development.",
          action: [
            "Conducted reachability studies from CAD models to identify surface coverage and blind spots before physical setup.",
            "Worked with multiple segmentation algorithms on point clouds (Euclidean clustering, curvature-based, projection segmentation, swept cylinder, surface normals) in MeshLab.",
            "Developed toolpaths by tuning CNT values, tool orientation, overlap percentage, and pass direction — balancing coverage, cycle time, and surface finish.",
            "Programmed FANUC robotic arms to execute validated toolpaths, handling coordinate frame setup and motion parameter tuning.",
            "Designed and executed DOE-driven sanding campaigns — sweeping force, tilt angle, and RPM — identifying parameters meeting surface roughness within ±10% spec.",
            "Managed project files with GitHub; used YAML/JSON for process parameter storage and ROS2 pipeline configuration."
          ],
          result: [
            "Developed end-to-end proficiency in robotic process engineering: raw point cloud to deployed, validated robot program.",
            "Built practical expertise in ROS2 + RVIZ, MeshLab automation, FANUC programming, and process-DOE methodology.",
            "Reduced manual effort in segmentation and toolpath setup through Python automation scripts."
          ]
        }
      },
      {
        title: "Multimodal Human Sanding Characterisation DAQ Pipeline",
        tools: ["Force Sensors", "IMUs", "OpenVR", "Thermal Sensors", "Python", "ROS2", "Rerun Visualisation"],
        gallery: [],
        star: {
          situation: "GrayMatter needed to understand expert human sanding behaviour at a physical parameter level — force profiles, motion patterns, thermal signatures — to automate industrial engineering time studies.",
          task: "Build a multimodal DAQ pipeline synchronising force, IMU, position (OpenVR), and thermal sensor streams at 100+ Hz with a full post-processing analytics layer.",
          action: [
            "Selected and integrated force sensors, IMUs, OpenVR position trackers, and thermal sensors into a time-synchronised ROS2 pipeline running at 100+ Hz.",
            "Integrated Rerun for real-time and post-hoc visualisation of 3D sanding paths with per-segment physical parameter graphing.",
            "Built a post-processing analytics pipeline: ESH savings calculator, data-driven task classification, robot feasibility recommendations, and consumables calculator.",
            "Designed the pipeline to feed GrayMatter's solutions-engineering agent core and model optimisation workflows.",
            "Validated pipeline data quality against known reference conditions and human benchmarks."
          ],
          result: [
            "Reduced industrial engineering time studies by approximately 40%.",
            "Analytics layer enables quantified dollar-value business cases for robot deployment (ESH savings tool).",
            "Task classification output gives engineering teams a data-backed map of what a robot can and cannot do for a given customer part.",
            "Produced a reusable, modular platform (DAQ + visualisation + analytics) feeding GrayMatter's process intelligence roadmap."
          ]
        }
      }
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
      "Designed and built a transient hot-wire thermal conductivity measurement system achieving <10% uncertainty for metal powder characterisation.",
      "Designed production-ready skid and modular fuel-cell frame hardware; performed ASME-based preliminary stress analysis."
    ],
    subprojects: [
      {
        title: "Transient Hot-Wire Thermal Conductivity Measurement System",
        tools: ["Transient Hot-Wire", "Platinum Wire (25μm)", "Signal Conditioning", "Raspberry Pi DAQ", "Python", "SolidWorks", "Uncertainty Analysis"],
        gallery: [],
        star: {
          situation: "Lumindt needed thermal conductivity data for metal powders being evaluated for thermal energy storage. No commercial instrument was suited to the specific material form factor.",
          task: "Design and build a complete thermal conductivity measurement system from scratch capable of repeatable, accurate characterisation of four metal powder samples.",
          action: [
            "Conducted a literature review and selected the transient hot-wire (THW) technique as optimal for loose powder characterisation.",
            "Designed and fabricated a custom test fixture in SolidWorks housing a 25-micron platinum wire sensor.",
            "Designed and built signal conditioning circuitry for the platinum wire's resistance-temperature response.",
            "Built a Raspberry Pi DAQ and wrote Python automation scripts for data capture, thermal cycling, and repeatability analysis.",
            "Conducted formal uncertainty analysis; investigated effects of porosity and contact resistance on measurement accuracy.",
            "Established documented, repeatable testing procedures across multiple temperature setpoints."
          ],
          result: [
            "Achieved repeatable thermal conductivity measurements with less than 10% uncertainty across four metal powder samples.",
            "Enabled material down-selection decisions for Lumindt's thermal energy storage development programme.",
            "Created a complete characterisation capability from zero — integrating heat transfer theory, precision instrumentation, electronics, and software."
          ]
        }
      },
      {
        title: "Structural Design — Electrolyser Skid & Fuel Cell Frame",
        tools: ["SolidWorks Weldments", "ASME Stress Analysis", "Manifold Design", "Steel Frame", "8020 Extrusions"],
        gallery: [],
        star: {
          situation: "Lumindt needed production-ready structural hardware: a skid for 24 electrolysers (300 kg each) and a modular frame for a 250 kW fuel cell system (200 kg capacity).",
          task: "Design both structures to meet load requirements, integrate fluid manifolds (hydrogen, coolant, water), minimise footprint, and ensure serviceability — validated against ASME standards.",
          action: [
            "Designed the 24-electrolyser skid in SolidWorks Weldments integrating optimised manifold routing for hydrogen, coolant, and water lines.",
            "Designed the 250 kW fuel cell frame using a welded steel base with carbon steel tubing and 8020 aluminium extrusions for modularity.",
            "Performed ASME-standard preliminary stress analyses to validate structural safety margins under operating loads.",
            "Selected balance-of-plant components (pumps, valves, adapters); fabricated custom adapters where off-the-shelf parts did not meet requirements.",
            "Built an Excel-based heat exchanger and coolant loop calculator to evaluate coolant composition effects on specific heat and efficiency."
          ],
          result: [
            "Delivered production-ready designs for both structures with validated structural safety margins.",
            "Manifold design met hydrogen, coolant, and water routing requirements within the constrained skid footprint.",
            "Demonstrated ability to work across mechanical design, structural analysis, fluid systems, and component selection in one workstream."
          ]
        }
      }
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
    ],
    star: {
      situation: "The Makerspace supports 80+ research labs and 12+ design teams at USC who need precision components fabricated beyond student skill level, and DFM guidance to make their designs manufacturable.",
      task: "Manufacture GD&T-critical components across a range of processes, support prototype development, and provide DFM guidance.",
      action: [
        "Programmed and operated Haas CNC Mill and Lathe, ProtoTRAK, Omax waterjet, and laser cutter to manufacture GD&T-critical components.",
        "Applied first-principles machining: selected cutting speeds, feeds, tool geometry, and fixturing strategy for each material using standard machining equations.",
        "Used dial indicators to verify dimensional accuracy and surface finish against GD&T callouts — qualifying parts before release.",
        "Fabricated 100+ 3D-printed prototypes across FDM (PLA), SLA (resin), and carbon fibre-reinforced FDM — including aerodynamic elements for the Formula SAE car.",
        "Provided DFM consultations: reviewed student designs for machinability and recommended design modifications to reduce iteration cycles."
      ],
      result: [
        "Machined GD&T-critical components to ±0.001 inch tolerances verified by dial indicator.",
        "Supported 80+ research labs and 12+ design teams.",
        "Fabricated 100+ prototypes across three 3D printing technologies.",
        "DFM guidance demonstrably reduced iteration cycles for multiple teams by catching manufacturability issues at the design stage."
      ]
    }
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
    ],
    star: {
      situation: "The lab is developing an 8-DOF robotic hand capable of catching and throwing a basketball at 20 N force — requiring compliant actuation for safe, controllable contact.",
      task: "Design and prototype the SEA module and rigid finger joints with parallel link mechanism, and validate force feedback fidelity through bench testing.",
      action: [
        "Designed 8-DOF finger joint assemblies with parallel link mechanisms in SolidWorks.",
        "Designed and rapid-prototyped an SEA test fixture for an N20 motor — spring selection, mounting, adhesive strategy, and locking mechanism.",
        "Performed torque calculations for N20 motor selection and validated output torque and compliance against design targets.",
        "Wrote C++ motor driver code for low-level motor control.",
        "Simulated hand kinematics and dynamics in MuJoCo to validate design decisions before hardware build."
      ],
      result: [
        "Produced a functional SEA prototype with validated force feedback fidelity benchmarked against design targets.",
        "Parallel-link finger joints designed and iterated in SolidWorks; prototypes fabricated and tested.",
        "Built practical expertise in compliant actuation design, motor sizing, C++ embedded control, and simulation-to-hardware workflows."
      ]
    }
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
    ],
    star: {
      situation: "TuTr's hyperloop pod chassis needed to be lighter without compromising structural integrity for high-speed travel loads.",
      task: "Analyse the existing chassis design and identify weight reduction opportunities while maintaining structural safety margins.",
      action: [
        "Conducted 1D and 3D structural analyses in ANSYS Mechanical and Siemens NX to identify over-designed sections.",
        "Proposed targeted material removal and geometry changes; validated each iteration against stress and deflection limits."
      ],
      result: [
        "Optimised chassis weight by 30% while maintaining full structural integrity under operating load cases."
      ]
    }
  },
  {
    slug: "niwe",
    company: "National Institute of Wind Energy (NIWE)",
    logo: "",
    role: "Wind Blade Intern",
    dates: "Jul 2023 – Aug 2023",
    location: "Chennai, India",
    zone: "cleantech",
    bullets: [
      "Designed a 5.7 m wind turbine blade geometry in SolidWorks and ran ANSYS Mechanical structural simulations across multiple load cases.",
      "Delivered a complete blade analysis report to the certification department."
    ],
    star: {
      situation: "NIWE's certification department needed a research-grade structural analysis of a 5.7 m wind turbine blade across multiple load cases to support their certification workflow.",
      task: "Design, analyse, and optimise the blade geometry in SolidWorks and ANSYS Mechanical, evaluating structural performance across defined load cases.",
      action: [
        "Designed a 5.7 m wind turbine blade geometry in SolidWorks.",
        "Ran ANSYS Mechanical structural simulations across multiple load cases (gravity, wind, fatigue representative cases).",
        "Optimised blade geometry based on simulation results to meet structural performance targets."
      ],
      result: [
        "Delivered a complete blade analysis report to the certification department.",
        "Gained practical exposure to industrial wind blade design standards and certification workflows."
      ]
    }
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

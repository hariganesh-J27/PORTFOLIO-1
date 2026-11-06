/**
 * Hari Ganesh J — Portfolio AI Chatbot Engine (chatbot.js)
 * Intelligent Client-Side AI Assistant matching Monochrome Portfolio Aesthetic
 */

(function () {
  'use strict';

  // =========================================================================
  // KNOWLEDGE BASE — COMPLETE HARI GANESH J PROFILE DATA
  // =========================================================================
  const HARI_KB = {
    profile: {
      name: "Hari Ganesh J",
      initials: "HG.J",
      role: "AI/ML Engineer & Dual-Degree CS Scholar",
      tagline: "Building intelligent systems between silicon and cloud — from ESP32 edge telemetry to PyTorch vision models and ROS2 autonomous agents.",
      email: "hariganesh.j2025@vitstudent.ac.in",
      location: "Chennai, Tamil Nadu, India",
      status: "Available for AI/ML Engineering Internships, Prototyping & Research",
      degreesCount: "02 Degrees in Parallel",
      projectsCount: "10+ AI Systems Engineered",
      certsCount: "04 Verified Certifications",
      avatar: "hari_avatar.png"
    },

    education: [
      {
        institution: "VIT Chennai (Vellore Institute of Technology)",
        degree: "B.Tech in Computer Science & Engineering (Core)",
        period: "2025 — 2029",
        location: "Chennai, Tamil Nadu",
        focus: "Operating Systems, Distributed Systems, Computer Architecture, Data Structures & Core Algorithms",
        type: "On-Campus Core Engineering"
      },
      {
        institution: "IIT Madras (Indian Institute of Technology Madras)",
        degree: "Bachelor of Science (BS) in Data Science & Applications",
        period: "2025 — 2029",
        location: "Chennai (Hybrid / Online)",
        focus: "Statistical Inference, Machine Learning Theory, Computational Linear Algebra, Deep Learning, Big Data Analytics",
        type: "Dual-Degree Parallel Academic Track"
      },
      {
        institution: "Sishya School, Hosur",
        degree: "Senior Secondary & Secondary Schooling",
        period: "Completed (2023 — 2025)",
        location: "Hosur, Tamil Nadu",
        focus: "Physics, Chemistry, Mathematics, Computer Science foundations",
        type: "Schooling"
      }
    ],

    projects: [
      {
        id: "scoliosis",
        title: "Wearable Scoliosis Detection System",
        category: "Wearable IoT & Neural Regression",
        date: "April 2024",
        badge: "★ Featured Hardware",
        hardware: "ESP32 MCU + ADXL345 3-Axis Accelerometer Arrays",
        ai: "PyTorch Neural Regression for Real-Time Cobb Angle Estimation",
        metrics: "🎯 94.2% Cobb Angle Accuracy • ⚡ < 15ms Latency over WebSockets",
        summary: "An IoT wearable posture monitoring belt streaming accelerometer vibration vectors to a neural regression model for non-invasive, continuous spinal curvature monitoring and clinical angle assessment.",
        tech: ["ESP32", "PyTorch", "ADXL345", "WebSockets", "C++", "Python"]
      },
      {
        id: "disease-prediction",
        title: "Disease Prediction Using Random Forest",
        category: "Clinical Diagnostic Machine Learning",
        date: "October 2024",
        badge: "ML Spotlight",
        ai: "Scikit-Learn Random Forest Classifier + Feature Importance Ranking",
        metrics: "🎯 94.8% Cross-Validation Accuracy • 🌲 Gini Importance Ranking",
        summary: "Predictive medical diagnostic pipeline analyzing complex clinical symptoms and vital indicators with k-fold cross validation and algorithmic symptom ranking to support primary triage decisions.",
        tech: ["Python", "Scikit-Learn", "Random Forest", "Pandas", "NumPy"]
      },
      {
        id: "drone",
        title: "ROS2 Autonomous Drone & Gazebo Simulation",
        category: "Robotics AI & Simulation Telemetry",
        date: "January 2025",
        badge: "Robotics AI",
        hardware: "PX4 / Gazebo 11 3D Simulation Environment",
        ai: "PyTorch LSTM for Spatial-Temporal Trajectory Forecasting",
        metrics: "🚁 ROS2 Humble Flight Nodes • 🧠 PyTorch LSTM Predictor",
        summary: "Autonomous quadrotor trajectory forecasting and obstacle avoidance pipeline utilizing ROS2 C++ publish-subscribe nodes connected to Gazebo physics simulations and PyTorch deep neural networks.",
        tech: ["ROS2 Humble", "Gazebo 11", "PyTorch", "C++", "Python"]
      },
      {
        id: "movie-booking",
        title: "Movie Ticket Booking System",
        category: "High-Concurrency Relational DBMS",
        date: "August 2024",
        badge: "DBMS & ACID",
        metrics: "🛡️ 0% Double Booking Guarantee • ⚡ < 20ms Query Lock Latency",
        summary: "Production relational database architecture managing multi-theatre seat reservations, stored procedure transaction locks, and ACID compliance under concurrent user load.",
        tech: ["PostgreSQL", "SQL", "Stored Procedures", "ACID Locks"]
      },
      {
        id: "hospital",
        title: "Hospital Management Architecture",
        category: "Enterprise Healthcare DBMS",
        date: "December 2024",
        badge: "SQL Architecture",
        metrics: "🔐 Role-Based Access Control (RBAC) • 🏥 Normalized ER Schema",
        summary: "Complete relational system for inpatient/outpatient management, diagnostic records, staff rotation scheduling, and automated insurance billing workflows.",
        tech: ["PostgreSQL", "Data Modeling", "Normalized SQL", "RBAC"]
      },
      {
        id: "finbert",
        title: "Financial Sentiment Telemetry Pipeline",
        category: "High-Throughput NLP",
        date: "2024",
        metrics: "📈 Real-Time Sentiment Scoring • ⚡ Sub-second Streaming",
        summary: "Streaming NLP pipeline reading financial market tickers and news headlines through fine-tuned FinBERT with Kafka event queues and FastAPI endpoints.",
        tech: ["FinBERT", "Hugging Face", "Kafka", "FastAPI", "Python"]
      }
    ],

    skills: {
      languages: ["Python", "C++", "SQL (PostgreSQL)", "JavaScript (ES6+)", "HTML5", "CSS3"],
      ai_ml: ["PyTorch", "Scikit-Learn", "CNN / ResNet", "PyTorch LSTM", "Random Forest", "Computer Vision", "NLP (FinBERT)", "Transfer Learning"],
      hardware_iot: ["ESP32", "ADXL345 Accelerometer", "Sensor Telemetry", "WebSockets", "Edge Computing", "Embedded C++", "Arduino"],
      robotics: ["ROS2 (Humble)", "Gazebo 11 Physics Simulator", "Trajectory Forecasting", "C++ Nodes", "Robotics Simulation"],
      cloud_devops: ["FastAPI", "Docker", "AWS (Bedrock, S3, EC2)", "Git / GitHub", "CI/CD Pipelines", "PostgreSQL"],
      visual_computing: ["WebGL", "GLSL Shaders", "HTML5 Canvas", "OGL", "3D Telemetry Dashboards"],
      radarMatrix: [
        { stage: "01", name: "Algorithms & Foundations", level: "98%", desc: "Data structures, algorithm design, asymptotic analysis, dynamic programming, discrete math." },
        { stage: "02", name: "Machine Learning & SQL DBMS", level: "95%", desc: "Supervised/unsupervised models, random forests, relational modeling, stored procedures, ACID transactions." },
        { stage: "03", name: "Hardware & IoT Sensor Telemetry", level: "92%", desc: "ESP32 firmware, ADXL345 accelerometer arrays, WebSocket streaming, low-latency edge computing." },
        { stage: "04", name: "Cloud AI Agents & Microservices", level: "90%", desc: "FastAPI async endpoints, Docker containerization, AWS Bedrock agents, microservice orchestration." },
        { stage: "05", name: "Live 3D Telemetry & Visual Computing", level: "94%", desc: "Real-time WebGL visualization, GLSL shader fields, simulation states, interactive canvas graphics." }
      ]
    },

    certifications: [
      {
        name: "Introduction to Modern AI",
        issuer: "Cisco Networking Academy",
        date: "18 June 2026",
        id: "4a064784-5312-49df-a58e-340aa9c45f1c",
        topics: "Intelligent agent architectures, modern neural networks, and AI decision systems engineered for production deployment."
      },
      {
        name: "Introduction to Data Science",
        issuer: "Cisco Networking Academy",
        date: "19 June 2026",
        id: "7b0c05ed-7d36-4ab9-97e0",
        topics: "Python analytics pipelines, statistical inferencing, computational data models, and exploratory pattern discovery."
      },
      {
        name: "Agentic AI on AWS",
        issuer: "AWS Training & Certification",
        date: "24 June 2026",
        id: "AWS Official Credential",
        topics: "Amazon Bedrock foundation models, autonomous tool calling, multi-agent frameworks, and cloud deployment pipelines."
      }
    ],

    services: [
      {
        title: "IoT Sensor Telemetry & Hardware Systems",
        summary: "ESP32 accelerometer arrays streaming real-time ADXL345 vibration/posture data over WebSockets from edge to cloud in milliseconds."
      },
      {
        title: "AI & ML Neural Architectures",
        summary: "PyTorch vision models (CNNs, ResNets), LSTM sequential forecasting, and Scikit-Learn ensembles for clinical diagnosis and predictive intelligence."
      },
      {
        title: "Autonomous Robotics Simulation",
        summary: "ROS2 Gazebo 3D simulation environments with spatial-temporal trajectory forecasting for UAV flight and autonomous agents."
      },
      {
        title: "Cloud AI & MLOps Infrastructure",
        summary: "Dockerized FastAPI microservices, asynchronous inference endpoints, and automated cloud pipelines on AWS."
      }
    ]
  };

  // =========================================================================
  // NATURAL LANGUAGE QUERY MATCHER & REASONING ENGINE
  // =========================================================================

  function generateAIResponse(rawQuery) {
    const q = rawQuery.toLowerCase().trim();

    // 1. GREETINGS & CASUAL
    if (/^(hi|hello|hey|greetings|hola|good\s*(morning|afternoon|evening)|yo\b|sup\b)/i.test(q)) {
      return {
        text: `Hello! 👋 I'm **Hari Ganesh J's AI Assistant**.<br><br>I can answer any question about Hari's dual-degree education (**VIT Chennai & IIT Madras**), engineering projects (like the **Scoliosis Wearable** & **ROS2 Drone**), skills in **PyTorch & IoT**, or verified certifications.<br><br>What would you like to explore?`,
        chips: ["🎓 Dual Degree Details", "⚡ Scoliosis Wearable", "🛠️ Technical Skills", "📬 Contact Info"]
      };
    }

    // 2. WHO IS HARI / BIO / OVERVIEW
    if (/who (are you|is hari|is he)|about hari|tell me about (hari|yourself|him)|bio|overview|introduce/i.test(q)) {
      return {
        text: `**Hari Ganesh J** is an AI/ML Engineer and Dual-Degree Computer Science scholar based in Chennai, India.<br><br>` +
              `• **Academics**: Pursuing **B.Tech CSE at VIT Chennai** alongside a **BS in Data Science at IIT Madras**.<br>` +
              `• **Engineering Focus**: Bridges embedded edge computing and cloud AI — specializing in **ESP32 IoT sensor telemetry**, **PyTorch deep learning**, and **ROS2 autonomous robotics**.<br>` +
              `• **Track Record**: Engineered 10+ AI/IoT systems, solved 300+ DSA problems, and holds verified Cisco & AWS AI credentials.<br><br>` +
              `*"I build intelligent systems that live between silicon and cloud."*`,
        chips: ["🎓 Academic Matrix", "🚀 Top Projects", "📜 Certifications", "📬 Contact Hari"]
      };
    }

    // 3. WHY DUAL DEGREE?
    if (/why\s+.*(dual|two\s+degree|both\s+degree)|both\s+degrees|parallel\s+degrees|why\s+study\s+both/i.test(q)) {
      return {
        text: `**Why pursue both VIT Chennai & IIT Madras?**<br><br>` +
              `Hari chose this dual-degree path to master both sides of modern computing:<br>` +
              `• **VIT Chennai (B.Tech CSE)** provides the hardware-software boundary: systems architecture, OS, networks, C++ execution speed, and embedded computing.<br>` +
              `• **IIT Madras (BS Data Science)** provides deep theoretical rigour: stochastic mathematics, linear algebra, statistical learning theory, and machine learning research.<br><br>` +
              `Together, they allow Hari to build AI that is both mathematically sound and hardware-optimized.`,
        chips: ["Top Projects", "Certifications", "Contact Hari"]
      };
    }

    // 3b. EDUCATION / DUAL DEGREE / VIT / IIT MADRAS / SCHOOL
    if (/education|degree|dual degree|college|university|vit|iit|madras|chennai|school|sishya|hosur|study|studies|b\.?tech|b\.?s\b|academics|cgpa/i.test(q)) {
      if (/vit\b|vellore/i.test(q)) {
        return {
          text: `**VIT Chennai — B.Tech Computer Science & Engineering (Core)** (2025 — 2029)<br><br>` +
                `• **Focus**: Core computer systems, operating systems, computer architecture, distributed systems, and algorithmic analysis.<br>` +
                `• **Status**: Active full-time core engineering degree.<br>` +
                `• **Location**: Chennai, Tamil Nadu.`,
          chips: ["IIT Madras Track", "Scoliosis Project", "Full Academic Matrix"]
        };
      }
      if (/iit\b|madras/i.test(q)) {
        return {
          text: `**IIT Madras — Bachelor of Science (BS) in Data Science & Applications** (2025 — 2029)<br><br>` +
                `• **Focus**: Mathematical statistics, linear algebra, machine learning theory, predictive modeling, computational data algorithms, and big data architecture.<br>` +
                `• **Format**: World-class hybrid/online degree pursued in parallel with B.Tech CSE at VIT.`,
          chips: ["VIT Chennai Track", "AI/ML Projects", "Full Academic Matrix"]
        };
      }
      if (/school|sishya|hosur|secondary/i.test(q)) {
        return {
          text: `**Sishya School, Hosur** (Completed 2023 — 2025)<br><br>` +
                `• Completed Senior Secondary and Secondary schooling with strong focus on Physics, Chemistry, Mathematics, and Computer Science foundations in Hosur, Tamil Nadu.`,
          chips: ["Dual Degree Details", "Top Projects"]
        };
      }
      // General education response:
      return {
        text: `Hari is pursuing a rigorous **Dual-Degree Academic Matrix**:<br><br>` +
              `1. **VIT Chennai** (2025 — 2029):<br>` +
              `   • *B.Tech in Computer Science & Engineering (Core)*<br>` +
              `   • Focus on low-level systems, architecture, and core algorithms.<br><br>` +
              `2. **IIT Madras** (2025 — 2029):<br>` +
              `   • *BS in Data Science & Applications*<br>` +
              `   • Focus on statistical inferencing, machine learning mathematics, and big data.<br><br>` +
              `3. **Sishya School, Hosur**:<br>` +
              `   • Secondary & Senior Secondary education completed.<br><br>` +
              `This dual-degree synergy gives Hari both deep systems engineering fundamentals and advanced mathematical data science proficiency.`,
        chips: ["Why Dual Degree?", "🚀 Top Projects", "🛠️ Tech Stack"]
      };
    }

    // 4. SCOLIOSIS / WEARABLE / HARDWARE PROJECT
    if (/scoliosis|posture|adxl345|cobb|wearable|spine|spinal/i.test(q)) {
      return {
        text: `**Wearable Scoliosis Detection System** *(Featured Hardware Project — April 2024)*:<br><br>` +
              `• **The Problem**: Traditional scoliosis monitoring requires frequent radiographic X-rays, exposing patients to ionizing radiation.<br>` +
              `• **The Solution**: An intelligent non-invasive wearable belt equipped with **ESP32** and **ADXL345 accelerometer arrays**.<br>` +
              `• **Neural Model**: A custom **PyTorch neural regression network** converts multi-axis vibrational and tilt telemetry into continuous **Cobb angle estimations**.<br>` +
              `• **Key Metrics**:<br>` +
              `  - 🎯 **94.2% Cobb Angle Accuracy**<br>` +
              `  - ⚡ **< 15ms Telemetry Latency** over WebSockets<br>` +
              `• **Stack**: ESP32, PyTorch, ADXL345, WebSockets, Embedded C++, Python.`,
        chips: ["ML Disease Model", "ROS2 Drone", "Other Hardware Skills"]
      };
    }

    // 5. DISEASE PREDICTION / RANDOM FOREST
    if (/disease|random forest|gini|diagnostic|medical|patient|health/i.test(q)) {
      return {
        text: `**Disease Prediction Using Random Forest** *(October 2024)*:<br><br>` +
              `• **Objective**: High-reliability clinical diagnostic decision support pipeline evaluating patient health parameters and diagnostic markers.<br>` +
              `• **Model**: Engineered using **Scikit-Learn's Random Forest Classifier** with extensive hyperparameter tuning.<br>` +
              `• **Key Highlights**:<br>` +
              `  - 🎯 **94.8% Cross-Validation Accuracy**<br>` +
              `  - 🌲 **Gini Importance Metric** for ranking symptom severity and identifying critical biomarkers.<br>` +
              `  - Robust against overfitting with ensemble bagging.<br>` +
              `• **Stack**: Python, Scikit-Learn, Pandas, NumPy.`,
        chips: ["Scoliosis Wearable", "ROS2 Drone", "All Projects"]
      };
    }

    // 5b. SPECIFIC TECH INQUIRIES & SKILL CHECKS
    if (/(does\s+(he|hari)\s+know|do\s+you\s+know|experience\s+with|proficient\s+in|knowledge\s+of|skills?\s+in|familiar\s+with|use\b|work\s+with)\b/i.test(q) &&
        /\b(python|c\+\+|pytorch|ros2|docker|aws|sql|javascript|webgl|esp32|adxl345|gazebo|scikit|pandas|numpy|linux|git)\b/i.test(q)) {
      const matched = q.match(/\b(python|c\+\+|pytorch|ros2|docker|aws|sql|javascript|webgl|esp32|adxl345|gazebo|scikit|pandas|numpy|linux|git)\b/ig);
      const unique = [...new Set(matched.map(m => m.toUpperCase()))];
      return {
        text: `**Yes, absolutely!** Hari has direct, hands-on production and project experience with **${unique.join(', ')}**:<br><br>` +
              (unique.includes('PYTORCH') ? `• **PyTorch**: Used for neural regression in the Scoliosis Wearable and LSTM trajectory forecasting in ROS2 drones.<br>` : '') +
              (unique.includes('PYTHON') ? `• **Python**: Primary language for AI/ML modeling, Scikit-Learn, FinBERT NLP, and FastAPI backend microservices.<br>` : '') +
              (unique.includes('C++') ? `• **C++**: Used for low-latency ROS2 Humble flight nodes, Gazebo integration, and embedded ESP32 firmware.<br>` : '') +
              (unique.includes('ROS2') ? `• **ROS2**: Built autonomous quadrotor flight telemetry with Gazebo 3D physics.<br>` : '') +
              (unique.includes('ESP32') ? `• **ESP32**: Engineered the hardware wearable with ADXL345 accelerometer arrays over WebSockets.<br>` : '') +
              (unique.includes('ADXL345') ? `• **ADXL345**: High-resolution 3-axis accelerometer arrays for posture and vibration telemetry.<br>` : '') +
              (unique.includes('GAZEBO') ? `• **Gazebo**: 3D physics environment for simulating autonomous drone spatial dynamics.<br>` : '') +
              (unique.includes('SQL') ? `• **SQL**: Architected high-concurrency systems with 0% double-booking ACID transaction locks.<br>` : '') +
              (unique.includes('DOCKER') ? `• **Docker**: Containerized microservices and reproducible deployment environments.<br>` : '') +
              (unique.includes('AWS') ? `• **AWS**: Certified in Agentic AI on AWS (Amazon Bedrock, multi-agent frameworks, cloud deployment).<br>` : '') +
              (unique.includes('WEBGL') ? `• **WebGL**: Visual computing, GLSL shaders, and 3D telemetry graphics rendering.<br>` : '') +
              `Feel free to ask for project architecture details or inspection code!`,
        chips: ["Top Projects", "Radar Matrix", "Contact Hari"]
      };
    }

    // 6. ROS2 / DRONE / ROBOTICS / GAZEBO
    if (/drone|uav|quadrotor|flight/i.test(q) || (/ros2|gazebo|robotics|trajectory/i.test(q) && !/skills?|radar/i.test(q))) {
      return {
        text: `**ROS2 Autonomous Drone & Gazebo Simulation** *(January 2025)*:<br><br>` +
              `• **Objective**: Spatial-temporal trajectory forecasting and autonomous obstacle avoidance for unmanned aerial vehicles (UAVs).<br>` +
              `• **Simulation**: Built on **ROS2 Humble** communicating with high-fidelity **Gazebo 11 3D physics** environments.<br>` +
              `• **AI Core**: PyTorch **LSTM (Long Short-Term Memory)** network forecasting drone position vectors across time horizons.<br>` +
              `• **Architecture**: Asynchronous C++ ROS2 publisher/subscriber nodes for low-latency state estimation.<br>` +
              `• **Stack**: ROS2 Humble, Gazebo 11, PyTorch LSTM, C++, Python.`,
        chips: ["Scoliosis Project", "Cloud AI & MLOps", "All Projects"]
      };
    }

    // 7. DATABASE / DBMS / SQL / MOVIE / HOSPITAL
    if (/movie|ticket|booking|hospital|dbms|sql|database|acid|postgres|rbac/i.test(q)) {
      return {
        text: `Hari has engineered two major high-concurrency database systems:<br><br>` +
              `1. **Movie Ticket Booking System** (Aug 2024):<br>` +
              `   • Multi-theatre seat reservation engine with stored procedures.<br>` +
              `   • **0% Double-Booking Guarantee** with strict ACID transaction locking.<br>` +
              `   • **< 20ms Query Lock Latency** under stress testing.<br><br>` +
              `2. **Hospital Management Architecture** (Dec 2024):<br>` +
              `   • Enterprise relational DBMS with fully normalized 3NF schema.<br>` +
              `   • Role-Based Access Control (**RBAC**) for doctors, nurses, billing, and patients.<br>` +
              `   • Inpatient bed tracking, automated billing, and EHR integrity.`,
        chips: ["Wearable Scoliosis", "AI/ML Projects", "Technical Skills"]
      };
    }

    // 7b. DSA / PROBLEM SOLVING
    if (/dsa\b|leetcode|competitive|problem solving|data structures/i.test(q)) {
      return {
        text: `**Algorithms & Problem Solving Track Record**:<br><br>` +
              `• Solved **300+ Data Structures & Algorithms problems** with emphasis on dynamic programming, graph traversal, trees, arrays, and greedy optimizations.<br>` +
              `• Scored **98% in Stage 01 (Algorithms & Foundations)** on the portfolio Radar Matrix.<br>` +
              `• Core languages for DSA: **C++** (speed/pointers) and **Python** (rapid prototyping).`,
        chips: ["Radar Matrix", "Dual Degree", "Top Projects"]
      };
    }

    // 7c. MODEL ACCURACY & PERFORMANCE METRICS
    if (/\b(accuracy|accuracies|metrics?|precision|cobb angle|benchmark)\b/i.test(q)) {
      return {
        text: `**Key AI Model & Engineering Metrics**:<br><br>` +
              `• 🎯 **94.2% Cobb Angle Accuracy**: Wearable Scoliosis Detection System (ESP32 + PyTorch neural regression with <15ms latency).<br>` +
              `• 🎯 **94.8% Cross-Validation Accuracy**: Clinical Disease Prediction pipeline using Scikit-Learn Random Forest and Gini importance ranking.<br>` +
              `• ⚡ **< 20ms Query Lock Latency**: High-concurrency Movie Ticket Booking DBMS with 0% double-booking ACID guarantee.<br>` +
              `• 🚁 **Real-Time UAV Path Prediction**: PyTorch LSTM trajectory forecasting inside Gazebo 11 3D simulation.`,
        chips: ["Scoliosis Details", "Random Forest Details", "Tech Stack"]
      };
    }

    // 7d. FINBERT & NLP
    if (/finbert|financial|sentiment|stock|market|kafka/i.test(q)) {
      return {
        text: `**High-Throughput Financial Sentiment Pipeline**:<br><br>` +
              `• **Architecture**: Real-time financial news stream ingested through Apache Kafka and processed via fine-tuned **FinBERT**.<br>` +
              `• **Inference**: High-throughput FastAPI asynchronous inference service generating real-time market sentiment signals.<br>` +
              `• **Stack**: FinBERT, Hugging Face, Apache Kafka, FastAPI, Python.`,
        chips: ["All Projects", "Cloud AI & MLOps", "Tech Stack"]
      };
    }

    // 8. ALL PROJECTS / PORTFOLIO LIST
    if (/project|projects|portfolio|what (did he build|has he made|systems)|work\b/i.test(q)) {
      return {
        text: `Here are Hari's standout engineering projects:<br><br>` +
              `1. ⚡ **Wearable Scoliosis Detection System**: ESP32 + ADXL345 wearable with PyTorch neural regression for Cobb angle estimation (94.2% accuracy, <15ms latency).<br>` +
              `2. 🌲 **Disease Prediction Pipeline**: Scikit-Learn Random Forest diagnostic model with 94.8% cross-validation accuracy and Gini importance.<br>` +
              `3. 🚁 **ROS2 Autonomous Drone**: UAV spatial-temporal trajectory forecasting with PyTorch LSTM & Gazebo 11 3D simulation.<br>` +
              `4. 🎟️ **Movie Ticket Booking Engine**: High-concurrency SQL DBMS with 0% double-booking ACID transaction locks.<br>` +
              `5. 🏥 **Hospital Management DBMS**: PostgreSQL healthcare architecture with RBAC and normalized clinical records.<br>` +
              `6. 📈 **Financial Sentiment Pipeline**: FinBERT streaming news NLP with Kafka & FastAPI.`,
        chips: ["Tell me about Scoliosis", "Tell me about ROS2 Drone", "Certifications"]
      };
    }

    // 9. SKILLS / TECH STACK / LANGUAGES / RADAR MATRIX
    if (/skills?|tech stack|technologies|stack|languages?|what does he know|tools?|radar|matrix|proficien/i.test(q)) {
      if (/radar|matrix|stage|scores?/i.test(q)) {
        return {
          text: `**Chapter 06: Interactive Radar Matrix Proficiencies**:<br><br>` +
                `• **Stage 01: Algorithms & Foundations — 98%** (Data structures, algorithms, asymptotic analysis)<br>` +
                `• **Stage 02: Machine Learning & SQL DBMS — 95%** (PyTorch, Scikit-Learn, ACID transactions)<br>` +
                `• **Stage 03: Hardware & IoT Sensor Telemetry — 92%** (ESP32, ADXL345, WebSockets, edge compute)<br>` +
                `• **Stage 04: Cloud AI Agents & Microservices — 90%** (FastAPI, Docker, AWS Bedrock)<br>` +
                `• **Stage 05: Live 3D Telemetry & Visual Computing — 94%** (WebGL, GLSL, Canvas, ROS2 Viz)`,
          chips: ["Programming Languages", "AI/ML Skills", "Certifications"]
        };
      }
      return {
        text: `**Hari's Technical Stack & Tooling**:<br><br>` +
              `• **Languages**: Python, C++, SQL (PostgreSQL), JavaScript (ES6+), HTML5/CSS3.<br>` +
              `• **AI & ML**: PyTorch, Scikit-Learn, CNNs, ResNets, LSTMs, FinBERT, Random Forest, Grad-CAM, Computer Vision, NLP.<br>` +
              `• **Hardware & IoT**: ESP32, ADXL345 Accelerometers, WebSocket Telemetry, Sensor Arrays, Embedded C++.<br>` +
              `• **Robotics**: ROS2 (Humble), Gazebo 11 3D Simulator, Trajectory Predictors, C++ Flight Nodes.<br>` +
              `• **Cloud & DevOps**: FastAPI, Docker, AWS (Bedrock, S3, EC2), PostgreSQL, CI/CD, Git.<br>` +
              `• **Visual Computing**: WebGL, GLSL Shaders, HTML5 Canvas, OGL.`,
        chips: ["Radar Matrix Scores", "Top Projects", "Verified Certifications"]
      };
    }

    // 10. SPECIFIC TECH CHECKS (e.g. "Does Hari know Python/C++/PyTorch?")
    if (/\b(python|c\+\+|pytorch|ros2|docker|aws|sql|javascript|webgl|esp32)\b/i.test(q)) {
      const matched = q.match(/\b(python|c\+\+|pytorch|ros2|docker|aws|sql|javascript|webgl|esp32)\b/ig);
      const unique = [...new Set(matched.map(m => m.toUpperCase()))];
      return {
        text: `**Yes, absolutely!** Hari has direct, hands-on production and project experience with **${unique.join(', ')}**:<br><br>` +
              (unique.includes('PYTORCH') ? `• **PyTorch**: Used for neural regression in the Scoliosis Wearable and LSTM trajectory forecasting in ROS2 drones.<br>` : '') +
              (unique.includes('PYTHON') ? `• **Python**: Primary language for AI/ML modeling, Scikit-Learn, FinBERT NLP, and FastAPI backend microservices.<br>` : '') +
              (unique.includes('C++') ? `• **C++**: Used for low-latency ROS2 Humble nodes, Gazebo integration, and embedded ESP32 firmware.<br>` : '') +
              (unique.includes('ROS2') ? `• **ROS2**: Built autonomous quadrotor flight telemetry with Gazebo 3D physics.<br>` : '') +
              (unique.includes('ESP32') ? `• **ESP32**: Engineered the hardware wearable with ADXL345 accelerometer arrays over WebSockets.<br>` : '') +
              (unique.includes('SQL') ? `• **SQL**: Architected high-concurrency systems with 0% double-booking ACID transaction locks.<br>` : '') +
              (unique.includes('AWS') ? `• **AWS**: Certified in Agentic AI on AWS (Amazon Bedrock, multi-agent frameworks, cloud deployment).<br>` : '') +
              `Feel free to ask for project architecture details or inspection code!`,
        chips: ["Top Projects", "Radar Matrix", "Contact Hari"]
      };
    }

    // 11. CERTIFICATIONS & CREDENTIALS
    if (/certificat|credential|cisco|aws cert|license|badge|modern ai|data science cert/i.test(q)) {
      return {
        text: `**Hari's Verified Industry Credentials**:<br><br>` +
              `1. 📜 **Introduction to Modern AI — Cisco Networking Academy**<br>` +
              `   • *Cert ID*: \`4a064784-5312-49df-a58e-340aa9c45f1c\` (Issued: 18 JUN 2026)<br>` +
              `   • Agentic architectures, neural networks, and decision models.<br><br>` +
              `2. 📜 **Introduction to Data Science — Cisco Networking Academy**<br>` +
              `   • *Cert ID*: \`7b0c05ed-7d36-4ab9-97e0\` (Issued: 19 JUN 2026)<br>` +
              `   • Python analytics pipelines, statistical inference, and data discovery.<br><br>` +
              `3. 📜 **Agentic AI on AWS — AWS Training & Certification**<br>` +
              `   • *Verification*: AWS Official Credential (Issued: 24 JUN 2026)<br>` +
              `   • Amazon Bedrock foundation models, autonomous tool calling, multi-agent pipelines.`,
        chips: ["Academic Matrix", "Top Projects", "Contact Hari"]
      };
    }

    // 12. SERVICES & WHAT HARI OFFERS
    if (/service|services|hire|freelance|consult|what can (you|he) do|offer|collaborat/i.test(q)) {
      return {
        text: `**Services & Engineering Specializations Offered by Hari**:<br><br>` +
              `• **1. IoT Sensor Telemetry & Hardware Systems**: Custom ESP32 accelerometer/sensor arrays with low-latency WebSocket streaming.<br>` +
              `• **2. AI & ML Neural Architectures**: PyTorch vision pipelines (CNN, ResNet), LSTM sequence models, and clinical diagnostic ensembles.<br>` +
              `• **3. Autonomous Robotics Simulation**: ROS2 Humble Gazebo 3D environments and path trajectory predictors.<br>` +
              `• **4. Cloud AI & MLOps Infrastructure**: Dockerized FastAPI inference endpoints, AWS Bedrock agents, and CI/CD pipelines.<br><br>` +
              `Hari is actively open for **internships, research roles, and collaborative projects**.`,
        chips: ["📬 Contact Channels", "🎓 Education", "🚀 Projects"]
      };
    }

    // 13. CONTACT / EMAIL / LOCATION / SOCIALS
    if (/contact|email|reach|message|touch|linkedin|github|phone|where\s+does\s+(he|hari)\s+live|where\s+is\s+(he|hari)|location|located|where\s+based|based\s+in|address|hire\s+(him|hari)/i.test(q)) {
      return {
        text: `**Get in Touch with Hari Ganesh J**:<br><br>` +
              `• 📧 **Email**: <a href="mailto:hariganesh.j2025@vitstudent.ac.in">hariganesh.j2025@vitstudent.ac.in</a><br>` +
              `• 📍 **Location**: Chennai, Tamil Nadu, India<br>` +
              `• 💼 **Status**: Available for AI/ML Engineering Internships & Prototyping<br>` +
              `• 🔗 **Profiles**: Connected via LinkedIn and GitHub in the portfolio dock.<br><br>` +
              `You can send an email directly or use the contact form at the bottom of the page!`,
        chips: ["🎓 Academic Matrix", "🚀 Top Projects", "Resume Details"]
      };
    }

    // 14. RESUME / CV
    if (/resume|cv|curriculum vitae|download resume/i.test(q)) {
      return {
        text: `**Hari Ganesh J — Resume Summary**:<br><br>` +
              `• **Education**: Dual-Degree CS & Data Science (VIT Chennai + IIT Madras)<br>` +
              `• **Core Competencies**: AI/ML (PyTorch), IoT Hardware (ESP32/ADXL345), Autonomous Robotics (ROS2/Gazebo), High-Concurrency SQL.<br>` +
              `• **Certifications**: Cisco Modern AI, Cisco Data Science, AWS Agentic AI.<br>` +
              `• **Projects**: Wearable Scoliosis Detection, Disease Prediction Random Forest, ROS2 Drone Simulation.<br><br>` +
              `To view the full interactive credential directory, check the **Certificates** section or click below:`,
        chips: ["View Certificates", "Contact Hari", "Top Projects"]
      };
    }

    // 15. COMPLIMENTS / THANKS
    if (/thank|thanks|awesome|great|cool|good job|nice|appreciate/i.test(q)) {
      return {
        text: `You're very welcome! 😊 Glad I could help.<br><br>Let me know if you want to know more about Hari's projects, dual-degree curriculum, or how to get in touch with him!`,
        chips: ["🎓 Dual Degree", "🚀 Scoliosis Project", "📬 Contact Hari"]
      };
    }

    // 16. INTELLIGENT FALLBACK WITH TARGETED TOPICS
    return {
      text: `I'd love to help answer that! While I am specialized in **Hari Ganesh J's portfolio and background**, here are popular topics I can tell you all about:<br><br>` +
            `• **🎓 Education**: Dual-degree at VIT Chennai (B.Tech CSE) & IIT Madras (BS Data Science)<br>` +
            `• **⚡ Featured Project**: Wearable Scoliosis Detection System (ESP32 + PyTorch regression)<br>` +
            `• **🚁 Robotics AI**: ROS2 Humble drone simulation with PyTorch LSTM<br>` +
            `• **🛠️ Technical Stack**: PyTorch, Scikit-Learn, C++, SQL, ESP32, Docker, AWS<br>` +
            `• **📜 Credentials**: Cisco Modern AI, Cisco Data Science, AWS Agentic AI<br>` +
            `• **📬 Contact**: Reach Hari directly for engineering opportunities`,
      chips: ["Tell me about Hari", "🎓 Dual Degree", "⚡ Scoliosis Project", "📬 Contact"]
    };
  }

  // =========================================================================
  // DOM BUILDER & INTERACTION CONTROLLER
  // =========================================================================

  class HariChatbot {
    constructor() {
      this.isOpen = false;
      this.messages = [];
      this.isTyping = false;
      this.init();
    }

    init() {
      // Avoid duplicate initialization
      if (document.getElementById('hari-chatbot-widget')) return;

      this.injectMarkup();
      this.cacheElements();
      this.bindEvents();
      this.loadWelcomeMessage();
    }

    injectMarkup() {
      const widget = document.createElement('div');
      widget.id = 'hari-chatbot-widget';
      widget.innerHTML = `
        <!-- Teaser Speech Bubble -->
        <div class="hari-chat-teaser" id="hari-chat-teaser">
          <span>💬 Ask me anything about Hari!</span>
          <button class="hari-chat-teaser-close" id="hari-chat-teaser-close" aria-label="Dismiss">&times;</button>
        </div>

        <!-- Floating Launcher Button -->
        <button class="hari-chat-launcher" id="hari-chat-launcher" aria-label="Open Hari's AI Assistant" title="Ask Hari's AI Assistant">
          <div class="hari-chat-launcher-icon hari-chat-icon-chat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
              <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
              <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
            </svg>
          </div>
          <div class="hari-chat-launcher-icon hari-chat-icon-close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <span class="hari-chat-online-badge" title="AI Agent Online"></span>
        </button>

        <!-- Chat Window Modal -->
        <div class="hari-chat-window" id="hari-chat-window" role="dialog" aria-modal="true" aria-label="Hari Ganesh AI Assistant">
          
          <!-- Header -->
          <div class="hari-chat-header">
            <div class="hari-chat-header-info">
              <div class="hari-chat-avatar">
                <img src="${HARI_KB.profile.avatar}" alt="Hari Ganesh J" onerror="this.parentElement.innerHTML='HG';" />
              </div>
              <div class="hari-chat-header-titles">
                <span class="hari-chat-header-title">
                  Hari's AI Assistant
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FDFFF5" stroke-width="2.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </span>
                <span class="hari-chat-header-status">
                  <span class="hari-chat-header-status-dot"></span>
                  Online • Portfolio Knowledge Base
                </span>
              </div>
            </div>

            <div class="hari-chat-header-actions">
              <!-- Reset Chat Button -->
              <button class="hari-chat-action-btn" id="hari-chat-reset-btn" aria-label="Reset Conversation" title="Reset Chat">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                </svg>
              </button>

              <!-- Close Button -->
              <button class="hari-chat-action-btn" id="hari-chat-close-btn" aria-label="Close Chat" title="Close">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- Quick Suggestions Carousel Ribbon -->
          <div class="hari-chat-suggestions" id="hari-chat-suggestions">
            <button class="hari-chat-chip" data-query="Tell me about Hari's background">👤 About Hari</button>
            <button class="hari-chat-chip" data-query="Explain the dual degree at VIT and IIT Madras">🎓 Dual Degree</button>
            <button class="hari-chat-chip" data-query="Tell me about the Wearable Scoliosis Detection project">⚡ Scoliosis Project</button>
            <button class="hari-chat-chip" data-query="What is Hari's technical stack and skills?">🛠️ Tech Stack</button>
            <button class="hari-chat-chip" data-query="Tell me about the ROS2 autonomous drone project">🚁 ROS2 Drone</button>
            <button class="hari-chat-chip" data-query="What verified certifications does Hari hold?">📜 Certifications</button>
            <button class="hari-chat-chip" data-query="How can I contact Hari?">📬 Contact Info</button>
          </div>

          <!-- Messages Stream -->
          <div class="hari-chat-messages" id="hari-chat-messages">
            <!-- Messages populated dynamically -->
          </div>

          <!-- Input Bar -->
          <div class="hari-chat-input-bar">
            <form class="hari-chat-input-form" id="hari-chat-form">
              <input 
                type="text" 
                class="hari-chat-input" 
                id="hari-chat-input" 
                placeholder="Ask anything about Hari's projects, degrees, skills..." 
                autocomplete="off" 
                maxlength="250"
              />
              <button type="submit" class="hari-chat-send-btn" id="hari-chat-send-btn" aria-label="Send Question" title="Send">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
            <div class="hari-chat-footer-tag">
              HARI GANESH J • PORTFOLIO AI AGENT
            </div>
          </div>

        </div>
      `;

      document.body.appendChild(widget);
    }

    cacheElements() {
      this.launcher = document.getElementById('hari-chat-launcher');
      this.window = document.getElementById('hari-chat-window');
      this.teaser = document.getElementById('hari-chat-teaser');
      this.teaserClose = document.getElementById('hari-chat-teaser-close');
      this.closeBtn = document.getElementById('hari-chat-close-btn');
      this.resetBtn = document.getElementById('hari-chat-reset-btn');
      this.messagesContainer = document.getElementById('hari-chat-messages');
      this.suggestionsContainer = document.getElementById('hari-chat-suggestions');
      this.form = document.getElementById('hari-chat-form');
      this.input = document.getElementById('hari-chat-input');
      this.sendBtn = document.getElementById('hari-chat-send-btn');
    }

    bindEvents() {
      // Launcher Toggle
      this.launcher.addEventListener('click', () => this.toggleChat());

      // Teaser Click & Close
      if (this.teaser) {
        this.teaser.addEventListener('click', (e) => {
          if (e.target !== this.teaserClose) {
            this.openChat();
          }
        });
      }
      if (this.teaserClose) {
        this.teaserClose.addEventListener('click', (e) => {
          e.stopPropagation();
          this.dismissTeaser();
        });
      }

      // Close Button
      this.closeBtn.addEventListener('click', () => this.closeChat());

      // Reset Button
      this.resetBtn.addEventListener('click', () => this.resetConversation());

      // Form Submit
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUserSubmit();
      });

      // Suggestion Chips (Global delegated listener)
      document.addEventListener('click', (e) => {
        const chip = e.target.closest('.hari-chat-chip, .hari-chat-inline-btn');
        if (chip && chip.dataset.query) {
          e.preventDefault();
          this.sendUserMessage(chip.dataset.query);
        }
      });

      // Escape key closes window
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.closeChat();
        }
      });
    }

    dismissTeaser() {
      if (this.teaser) {
        this.teaser.classList.add('hidden');
      }
    }

    toggleChat() {
      if (this.isOpen) {
        this.closeChat();
      } else {
        this.openChat();
      }
    }

    openChat() {
      this.isOpen = true;
      this.launcher.classList.add('is-open');
      this.window.classList.add('is-open');
      this.dismissTeaser();
      setTimeout(() => {
        this.input.focus();
        this.scrollToBottom();
      }, 150);
    }

    closeChat() {
      this.isOpen = false;
      this.launcher.classList.remove('is-open');
      this.window.classList.remove('is-open');
    }

    loadWelcomeMessage() {
      this.messagesContainer.innerHTML = '';
      
      const timeTag = document.createElement('div');
      timeTag.className = 'hari-chat-time-tag';
      timeTag.textContent = 'PORTFOLIO KNOWLEDGE ENGINE • LIVE';
      this.messagesContainer.appendChild(timeTag);

      const welcomeHTML = `
        <p>Hello! 👋 I'm <strong>Hari Ganesh J's AI Assistant</strong>.</p>
        <p>I know everything about Hari's background, including:</p>
        <ul>
          <li><strong>Dual Degree</strong>: B.Tech CSE at VIT Chennai &amp; BS Data Science at IIT Madras</li>
          <li><strong>Top Projects</strong>: Wearable Scoliosis Detection, ROS2 Autonomous Drone, and ML Diagnostic models</li>
          <li><strong>Engineering Skills</strong>: PyTorch, ROS2, ESP32 IoT, SQL DBMS, and Cloud AI</li>
          <li><strong>Verified Credentials</strong>: Cisco Modern AI, Cisco Data Science, and AWS Agentic AI</li>
        </ul>
        <p>How can I assist you today?</p>
      `;

      this.appendBotMessage(welcomeHTML, [
        "🎓 Explain Dual Degree",
        "⚡ Scoliosis Wearable",
        "🛠️ Skills & Stack",
        "📬 Contact Hari"
      ], false);
    }

    resetConversation() {
      this.messages = [];
      this.loadWelcomeMessage();
      this.input.value = '';
      this.input.focus();
    }

    handleUserSubmit() {
      const text = this.input.value.trim();
      if (!text || this.isTyping) return;
      this.sendUserMessage(text);
    }

    sendUserMessage(text) {
      this.input.value = '';
      this.appendUserMessage(text);

      // Show typing indicator
      this.showTypingIndicator();

      // Realistic typing deliberation delay (350ms to 550ms)
      const delay = Math.min(600, Math.max(350, text.length * 8));
      setTimeout(() => {
        this.hideTypingIndicator();
        const response = generateAIResponse(text);
        this.appendBotMessage(response.text, response.chips, true);
      }, delay);
    }

    appendUserMessage(text) {
      const row = document.createElement('div');
      row.className = 'hari-chat-message-row user';
      
      const bubble = document.createElement('div');
      bubble.className = 'hari-chat-bubble';
      bubble.textContent = text;

      row.appendChild(bubble);
      this.messagesContainer.appendChild(row);
      this.scrollToBottom();
    }

    appendBotMessage(htmlContent, chips = [], animate = true) {
      const row = document.createElement('div');
      row.className = 'hari-chat-message-row bot';

      const avatar = document.createElement('div');
      avatar.className = 'hari-chat-msg-avatar';
      avatar.textContent = 'HG';

      const bubble = document.createElement('div');
      bubble.className = 'hari-chat-bubble';
      bubble.innerHTML = htmlContent;

      // Add inline action / suggestion chips if provided
      if (chips && chips.length > 0) {
        const actionWrap = document.createElement('div');
        actionWrap.className = 'hari-chat-inline-actions';
        
        chips.forEach(chipText => {
          const btn = document.createElement('button');
          btn.className = 'hari-chat-inline-btn';
          btn.dataset.query = chipText.replace(/^[^\w\s]+/, '').trim();
          btn.innerHTML = `${chipText} <span>→</span>`;
          actionWrap.appendChild(btn);
        });

        bubble.appendChild(actionWrap);
      }

      row.appendChild(avatar);
      row.appendChild(bubble);
      this.messagesContainer.appendChild(row);
      this.scrollToBottom();
    }

    showTypingIndicator() {
      if (this.isTyping) return;
      this.isTyping = true;

      const row = document.createElement('div');
      row.className = 'hari-chat-message-row bot';
      row.id = 'hari-chat-typing-row';

      const avatar = document.createElement('div');
      avatar.className = 'hari-chat-msg-avatar';
      avatar.textContent = 'HG';

      const typingBubble = document.createElement('div');
      typingBubble.className = 'hari-chat-typing-bubble';
      typingBubble.innerHTML = `
        <span class="hari-chat-typing-dot"></span>
        <span class="hari-chat-typing-dot"></span>
        <span class="hari-chat-typing-dot"></span>
      `;

      row.appendChild(avatar);
      row.appendChild(typingBubble);
      this.messagesContainer.appendChild(row);
      this.scrollToBottom();
    }

    hideTypingIndicator() {
      const typingRow = document.getElementById('hari-chat-typing-row');
      if (typingRow) typingRow.remove();
      this.isTyping = false;
    }

    scrollToBottom() {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new HariChatbot();
    });
  } else {
    new HariChatbot();
  }

})();

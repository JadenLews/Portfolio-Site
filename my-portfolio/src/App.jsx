import React, { useState, useEffect } from "react";
import "./App.css";

import headshot from "./headshot.jpg";

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    });

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    "Programming Languages":
      "Python, Java, JavaScript, TypeScript, SQL, C, Kotlin, OCaml, HTML, CSS",
    "Frameworks & Libraries":
      "React, Scikit-learn, Django, Node.js, Bootstrap, Pandas, NumPy, Jupyter",
    "Tools & Platforms":
      "Docker, Git, AWS, Excel, Firebase, Jira, MongoDB, PostgreSQL, Render, GitHub",
    "Technical Areas":
      "Cybersecurity, Full-Stack Development, Machine Learning, Data Analysis, Cryptography, Statistical Modeling",
    "Software & Systems":
      "REST APIs, Offline Systems, Peer-to-Peer Networks, Responsive UI/UX, Automated Testing",
    "Design & Prototyping": "Figma, UX/UI Design, QR Integration, Hashing",
  };

  const experiences = [
    {
      title: "Cyber Underwriter Intern",
      company: "Hanover Insurance",
      date: "June 9th 2025 - August 8th 2025",
      location: "Windsor CT",
      current: false,
      highlight: true,
      duties: [
        "Collaborated with actuarial and data analytics teams to analyze cyber risk quantification and optimization strategies",
        "Gained hands-on experience with cyber insurance workflows,  including automated quote generation, and  pricing models",
        "Supported underwriters by reviewing loss histories, risk control measures, cybersecurity protocols for coverage decisions",
        "Researched emerging cyber threats and assessed their implications on insurance risk exposure and underwriting practices",
      ],
    },
    {
      title: "Data Science Department Assistant",
      company: "Clark University",
      date: "March 2025 - Present",
      location: "Worcester",
      current: true,
      duties: [
        "Partnered with faculty on research initiatives, delivered data focused insights through statistical analysis and visualizations",
        "Engineered a web application for local business showcasing full-stack development skills ",
        "Lead redesign of department website, for 300+ users, implementing responsive UI/UX to improve accessibility and usability",
      ],
    },
    {
      title: "Directed Study – Distributed Systems",
      company: "Clark University",
      date: "January 2024 - May 2024",
      location: "Worcester",
      current: false,
      highlight: true,
      duties: [
        "Selected for competitive directed study focused on peer-to-peer and offline systems in constrained environments",
        "Designed and prototyped an offline digital payment system, addressing limitations in low-connectivity regions",
      ],
    },
    {
      title: "Peer Learning Assistant",
      company: "Clark University",
      date: "August 2024 - May 2025",
      location: "Worcester",
      current: false,
      duties: [
        "Provide academic support through 8 weekly office hours for 30+ students in CS courses",
        "Lead review sessions covering data structures, algorithms, and Computer Science topics",
        "Assess programming assignments and exams focusing on algorithm efficiency and optimization",
        "Collaborate with faculty to improve course materials and work with automated testing",
      ],
    },
  ];

  const projects = [
    {
      title: "Insurance Cost Predictor",
      tech: "Python, scikit-learn, Pandas, NumPy, Linear Regression, Data Cleaning",
      github: "https://github.com/JadenLews/Predict_Insurance_Cost",
      demo: null,
      details: [
        "Cleaned and preprocessed real-world insurance data using Pandas, handling missing values, standardizing variables, and removing data inconsistencies.",
        "Engineered a scikit-learn pipeline combining StandardScaler and LinearRegression to predict healthcare charges based on age, sex, BMI, region, and smoking.",
        "Evaluated model performance with cross-validation, reporting average R^2 and MSE, and applied the trained model to a separate validation dataset.",
        "Implemented feature engineering techniques like dummy variable encoding and minimum prediction thresholds for practical output use.",
      ],
    },
    {
      title: "MERN E-Commerce Prototype",
      tech: "MongoDB, Express.js, React, Node.js, JavaScript, REST API, CRUD",
      github: " ", // placeholder
      demo: null,
      details: [
        "Built a full-stack job tracking application using the MERN stack to manage job applications with create, read, update, and delete functionality.",
        "Designed a RESTful API using Express and Node.js with secure routing, error handling, and MongoDB for persistent backend storage.",
        "Developed a responsive React frontend with form validation, conditional rendering, and state management for a seamless user experience.",
        "Implemented features such as job status updates, filtering, and dynamic dashboards to visualize progress across job applications.",
      ],
    },
    {
      title: "Offline P2P Digital Payment System",
      tech: "Python, QR Code, Hashing, Recovery, Cryptography, UX/UI Design",
      github: "https://github.com/JadenLews/P2P_Offline_Final",
      demo: null,
      details: [
        "Designed and built a secure offline peer-to-peer payment system in Python, with a strong focus on cryptography, security, and data protection.",
        "Implemented custom hashing and logging mechanisms to ensure transaction integrity and enable user data recovery.",
        "Handled edge cases to ensure system reliability during offline usage and unusual transaction scenarios.",
      ],
    },
    {
      title: "Analyzing Global Education Inequality and Impact",
      tech: "Pandas, NumPy, Data Cleaning, Visualization, Statistical Modeling",
      github: "",
      demo: null,
      details: [
        "Conducted multivariable statistical analysis on global economic and education datasets to uncover inequality patterns aligned with UN Goal 4.",
        "Cleaned and integrated data from UNESCO, World Bank, and UNICEF to enable careful analysis and visualization.",
        "Explored relationships between government spending, economic disparity, and social issues (e.g. bullying) on dropout rates.",
        "Created data focused visualizations and reports to convey insights on educational access and equity across regions.",
      ],
    },
    {
      title: "Stock Portfolio Tracker",
      tech: "Django, Python, HTML, CSS, JavaScript, Yahoo Finance API, Figma, SQLite",
      github: "https://github.com/JadenLews/Stock_App",
      demo: null,
      details: [
        "Developed a full-stack web application in Django to simulate stock investing, track real-time prices, and visualize portfolio performance over time.",
        "Built portfolio management features allowing users to add stocks, track share quantities, and calculate total investment value.",
        "Integrated the Yahoo Finance API to pull live market data and display price updates and trends.",
        "Designed interactive performance charts and watchlists using external graphing libraries and dynamic UI elements.",
        "Collaborated in a two-person team with an emphasis on clean UI/UX design, responsive layout (designed in Figma), and complete CRUD functionality.",
      ],
    },
    {
      title: "Small Business Website – AMF Painting",
      tech: "React, CSS, Flexbox/Grid, Render, Responsive Design, JSON-based Content Management",
      github: "https://github.com/JadenLews/AMF_Site",
      demo: "https://realamfpainting.com/",
      details: [
        "Designed and developed a production-ready website for a local Worcester business as part of a university-led initiative supporting small businesses.",
        "Collaborated directly with the business owner through multiple feedback cycles to align the final product with their branding and functional goals.",
        "Built a responsive React frontend with attention to typography, layout, and accessibility across devices.",
        "Implemented a lightweight content management approach using centralized JSON and global style files to allow client-side updates without technical overhead.",
      ],
    },
    {
      title: "2D Pool Ball Collision Simulator",
      tech: "Java, Physics Engine, Math Modeling, GUI, JPanel, Processing",
      github: "https://github.com/JadenLews/Pool_Collision_Final",
      demo: null,
      details: [
        "Built a visually interactive 2D pool ball simulator in Java, applying kinematic and trigonometric models for accurate physics simulation.",
        "Programmed real time trajectory and rebound calculations, emphasis on realistic motion and predictive modeling.",
        "Used Processing and JPanel to render dynamic visualizations of collision behavior and enhance the user experience.",
      ],
    },
    {
  title: "College Application Management System",
  tech: "Django, Python, SQLite, HTML, CSS, Bootstrap, Git",
  github: "https://github.com/JadenLews/Database_Final",
  demo: "https://www.youtube.com/watch?v=9N9P5jDcozU",
  details: [
    "Built a full-stack Django web application to manage college applications as part of a university-level Database Design and Management course.",
    "Implemented features for student users to register, create profiles, browse colleges, submit applications, and track their status.",
    "Developed a role-based system for college-affiliated users to log in, manage institutional profiles, and review applications.",
    "Utilized Django’s admin panel for CRUD operations and relational data management between students, colleges, and applications.",
    "Designed and normalized a relational database schema, and collaborated in a small development team using Git for version control.",
  ],
},
    {
      title: "Clark Ski Team Rental App",
      tech: "Kotlin, Android Studio, Firebase Realtime Database, Firebase Authentication, Google Sign-In",
      github: "https://github.com/JadenLews/Mobile_Development_Final",
      demo: null,
      details: [
        "Developed a mobile app in Kotlin for the Clark University Ski Team to manage ski equipment rentals in real time.",
        "Integrated Firebase Authentication with Google Sign-In to provide secure user login and access control.",
        "Built full CRUD functionality for ski inventory, allowing users to add, edit, delete, and view gear availability.",
        "Implemented a real-time check-out and return system using Firebase Realtime Database for immediate equipment status updates.",
        "Focused on delivering a simple and intuitive user experience tailored to team needs during the ski season.",
      ],
    },
    {
  title: "Health & Nutrition Tracker",
  tech: "Python, Tkinter, File I/O",
  github: "https://github.com/JadenLews/CSCI120_Final",
  demo: null,
  details: [
    "Built a beginner-friendly desktop application using Python and Tkinter to help users track their health data and daily nutrition intake.",
    "Implemented user profile creation with inputs like height, weight, and age, allowing real-time BMI calculation and basic health feedback.",
    "Developed a food logging system to track calories, protein, carbohydrates, and other nutritional values for daily meal planning.",
    "Stored user data using basic file I/O methods for local persistence and retrieval, with support for multiple entries.",
    "Served as an early milestone in learning application structure, GUI development, and simple data modeling in Python.",
  ],
},
  ];

  return (
    <div className="App">
      <div className="container">
        <header className="hero">
          <div className="hero-content">
            <div className="profile-section">
              <div className="profile-image-container">
                {/* Replace src with your actual image */}
                <img
                  src={headshot}
                  alt="Jaden Lewis"
                  className="profile-image"
                />
              </div>
              <div className="profile-info">
                <h1>Jaden Lewis</h1>
                <p className="tagline">
                  CS Student | ML Enthusiast | Problem Solver
                </p>
                <p className="subtitle">
                  AI/ML Engineer | Deep Learning | Cybersecurity
                </p>
                <div className="contact-info">
                  <a
                    href="mailto:lewisjaden19@gmail.com"
                    className="contact-link"
                  >
                    <span className="icon">📧</span> lewisjaden19@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/jaden-lewis-5379b7236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="icon">🔗</span> LinkedIn
                  </a>
                  <a
                    href="https://github.com/jadenlews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="icon">💻</span> GitHub
                  </a>
                  <span className="location">📍 Worcester, MA</span>
                </div>
                <div className="cta-buttons">
                  <a href="#contact" className="btn btn-primary">
                    Get In Touch
                  </a>
                  <a
                    href="/resume.pdf"
                    className="btn btn-secondary"
                    download="JadenLewis_Resume.pdf"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="highlights" className="highlights">
          <div className="highlight-cards">
            <div className="highlight-card">
              <h3>3.90 GPA</h3>
              <p>Clark University</p>
            </div>
            <div className="highlight-card">
              <h3>Summer 2025</h3>
              <p>Cyber Underwriter Intern at Hanover Insurance</p>
            </div>
            <div className="highlight-card">
              <h3>Double Major</h3>
              <p>Computer Science & Data Science</p>
              <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>
                Mathematics Minor
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className={`fade-in ${isVisible.about ? "visible" : ""}`}
        >
          <h2>About Me</h2>
          <p>
            I’m a senior at Clark University double majoring in Computer Science
            and Data Science, with a minor in Mathematics. I first got into
            coding in high school, where I built a game in Java for a class, and
            I’ve been hooked ever since. Lately, I’ve been diving deeper into
            machine learning and data analysis through personal projects and
            coursework. I’ve participated in several hackathons and spent this
            summer at Hanover Insurance as a Cyber Underwriting Intern. In my
            free time, I enjoy going to the gym and building new coding
            projects.
          </p>
        </section>

        <section
          id="skills"
          className={`fade-in ${isVisible.skills ? "visible" : ""}`}
        >
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skillList.split(", ").map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className={`fade-in ${isVisible.experience ? "visible" : ""}`}
        >
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${exp.highlight ? "highlight" : ""}`}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">
                    {exp.title}
                    {exp.upcoming && (
                      <span className="badge upcoming">Upcoming</span>
                    )}
                    {exp.current && (
                      <span className="badge current">Current</span>
                    )}
                  </h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="experience-date">
                  <span className="experience-date">{exp.date}</span>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul>
                {exp.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section
          id="projects"
          className={`fade-in ${isVisible.projects ? "visible" : ""}`}
        >
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card ${
                  project.highlight ? "highlight" : ""
                }`}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-tech">{project.tech}</p>
                <ul>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="education"
          className={`fade-in ${isVisible.education ? "visible" : ""}`}
        >
          <h2>Education</h2>
          <div className="education">
            <div className="education-header">
              <div>
                <h3 className="education-title">Clark University</h3>
                <p className="education-details">
                  B.A. Computer Science, Data Science, Mathematics Minor
                </p>
              </div>
              <div className="education-right">
                <span className="education-date">Expected May 2026</span>
                <span className="gpa-highlight">GPA: 3.90</span>
              </div>
            </div>
            <ul>
              <li>Member of C4 (Competitive Computing Club)</li>
              <li>
                Relevant Courses: Software Engineering, Database Management &
                System Design, Mobile Software Development, Assembly & Computer
                Organization, Analysis of Programming Languages, Algorithms,
                Intro to Quantitative Finance, Stochastic Computing, Computer
                Networks, Data Structures, Distributed Systems, Automata Theory
              </li>
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className={`fade-in ${isVisible.contact ? "visible" : ""}`}
        >
          <h2 className="after_different">Let's Connect</h2>
          <p className="contact-text">
            I’m always happy to connect about future opportunities or projects
            that align with my interests. I’m always open to conversations, feel
            free to reach out!
          </p>
          <div className="contact-methods">
            <a href="mailto:lewisjaden19@gmail.com" className="contact-method">
              <span className="icon">📧</span>
              <span>lewisjaden19@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/jaden-lewis-5379b7236/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <span className="contact-icon">in</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        <footer>
          <p>&copy; 2025 Jaden Lewis. Built with React.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

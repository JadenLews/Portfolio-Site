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
      "Python, Java, JavaScript, TypeScript, SQL, C, Kotlin, OCaml, HTML/CSS",
    "ML/AI Frameworks": "Pandas, NumPy, Jupyter",
    "Web Technologies":
      "React.js, Node.js, Django, Next.js, REST APIs, Firebase",
    "Tools & Platforms": "Docker, Git, AWS, Bash, Jira, MongoDB, PostgreSQL",
    "Core Competencies":
      "Machine Learning, Deep Learning, Data Analysis, Statistical Modeling, Full Stack",
    "Domain Knowledge":
      "Natural Language Processing, Stochastic Computing, Cybersecurity, Quantitative Finance",
  };

  const experiences = [
    {
      title: "Cyber Underwriter Intern",
      company: "Hanover Insurance",
      date: "Summer 2025",
      location: "Worcester",
      upcoming: true,
      highlight: true,
      duties: [],
    },
    {
      title: "Data Science Department Assistant",
      company: "Clark University",
      date: "Spring 2025 - Present",
      location: "Worcester",
      current: true,
      duties: [
        "Collaborate with faculty on research projects, contributing through analysis and visualization",
        "Developed full-stack web application for local painting company through department’s community initiatives",
        "Leading redesign of Data Science department website, will serve 300+ students and faculty with improved resource access",
        "Implemented responsive UI/UX design using React.js and css frameworks, increasing engagement",
      ],
    },
    {
      title: "Peer Learning Assistant",
      company: "Clark University",
      date: "August 2024 - May 2025",
      location: "Worcester",
      current: true,
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
    title: "Offline P2P Digital Payment System",
    tech: "Python, QR Code, Hashing, Recovery, Cryptography, UX/UI Design",
    github: "https://github.com/jadenlews/p2p-payment", // placeholder
    demo: null,
    highlight: true,
    details: [
      "Designed and built a secure offline peer-to-peer payment system in Python, with a strong focus on cryptography, security, and data protection.",
      "Implemented custom hashing and logging mechanisms to ensure transaction integrity and enable user data recovery.",
      "Handled edge cases to ensure system reliability during offline usage and unusual transaction scenarios.",
    ],
  },
  {
    title: "Analyzing Global Education Inequality and Impact",
    tech: "Pandas, NumPy, Data Cleaning, Visualization, Statistical Modeling",
    github: "https://github.com/jadenlews/education-analysis", // placeholder
    demo: null,
    details: [
      "Conducted multivariable statistical analysis on global economic and education datasets to uncover inequality patterns aligned with UN Goal 4.",
      "Cleaned and integrated data from UNESCO, World Bank, and UNICEF to enable careful analysis and visualization.",
      "Explored relationships between government spending, economic disparity, and social issues (e.g. bullying) on dropout rates.",
      "Created data focused visualizations and reports to convey insights on educational access and equity across regions.",
    ],
  },
  {
    title: "2D Pool Ball Collision Simulator",
    tech: "Java, Physics Engine, Math Modeling, GUI, JPanel, Processing",
    github: "https://github.com/jadenlews/pool-simulator", // placeholder
    demo: null,
    details: [
      "Built a visually interactive 2D pool ball simulator in Java, applying kinematic and trigonometric models for accurate physics simulation.",
      "Programmed real time trajectory and rebound calculations, emphasis on realistic motion and predictive modeling.",
      "Used Processing and JPanel to render dynamic visualizations of collision behavior and enhance the user experience.",
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
            I'm a senior at Clark University double majoring in Computer Science
            and Data Science with a minor in Math. I first started coding when I
            took a class where I built a game in Java during high school, and
            I've been coding since, lately I've been diving deeper into ML and
            data analysis. I've participated in multiple hackathons, and im
            exctied to be spending this summer joining Hanover Insurance as a
            Cyber Underwriter Intern. In my free time, I like to go to the gym,
            and work on coding projects.
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
                Intro to Quantitative Finance, Stochastic computing, Stochastic
                Computing, Computer Networks, Data Structures, Distributed
                Systems, Automata Theory
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
            that align with my interests. I’m currently committed to my
            internship, I’m always open to conversations, feel free to reach out!
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

const portfolioData = {

  skills: [
    {
      category: "Languages & Programming",
      icon: "fa-solid fa-code",
      items: ["Python", "C++", "HTML5", "CSS3"]
    },
    {
      category: "Networking & Security",
      icon: "fa-solid fa-network-wired",
      items: ["TCP/IP", "Routing & Switching (CCNA)", "Firewall & IPS/IDS Concepts", "Threat Intelligence", "Network Traffic Analysis"]
    },
    {
      category: "Salesforce",
      icon: "fa-solid fa-cloud",
      items: ["Agentforce", "Flow Builder", "Lightning Web Components", "AI Forecasting", "Prompt Builder"]
    },
    {
      category: "Systems, OS & Version Control",
      icon: "fa-solid fa-terminal",
      items: ["Linux (Ubuntu)", "Git", "GitHub", "Docker (Basics)"]
    },
    {
      category: "Cloud & Databases",
      icon: "fa-solid fa-database",
      items: ["Microsoft Azure", "MySQL", "Oracle Cloud Infrastructure", "AWS"]
    },
    {
      category: "Tools",
      icon: "fa-solid fa-screwdriver-wrench",
      items: ["VS Code", "Packet Tracer", "GNS3 (Basic)", "Google Colab", "Jupyter Notebook"]
    }
  ],

  projects: [
    {
      title: "Scalable Campus Area Network (CAN)",
      subtitle: "Multi-Building Academic Infrastructure",
      period: "Feb 2026 – Mar 2026",
      description: "Engineered a high-security Campus Area Network (CAN) across three academic blocks, exclusively designed for faculty and administrative operations to ensure isolation of sensitive institutional data from the general student population.",
      tags: ["Project Management", "Routing Protocols", "LAN Switching", "Cisco Systems", "Packet Switching", "VLAN"],
      liveLink: "#",
      githubLink: "https://github.com/DevvP4522/Campus-Area-Network",
      icon: "fa-solid fa-building"
    },
    {
      title: "Agentforce Service Agent",
      subtitle: "Salesforce AI Customer Support",
      period: "Nov 2025 – Jan 2026",
      description: "Built smart AI agents with Salesforce Agentforce to provide instant customer support and speed up response times. Integrated Flow Builder, Prompt Builder, and Einstein Trust Layer for a secure, intelligent support pipeline.",
      tags: ["Salesforce Agentforce", "Flow Builder", "Prompt Builder", "Einstein Trust Layer", "Apex"],
      liveLink: "#",
      githubLink: "https://github.com/DevvP4522/Agentforce-Service-Agent-Project",
      icon: "fa-solid fa-robot"
    }
  ],

  experience: [
    {
      role: "Microsoft Student Learn Ambassador",
      company: "Microsoft",
      period: "Jan 2025 – Jan 2026",
      icon: "fa-brands fa-microsoft",
      color: "#00a4ef"
    },
    {
      role: "AWS Community Builder",
      company: "Amazon Web Services",
      period: "Feb 2026 – Present",
      icon: "fa-brands fa-aws",
      color: "#ff9900"
    },
    {
      role: "Forward Fellowship",
      company: "McKinsey & Company",
      period: "Oct 2025 – Dec 2025",
      icon: "fa-solid fa-briefcase",
      color: "#00a4a4"
    },
    {
      role: "Agentforce Trainee",
      company: "TheSmartBridge",
      period: "Oct 2025 – Dec 2025",
      icon: "fa-solid fa-cloud",
      color: "#00a1e0"
    }
  ],

  certifications: [
    {
      title: "Jira Essentials",
      issuer: "Atlassian",
      icon: "fa-brands fa-atlassian",
      driveLink: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=712020:dd8c0b99-45d1-4add-813b-380af2bd81b4&ccat=58&date=2026-1-16",
      color: "#0052cc"
    },
    {
      title: "Rovo Fundamentals",
      issuer: "Atlassian",
      icon: "fa-brands fa-atlassian",
      driveLink: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=712020:dd8c0b99-45d1-4add-813b-380af2bd81b4&ccat=69&date=2025-12-30",
      color: "#0052cc"
    },
    {
      title: "Forge Fundamentals",
      issuer: "Atlassian",
      icon: "fa-brands fa-atlassian",
      driveLink: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=712020:dd8c0b99-45d1-4add-813b-380af2bd81b4&ccat=70&date=2025-12-30",
      color: "#0052cc"
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      icon: "fa-brands fa-microsoft",
      driveLink: "https://learn.microsoft.com/en-in/users/devpatel4522/credentials/3fd3ffe196cb2392",
      color: "#00a4ef"
    },
    {
      title: "Azure Administrator (AZ-104)",
      issuer: "Microsoft",
      icon: "fa-brands fa-microsoft",
      driveLink: "https://learn.microsoft.com/en-in/users/devpatel4522/credentials/7c0b9864882ab979",
      color: "#00a4ef"
    },
    {
      title: "Azure Network Engineer Associate",
      issuer: "Microsoft",
      icon: "fa-brands fa-microsoft",
      driveLink: "https://learn.microsoft.com/en-in/users/devpatel4522/credentials/7b94ccda3a420fd2",
      color: "#00a4ef"
    },
    {
      title: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      icon: "fa-brands fa-aws",
      driveLink: "https://www.credly.com/badges/5677829d-c4bf-4fef-a6f4-8614e2cb06ef/",
      color: "#ff9900"
    },
    {
      title: "OCI 2025 AI Foundations Associate",
      issuer: "Oracle Cloud",
      icon: "fa-solid fa-circle-nodes",
      driveLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4A616E786B1296BB1BE2F144E38A8088FADC46CEA4D3D56039DAC1CF256417A7",
      color: "#f80000"
    },
    {
      title: "OCI 2025 Foundations Associate",
      issuer: "Oracle Cloud",
      icon: "fa-solid fa-circle-nodes",
      driveLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9F54279AA21ABFCC6E77AECB2781932DCE458853DDECA58CDF371E895D376C9D",
      color: "#f80000"
    }
  ]
};

// ============================================================
//  RENDER FUNCTIONS
// ============================================================

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;
  container.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <div class="skill-card-header">
        <i class="${skill.icon} skill-icon"></i>
        <h3>${skill.category}</h3>
      </div>
      <div class="skill-tags">
        ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;
  container.innerHTML = portfolioData.projects.map(p => `
    <div class="project-card">
      <div class="project-card-top">
        <div class="project-icon-wrap">
          <i class="${p.icon}"></i>
        </div>
        <span class="project-period">${p.period}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-subtitle">${p.subtitle}</p>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${p.liveLink}" target="_blank" class="proj-btn proj-btn-primary">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
        </a>
        <a href="${p.githubLink}" target="_blank" class="proj-btn proj-btn-outline">
          <i class="fa-brands fa-github"></i> GitHub
        </a>
      </div>
    </div>
  `).join("");
}

function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;
  container.innerHTML = portfolioData.experience.map((exp, i) => `
    <div class="timeline-item ${i % 2 === 0 ? "left" : "right"}">
      <div class="timeline-card">
        <div class="timeline-icon" style="background: ${exp.color}22; border-color: ${exp.color};">
          <i class="${exp.icon}" style="color:${exp.color}"></i>
        </div>
        <div class="timeline-body">
          <span class="timeline-period">${exp.period}</span>
          <h3 class="timeline-role">${exp.role}</h3>
          <p class="timeline-company">${exp.company}</p>
        </div>
      </div>
    </div>
  `).join("");
}

function renderCertifications() {
  const container = document.getElementById("certs-grid");
  if (!container) return;
  container.innerHTML = portfolioData.certifications.map(cert => `
    <a href="${cert.driveLink}" target="_blank" class="cert-card">
      <div class="cert-icon-wrap" style="background: ${cert.color}18; border-color: ${cert.color}44;">
        <i class="${cert.icon}" style="color:${cert.color}"></i>
      </div>
      <div class="cert-info">
        <h4>${cert.title}</h4>
        <p>${cert.issuer}</p>
      </div>
      <i class="fa-solid fa-arrow-up-right-from-square cert-arrow"></i>
    </a>
  `).join("");
}

// ============================================================
//  HAMBURGER MENU
// ============================================================

function initHamburger() {
  const hamburger = document.querySelector(".Humburger");
  const navLinks = document.querySelector(".nav-links");
  if (!hamburger) return;

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when any nav link is tapped
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderExperience();
  renderCertifications();
  initHamburger();
});

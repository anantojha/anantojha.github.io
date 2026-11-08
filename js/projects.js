// All page content lives here. Edit these arrays; no HTML changes needed.
// Keep Bell entries at the architecture/outcome level: no internal system names, hostnames or customer details.

const experience = [
  {
    org: "Bell Canada, Toronto",
    roles: [
      { title: "Cloud Automation Software Developer II", when: "Dec 2023 – Present" },
      { title: "Cloud Automation Software Developer I", when: "Jun 2022 – Dec 2023" }
    ],
    bullets: [
      "Designed and built zero-touch provisioning software across Cisco, Juniper, F5 and Palo Alto datacenter infrastructure: inventory scanning, configuration, backups, failovers and reboots for the national 5G network fabric.",
      "Own automated execution of 25,000+ network changes, onboardings and OS upgrades a year on production routers, firewalls and load balancers, at a 96% success rate.",
      "Architected core parts of a distributed automation framework (gRPC, FastAPI, NGINX) with standardized GitLab and ArgoCD pipelines for automated builds, tests and deployments.",
      "Wrote the test suite for device state transitions, failure recovery and self-healing, lowering the risk of outages on core customer services.",
      "Built AI-assisted incident analysis: Gemini via Vertex AI behind a FastAPI wrapper, with MCP servers surfacing telemetry for NOC triage.",
      "Built Terraform modules that provision F5, Fortinet and Palo Alto firewalls on AWS and GCP, cutting provisioning lead time by over 90%.",
      "Wrote event-driven serverless functions for device onboarding and decommissioning during auto-scaling, and moved secrets from CI/CD variables to HashiCorp Vault.",
      "Mentor newer developers, run training workshops, and support SRE on-call."
    ]
  },
  {
    org: "Finastra, Toronto",
    roles: [{ title: "Software Engineer Intern", when: "Sep 2020 – Aug 2021" }],
    bullets: [
      "Designed automated regression, integration and cross-browser test suites for the Government of Canada’s National Student Loans system, a web app serving about 2 million users.",
      "Ran cross-team end-to-end testing workshops that caught defects before UAT and production release."
    ]
  },
  {
    org: "Manulife Financial, Toronto",
    roles: [{ title: "Software Engineer Intern", when: "May 2020 – Aug 2020" }],
    bullets: [
      "Built and tested REST API endpoints in Java Spring Boot for backend microservices, with CRUD operations on IBM DB2.",
      "Defined API contracts with frontend teams and added lazy caching and structured logging across services."
    ]
  }
];

const projects = [
  {
    title: "Zero-touch provisioning for multi-vendor datacenter gear",
    problem: "Changes across Cisco, Juniper, F5 and Palo Alto devices were manual, slow and inconsistent.",
    approach: "One automation workflow for inventory, configuration, backups, failovers and upgrades, with tests for failure and recovery paths.",
    result: "25,000+ changes a year at a 96% success rate.",
    tags: ["Python", "Ansible", "FastAPI", "gRPC", "OpenShift", "GitLab", "ArgoCD"]
  },
  {
    title: "Terraform firewall modules on AWS and GCP",
    problem: "Each firewall rollout was built by hand, which made lead times long and uneven.",
    approach: "Reusable Terraform modules and landing zones, plus serverless functions that onboard and decommission devices during auto-scaling.",
    result: "Provisioning lead time cut by over 90%.",
    tags: ["Terraform", "AWS", "GCP", "Serverless", "HashiCorp Vault"]
  },
  {
    title: "AI-assisted incident analysis",
    problem: "On-call engineers spent the first minutes of an incident gathering telemetry.",
    approach: "Gemini via Vertex AI behind a FastAPI wrapper with service accounts, and MCP servers that surface telemetry for NOC triage.",
    result: "Developers get Gemini access through one service, and the NOC gets diagnostic summaries.",
    tags: ["Python", "FastAPI", "Vertex AI", "MCP"]
  }
];

const skills = {
  "Languages": ["Python", "Java", "C#", "Bash", "Terraform (HCL)", "SQL"],
  "Cloud and Infra": ["AWS", "GCP", "Terraform", "Docker", "CI/CD", "Serverless", "IP networking", "OpenShift"],
  "Backend": ["FastAPI", "Spring Boot", "gRPC", "RPC", "Distributed systems", "Redis", "Elasticsearch", "Vertex AI API"],
  "Testing and Tooling": ["Pytest", "JUnit", "SonarQube", "GitLab", "ArgoCD", "Ansible", "Postman", "Grafana", "Claude Code"]
};

(function render() {
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  };
  const list = (items, cls) => {
    const ul = el("ul", cls);
    items.forEach(t => ul.append(el("li", "", t)));
    return ul;
  };

  const timeline = document.getElementById("timeline");
  experience.forEach(job => {
    const li = el("li");
    job.roles.forEach(r => {
      const row = el("div", "role");
      row.append(el("h3", "", r.title), el("span", "when", r.when));
      li.append(row);
    });
    li.append(el("p", "org", job.org), list(job.bullets));
    timeline.append(li);
  });

  const cards = document.getElementById("cards");
  projects.forEach(p => {
    const card = el("article", "card");
    card.append(el("h3", "", p.title));
    const dl = el("dl");
    [["Problem", p.problem], ["Approach", p.approach], ["Result", p.result]].forEach(([k, v]) => {
      dl.append(el("dt", "", k), el("dd", "", v));
    });
    card.append(dl, list(p.tags, "tags"));
    cards.append(card);
  });

  const groups = document.getElementById("skill-groups");
  Object.entries(skills).forEach(([name, items]) => {
    const g = el("div");
    g.append(el("h3", "", name), list(items));
    groups.append(g);
  });
})();

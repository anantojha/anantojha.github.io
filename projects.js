// All page content lives here. Edit these arrays; no HTML changes needed.
// Keep Bell entries at the architecture/outcome level: no internal names, hostnames or customer details.

const experience = [
  {
    org: "Bell",
    roles: [
      { title: "Developer II", when: "2023 – Present" },
      { title: "Developer I", when: "2022 – 2023" }
    ],
    bullets: [
      "Built zero-touch provisioning for multi-vendor datacenter equipment, running 25,000+ changes a year at a 96% success rate.",
      "Cut firewall provisioning lead time by over 90% with reusable Terraform modules and landing zones on AWS and GCP.",
      "Built AI-assisted incident analysis for network operations: Gemini on Vertex AI behind a FastAPI service, with MCP servers exposing telemetry."
    ]
  },
  {
    org: "Finastra",
    roles: [{ title: "Test Automation Engineer", when: "2020 – 2021" }],
    bullets: ["Built automated test suites that caught regressions before release, replacing repeated manual test passes.",
    "Ran the suites in the CI pipeline so every build was tested automatically."]
  },
  {
    org: "Manulife",
    roles: [{ title: "Cloud Developer Intern", when: "2020 – 2020" }],
    bullets: ["Developed and deployed new features for internal cloud-based tooling as part of the team’s automation work."]
  }
];

const projects = [
  {
    title: "Zero-touch provisioning for multi-vendor datacenter gear",
    problem: "Manual changes across Cisco, Juniper, F5 and Palo Alto devices were slow and inconsistent.",
    approach: "Automated inventory, configuration, backups and failovers behind one workflow.",
    result: "25,000+ changes a year at a 96% success rate.",
    tags: ["Python", "Network automation", "Cisco", "Juniper", "F5", "Palo Alto"]
  },
  {
    title: "Terraform firewall modules on AWS and GCP",
    problem: "Each firewall rollout was built by hand, which made lead times long.",
    approach: "Reusable Terraform modules plus landing zones, so new environments start from a tested baseline.",
    result: "Provisioning lead time cut by over 90%.",
    tags: ["Terraform", "AWS", "GCP", "Infrastructure as code"]
  },
  {
    title: "AI-assisted incident analysis",
    problem: "On-call engineers spent the first minutes of an incident gathering telemetry.",
    approach: "Gemini via Vertex AI behind a FastAPI wrapper, with MCP servers surfacing telemetry for NOC triage.",
    result: "Faster first-pass triage for network operations.",
    tags: ["Python", "FastAPI", "Vertex AI", "MCP"]
  }
];

const skills = {
  "Languages": ["Python", "JavaScript"],
  "Cloud and Infra": ["Terraform", "AWS", "GCP", "Vertex AI", "Network automation"],
  "Backend": ["FastAPI", "REST APIs", "MCP servers"],
  "Testing and Tooling": ["Git", "CI/CD"]
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

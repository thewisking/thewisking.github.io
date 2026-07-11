const projects = [
  {
    title: "Nonogram Solver",
    type: "Constraint solver",
    year: "2026",
    category: ["algorithms", "systems"],
    featured: true,
    status: "Public source",
    description:
      "A command-line C++ solver that loads Nonogram puzzles from text files and searches for a solved grid, or the strongest partial state it can prove.",
    highlights: [
      "Uses constraint propagation and an AC-3-style processing queue",
      "Applies DFS backtracking with a most-constrained-cell heuristic",
      "Models row and column states to prune invalid possibilities early"
    ],
    tags: ["C++", "CSP", "AC-3", "DFS", "Backtracking", "File I/O"],
    link: "https://github.com/thewisking/NonogramSolver",
    visual: "nonogram"
  },
  {
    title: "Pong Physics Engine",
    type: "Real-time simulation",
    year: "2025",
    category: ["systems", "games"],
    featured: true,
    status: "Team framework private",
    description:
      "A two-player Pong implementation centred on reliable collision detection, response and configurable runtime behaviour.",
    highlights: [
      "Implemented time-of-impact collision detection to prevent tunnelling",
      "Handled multiple collisions within a single simulation tick",
      "Added hot-reloadable JSON configuration and debugging overlays"
    ],
    tags: ["C++", "Vector Maths", "Collision Detection", "OOP", "JSON", "Game Loop"],
    link: null,
    visual: "pong"
  },
  {
    title: "Data Structures & Design Patterns",
    type: "Learning repository",
    year: "2025 — Current",
    category: ["algorithms", "systems"],
    featured: false,
    status: "Public source",
    description:
      "A build-it-to-understand-it C++ repository containing small, runnable implementations of core data structures, algorithms and object-oriented design patterns.",
    highlights: [
      "Prioritises clear implementations before optimisation",
      "Separates algorithms, data structures and design patterns",
      "Tracks progress through focused examples and tests"
    ],
    tags: ["C++", "Algorithms", "Data Structures", "Design Patterns", "SOLID", "Testing"],
    link: "https://github.com/thewisking/dsa-design-patterns",
    visual: "dsa"
  },
  {
    title: "Digital Logic Systems",
    type: "Nand2Tetris toolchain",
    year: "2025",
    category: ["systems"],
    featured: false,
    status: "Public source",
    description:
      "Implementations spanning logic gates, adders, registers, RAM, an ALU, an assembler, a virtual-machine translator and a compiler.",
    highlights: [
      "Connects hardware logic to higher-level software execution",
      "Includes VM-to-assembly and Jack-to-VM translation work",
      "Verified outputs with the official Nand2Tetris tool suite"
    ],
    tags: ["HDL", "C++", "Scilab", "Hack Assembly", "VM", "Compiler"],
    link: "https://github.com/thewisking/Nand2Tetris",
    visual: "chip"
  },
  {
    title: "Alien Translations",
    type: "Educational web game",
    year: "2025",
    category: ["web", "games"],
    featured: false,
    status: "University group project",
    description:
      "A word-unscrambling game with configurable difficulty, built as one of two educational games in a database-backed Ruby on Rails website.",
    highlights: [
      "Learned an unfamiliar web stack within a two-week deadline",
      "Connected Ruby game logic to Rails routes and views",
      "Worked within a team while carrying a full university load"
    ],
    tags: ["Ruby", "Ruby on Rails", "SQL", "HTML", "CSS", "MVC"],
    link: null,
    visual: "rails"
  },
  {
    title: "Interactive Crossword Puzzle",
    type: "Command-window application",
    year: "2024",
    category: ["games", "algorithms"],
    featured: false,
    status: "Public source",
    description:
      "A MATLAB crossword application that displays a 16×16 puzzle, reads clues from files, validates entries, fills correct words and tracks completion time.",
    highlights: [
      "Separates puzzle data, clues and application logic",
      "Validates answers and updates the grid interactively",
      "Includes test drivers and documented failed attempts"
    ],
    tags: ["MATLAB", "File I/O", "Input Validation", "Testing", "Game Logic"],
    link: "https://github.com/thewisking/InteractiveCrosswordPuzzle",
    visual: "crossword"
  }
];

const grid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function createNonogramArt() {
  const pattern = [
    0,0,1,1,0,0,1,1,0,0,
    0,1,1,1,1,1,1,1,1,0,
    1,1,1,0,1,1,0,1,1,1,
    1,1,0,0,1,1,0,0,1,1,
    0,1,1,1,1,1,1,1,1,0,
    0,0,1,1,1,1,1,1,0,0,
    0,0,0,1,1,1,1,0,0,0,
    0,0,0,0,1,1,0,0,0,0,
    0,0,0,1,0,0,1,0,0,0,
    0,0,1,0,0,0,0,1,0,0
  ];

  return `<div class="nonogram-art" aria-hidden="true">${pattern
    .map((cell) => `<span class="nonogram-cell${cell ? " is-filled" : ""}"></span>`)
    .join("")}</div>`;
}

function createDsaArt() {
  return `
    <div class="dsa-art" aria-hidden="true">
      <svg viewBox="0 0 480 280" preserveAspectRatio="xMidYMid meet">
        <line class="graph-line" x1="240" y1="55" x2="130" y2="130" />
        <line class="graph-line" x1="240" y1="55" x2="350" y2="130" />
        <line class="graph-line" x1="130" y1="130" x2="75" y2="220" />
        <line class="graph-line" x1="130" y1="130" x2="190" y2="220" />
        <line class="graph-line" x1="350" y1="130" x2="300" y2="220" />
        <line class="graph-line" x1="350" y1="130" x2="410" y2="220" />
        <circle class="graph-node is-hot" cx="240" cy="55" r="25" />
        <circle class="graph-node" cx="130" cy="130" r="23" />
        <circle class="graph-node" cx="350" cy="130" r="23" />
        <circle class="graph-node" cx="75" cy="220" r="20" />
        <circle class="graph-node" cx="190" cy="220" r="20" />
        <circle class="graph-node" cx="300" cy="220" r="20" />
        <circle class="graph-node" cx="410" cy="220" r="20" />
        <text class="graph-label" x="229" y="59">root</text>
        <text class="graph-label" x="119" y="134">L</text>
        <text class="graph-label" x="339" y="134">R</text>
        <text class="graph-label" x="54" y="250">O(log n)</text>
        <text class="graph-label" x="326" y="250">strategy()</text>
      </svg>
    </div>`;
}

function createChipArt() {
  return `
    <div class="chip-art" aria-hidden="true">
      <svg viewBox="0 0 480 280" preserveAspectRatio="xMidYMid meet">
        <line class="chip-wire" x1="35" y1="95" x2="145" y2="95" />
        <line class="chip-wire" x1="35" y1="140" x2="145" y2="140" />
        <line class="chip-wire" x1="35" y1="185" x2="145" y2="185" />
        <line class="chip-wire" x1="335" y1="118" x2="445" y2="118" />
        <line class="chip-wire" x1="335" y1="165" x2="445" y2="165" />
        <rect class="chip-body" x="145" y="55" width="190" height="170" rx="22" />
        <line class="chip-pin" x1="145" y1="95" x2="126" y2="95" />
        <line class="chip-pin" x1="145" y1="140" x2="126" y2="140" />
        <line class="chip-pin" x1="145" y1="185" x2="126" y2="185" />
        <line class="chip-pin" x1="335" y1="118" x2="354" y2="118" />
        <line class="chip-pin" x1="335" y1="165" x2="354" y2="165" />
        <text class="chip-title" x="214" y="122">ALU</text>
        <text class="chip-small" x="186" y="150">zx nx zy ny f no</text>
        <text class="chip-small" x="188" y="174">out = compute(x,y)</text>
        <text class="chip-small" x="47" y="88">x[16]</text>
        <text class="chip-small" x="47" y="133">y[16]</text>
        <text class="chip-small" x="50" y="178">control</text>
        <text class="chip-small" x="380" y="111">out[16]</text>
        <text class="chip-small" x="387" y="158">zr/ng</text>
      </svg>
    </div>`;
}

function createPongArt() {
  return `
    <div class="pong-art" aria-hidden="true">
      <div class="pong-court"></div>
      <span class="pong-paddle pong-paddle-one"></span>
      <span class="pong-paddle pong-paddle-two"></span>
      <span class="pong-ball"></span>
      <span class="impact-vector"></span>
    </div>`;
}

function createRailsArt() {
  return `
    <div class="rails-art" aria-hidden="true">
      <span class="letter-tile">A</span>
      <span class="letter-tile">L</span>
      <span class="letter-tile">I</span>
      <span class="letter-tile">E</span>
      <span class="rails-route rails-route-one"></span>
      <span class="rails-route rails-route-two"></span>
      <span class="rails-badge">difficulty: custom</span>
    </div>`;
}

function createCrosswordArt() {
  const letters = [
    "M","A","T","L","A","B","", "",
    "","","R","","","U","", "",
    "F","U","N","C","T","I","O","N",
    "","","D","","","L","", "",
    "A","R","R","A","Y","", "", "",
    "","","O","","","L","", "",
    "L","O","G","I","C","", "", "",
    "","","","","","","", ""
  ];

  const blocked = new Set([6,7,8,9,11,12,14,15,24,25,27,28,30,31,37,38,39,40,41,43,44,46,47,48,49,51,52,54,55,61,62,63]);
  const accented = new Set([0,1,2,3,4,5,18,19,20,21,22,23]);

  return `<div class="crossword-art" aria-hidden="true"><div class="crossword-grid">${letters
    .map((letter, index) => {
      const classes = ["crossword-cell"];
      if (blocked.has(index)) classes.push("is-blocked");
      if (accented.has(index)) classes.push("is-accent");
      return `<span class="${classes.join(" ")}">${blocked.has(index) ? "" : letter}</span>`;
    })
    .join("")}</div></div>`;
}

function createVisual(type) {
  const visuals = {
    nonogram: createNonogramArt,
    dsa: createDsaArt,
    chip: createChipArt,
    pong: createPongArt,
    rails: createRailsArt,
    crossword: createCrosswordArt
  };
  return visuals[type] ? visuals[type]() : "";
}

function renderProjects(filter = "all") {
  const visibleProjects = projects.filter((project) =>
    filter === "all" ? true : project.category.includes(filter)
  );

  grid.innerHTML = visibleProjects
    .map(
      (project, index) => `
        <article class="project-card${project.featured ? " is-featured" : ""} reveal" style="transition-delay:${Math.min(index * 70, 280)}ms">
          <div class="project-visual">${createVisual(project.visual)}</div>
          <div class="project-content">
            <div class="project-meta">
              <span>${project.type}</span>
              <span class="project-status">${project.year}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul class="project-highlights">
              ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="project-tags">
              ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            <div class="project-links">
              ${
                project.link
                  ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a>`
                  : `<span class="project-private">${project.status}</span>`
              }
            </div>
          </div>
        </article>`
    )
    .join("");

  observeRevealElements();
}

function observeRevealElements() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.13, rootMargin: "0px 0px -40px" }
  );

  items.forEach((item) => observer.observe(item));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("is-open", !expanded);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

const siteHeader = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => siteHeader.classList.toggle("is-scrolled", window.scrollY > 24),
  { passive: true }
);

const copyButton = document.querySelector(".copy-email");
const toast = document.querySelector(".toast");
let toastTimer;

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    toast.textContent = "Email copied";
  } catch {
    toast.textContent = copyButton.dataset.email;
  }

  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

function initialiseSignalField() {
  const canvas = document.querySelector("#signal-field");
  const context = canvas.getContext("2d");

  if (!context || reducedMotion) return;

  let width = 0;
  let height = 0;
  let deviceScale = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [];
  let animationFrame;
  const pointer = { x: -9999, y: -9999 };

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    deviceScale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * deviceScale);
    canvas.height = Math.floor(height * deviceScale);
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);

    const count = Math.min(72, Math.max(30, Math.floor(width / 22)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      radius: Math.random() * 1.1 + 0.6
    }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < -10 || node.x > width + 10) node.vx *= -1;
      if (node.y < -10 || node.y > height + 10) node.vy *= -1;

      const distanceToPointer = Math.hypot(node.x - pointer.x, node.y - pointer.y);
      if (distanceToPointer < 150) {
        const force = (150 - distanceToPointer) / 150;
        node.x += (node.x - pointer.x) * force * 0.007;
        node.y += (node.y - pointer.y) * force * 0.007;
      }

      context.beginPath();
      context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(111, 255, 233, 0.50)";
      context.fill();
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);

        if (distance < 128) {
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(106, 169, 255, ${(1 - distance / 128) * 0.13})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    }

    animationFrame = window.requestAnimationFrame(draw);
  }

  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", (event) => {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
  });
  hero.addEventListener("pointerleave", () => {
    pointer.x = -9999;
    pointer.y = -9999;
  });

  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(animationFrame);
    } else {
      draw();
    }
  });

  resize();
  draw();
}

renderProjects();
observeRevealElements();
initialiseSignalField();

const resources = [
  {
    id: "RES-001",
    title: "Comprendre les modules JavaScript",
    category: "JavaScript",
    level: "intermediate",
    format: "video",
    durationMinutes: 45,
    publishedAt: "2026-09-18",
    tags: ["modules", "node", "javascript"],
    completedBy: [
      "Amina",
      "Yassine",
      "Mehdi",
      "Sara",
      "Nabil",
      "Imane",
      "Omar",
    ],
  },
  {
    id: "RES-002",
    title: "Les bases de JavaScript moderne",
    category: "JavaScript",
    level: "beginner",
    format: "article",
    durationMinutes: 30,
    publishedAt: "2026-08-02",
    tags: ["syntaxe", "es6"],
    completedBy: ["Amina", "Sara", "Imane", "Karim", "Nabil"],
  },
  {
    id: "RES-003",
    title: "Manipuler les tableaux : map, filter, reduce",
    category: "JavaScript",
    level: "intermediate",
    format: "workshop",
    durationMinutes: 60,
    publishedAt: "2026-08-21",
    tags: ["arrays", "methodes"],
    completedBy: ["Yassine", "Mehdi", "Omar", "Sara"],
  },
  {
    id: "RES-004",
    title: "Premiers pas avec Node.js",
    category: "Backend",
    level: "beginner",
    format: "video",
    durationMinutes: 40,
    publishedAt: "2026-09-05",
    tags: ["node", "runtime"],
    completedBy: ["Amina", "Yassine", "Sara", "Nabil", "Karim", "Imane"],
  },
  {
    id: "RES-005",
    title: "Structurer un projet backend",
    category: "Backend",
    level: "advanced",
    format: "workshop",
    durationMinutes: 90,
    publishedAt: "2026-07-14",
    tags: ["architecture", "modules"],
    completedBy: ["Mehdi", "Omar"],
  },
  {
    id: "RES-006",
    title: "Git au quotidien",
    category: "Git/GitHub",
    level: "beginner",
    format: "article",
    durationMinutes: 25,
    publishedAt: "2026-06-30",
    tags: ["git", "workflow"],
    completedBy: ["Amina", "Karim", "Sara", "Imane", "Omar"],
  },
  {
    id: "RES-007",
    title: "Resoudre un conflit de merge",
    category: "Git/GitHub",
    level: "intermediate",
    format: "quiz",
    durationMinutes: 20,
    publishedAt: "2026-09-12",
    tags: ["git", "merge"],
    completedBy: ["Yassine", "Mehdi", "Nabil"],
  },
  {
    id: "RES-008",
    title: "Modeliser une base de donnees relationnelle",
    category: "Database",
    level: "intermediate",
    format: "workshop",
    durationMinutes: 100,
    publishedAt: "2026-05-19",
    tags: ["sql", "modelisation"],
    completedBy: ["Sara", "Karim"],
  },
];

console.log("learning report");
console.log(typeof window);
console.log(typeof document);
console.log(typeof process);

console.log(Array.isArray(resources));

console.log(resources[0].durationMinutes);

console.log(resources[0].completedBy);

function countResources(resources) {
  return resources.length;
}

function getTotalDuration(resources) {
  return resources.reduce((total, resource) => {
    return total + resource.durationMinutes;
  }, 0);
}

function getAverageDuration(resources) {
  const total = getTotalDuration(resources);
  const avg = total / countResources(resources);
  return avg;
}

function countByLevel(resources) {
  return resources.reduce((counts, resource) => {
    const level = resource.level;

    counts[level] = (counts[level] || 0) + 1;

    return counts;
  }, {});
}

function countByCategory(resources) {
  return resources.reduce((counts, resource) => {
    const category = resource.category;

    counts[category] = (counts[category] || 0) + 1;

    return counts;
  }, {});
}

function filterByCategory(resources, category) {
  return resources.filter((resource) => {
    return resource.category === category;
  });
}

function getMostCompletedResource(resources) {
  return resources.reduce((completed, resource) => {
    if (resource.completedBy.length > completed.completedBy.length) {
      return resource;
    }
    return completed
  });
}

const total = countResources(resources);
console.log(total);

console.log(getTotalDuration(resources));

console.log(getAverageDuration(resources));

console.log(countByLevel(resources));

console.log(countByCategory(resources));

console.log(filterByCategory(resources, "JavaScript"));

console.log(getMostCompletedResource(resources));

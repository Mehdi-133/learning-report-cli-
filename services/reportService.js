const resources = require("../data/resources");
const {
  countResources,
  getTotalDuration,
  getAverageDuration,
  countByLevel,
  countByCategory,
  getMostCompletedResource,
  filterByCategory,
} = require("./resourceService");

function report() {
  const totalResources = countResources(resources);
  const totalDuration = getTotalDuration(resources);
  const averageDuration = getAverageDuration(resources);
  const levels = countByLevel(resources);
  const categories = countByCategory(resources);
  const mostCompleted = getMostCompletedResource(resources);

  return `

 LEARNING RESOURCES REPORT

Resources: ${totalResources}
Beginner: ${levels.beginner}
Intermediate: ${levels.intermediate}
Advanced: ${levels.advanced}
Total duration: ${totalDuration} min
Average duration: ${averageDuration} min

Resources by category:
JavaScript: ${categories.JavaScript}
Backend: ${categories.Backend}
Git/GitHub: ${categories["Git/GitHub"]}
Database: ${categories.Database}

Most completed:
${mostCompleted.title} - ${mostCompleted.completedBy.length} learners
`;
}

module.exports = report;

import resources from "../data/resources.js";

export function countResources(resources) {
  return resources.length;
}

export function getTotalDuration(resources) {
  return resources.reduce((total, resource) => {
    return total + resource.durationMinutes;
  }, 0);
}

export function getAverageDuration(resources) {
  const total = getTotalDuration(resources);
  const avg = total / countResources(resources);
  return avg;
}

export function countByLevel(resources) {
  return resources.reduce((counts, resource) => {
    const level = resource.level;

    counts[level] = (counts[level] || 0) + 1;

    return counts;
  }, {});
}

export function countByCategory(resources) {
  return resources.reduce((counts, resource) => {
    const category = resource.category;

    counts[category] = (counts[category] || 0) + 1;

    return counts;
  }, {});
}

export function filterByCategory(resources, category) {
  return resources.filter((resource) => {
    return resource.category === category;
  });
}

export function getMostCompletedResource(resources) {
  return resources.reduce((completed, resource) => {
    if (resource.completedBy.length > completed.completedBy.length) {
      return resource;
    }
    return completed;
  }, resources[0]);
}


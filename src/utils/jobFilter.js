export function jobFilter(jobs, filters) {
  if (filters.length === 0) {
    return jobs;
  }
  return jobs.filter((job) =>
    filters.every(
      (filter) =>
        job.role === filter ||
        job.level === filter ||
        job.languages.includes(filter)
    )
  );
}

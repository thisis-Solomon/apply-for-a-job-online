interface Job {
id: string | number | symbol | undefined;
  role: string;
  level: string;
  languages: string[];
}

type Filter = string[];

export function jobFilter(jobs: Job[], filters: Filter): Job[] {
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

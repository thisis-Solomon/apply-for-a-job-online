import { Timestamp } from "firebase/firestore";

export function formatTimeAgo(createdAt: Timestamp): string {
  const now = new Date();
  const postedDate = new Date(createdAt.seconds * 1000);
  const diffInMs = now.getTime() - postedDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return `${diffInMinutes}mins ago`;
    }
    return `${diffInHours} hours ago`;
  } else if (diffInDays === 1) {
    return "1day ago";
  } else if (diffInDays < 7) {
    return `${diffInDays}days ago`;
  } else {
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks === 1) {
      return "1w ago";
    }
    return `${diffInWeeks}weeks ago`;
  }
}

export function isNew(createdAt: Timestamp, daysThreshold: number = 5): boolean {
  const now = new Date();
  const postedDate = new Date(createdAt.seconds * 1000);
  const diffInDays = (now.getTime() - postedDate.getTime()) / (1000 * 60 * 60 * 24);
  return diffInDays < daysThreshold;
}

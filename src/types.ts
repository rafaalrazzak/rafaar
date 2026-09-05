export type IconName =
  | "arrow-up-right"
  | "github"
  | "instagram"
  | "linkedin"
  | "mail"
  | "messages"
  | "monitor"
  | "moon"
  | "music"
  | "printer"
  | "spotify"
  | "sun"
  | "x";

export interface Link {
  name: string;
  url: string;
  icon: IconName;
  note?: string;
}

export interface Work {
  company: string;
  role: string;
  /** Working arrangement, e.g. "Remote" - shown next to the role, not as a tech tag. */
  mode?: string;
  url: string;
  logo?: string;
  /** ISO YYYY-MM-DD. Drives both the displayed year and the duration. */
  startDate: string;
  /** Display label for the end of the range. */
  end?: string;
  /** ISO YYYY-MM-DD, only for roles that have ended - its absence marks the
   *  role ongoing, which is what lets the browser keep the duration current. */
  endDate?: string;
  description: string;
  /** Stack only. The description carries the what; these carry the how. */
  tags?: readonly string[];
}

export interface Project {
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  tags?: readonly string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface StackGroup {
  group: string;
  items: readonly string[];
}

export interface ResumeData {
  name: string;
  role: string;
  location: string;
  about: string;
  email: string;
  social: readonly Link[];
  elsewhere: readonly Link[];
  work: readonly Work[];
  projects: readonly Project[];
  education: readonly Education[];
  stack: readonly StackGroup[];
}

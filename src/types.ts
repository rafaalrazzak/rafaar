export type Project = {
  cover: string;
  created_at: string;
  description: string;
  id: number;
  link: string;
  stacks: string[];
  title: string;
};

type Colors = {
  dark: string;
  darker: string;
  light: string;
  lighter: string;
};

export type NowPlaying = {
  isPlaying: boolean;
  title: string;
  artist: string;
  isPause: boolean;
  songUrl: string;
  songUri: string;
  songImage: string;
  progress: string;
  duration: string;
  progressMs: number;
  durationMs: number;
  colors: Colors;
  canvasUrl?: string;
  lyrics?: LyricSegment[];
} | null;

export type TopSong = {
  artist: string;
  songUrl: string;
  songUri: string;
  title: string;
  songImage: string;
  colors: Colors;
};

export type LyricSegment = {
  start: string;
  lyrics: string;
};

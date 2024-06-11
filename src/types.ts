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
  colors: Colors;
} | null;

export type TopSong = {
  artist: string;
  songUrl: string;
  title: string;
  songImage: string;
  colors: Colors;
};

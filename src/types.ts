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

export type TopSong = {
  artist: string;
  songUrl: string;
  songUri: string;
  title: string;
  songImage: string;
  colors: Colors;
};

export interface NowPlaying {
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
  lyrics: Lyrics;
  canvasUrl?: string;
}

export interface Lyrics {
  StartTime: number;
  EndTime: number;
  Type: string;
  Content: Content[];
}

export interface Content {
  Type: string;
  OppositeAligned: boolean;
  Lead?: Lead;
  Text?: string;
  StartTime?: number;
  EndTime?: number;
  Background?: Background[];
}

export interface Lead {
  Syllables: Syllable[];
  StartTime: number;
  EndTime: number;
}

export interface Background {
  Syllables: Syllable[];
  StartTime: number;
  EndTime: number;
}

export interface Syllable {
  Text: string;
  IsPartOfWord: boolean;
  StartTime: number;
  EndTime: number;
}
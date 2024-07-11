import { GalleryProps } from '@/components/GalleryImage';
import { NowPlaying, Project, TopSong } from '@/types';

const API_URL = 'https://api-v2.rafaar.my.id';

export async function getProjects() {
  try {
    const response = await fetch(API_URL + '/projects');
    if (!response.ok) {
      throw new Error(`Error fetching projects: ${response.statusText}`);
    }
    const data = await response.json();
    return data as Project[];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getGallery() {
  try {
    const response = await fetch(API_URL + '/gallery');
    if (!response.ok) {
      throw new Error(`Error fetching gallery: ${response.statusText}`);
    }
    const data = await response.json();
    return data as GalleryProps[];
  } catch (error) {
    console.error('Failed to fetch gallery:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getNowPlaying() {
  try {
    const response = await fetch(API_URL + '/spotify/now-playing', {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`Error fetching now playing: ${response.statusText}`);
    }
    const data = await response.json();
    return data as NowPlaying;
  } catch (error) {
    console.error('Failed to fetch now playing:', error);
    return null; // Return null or handle the error as needed
  }
}

export async function getTopSongs() {
  try {
    const response = await fetch(API_URL + '/spotify/top-tracks?limit=8', {
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching top songs: ${response.statusText}`);
    }
    const data = await response.json();
    return data as TopSong[];
  } catch (error) {
    console.error('Failed to fetch top songs:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function searchSongs(query: string) {
  try {
    const response = await fetch(API_URL + `/spotify/search?q=${query}`);
    if (!response.ok) {
      throw new Error(`Error searching songs: ${response.statusText}`);
    }
    const data = await response.json();
    return data as TopSong[];
  } catch (error) {
    console.error('Failed to search songs:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function addSongToPlaylist(songUri: string) {
  try {
    const response = await fetch(API_URL + `/spotify/playlist/${songUri}`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(`Error adding song to playlist: ${response.statusText}`);
    }
    return true;
  } catch (error) {
    console.error('Failed to add song to playlist:', error);
    return false;
  }
}

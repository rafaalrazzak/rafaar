import { GalleryProps } from '@/components/GalleryImage';
import { Project } from '@/types';

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

import { GalleryProps } from "@/components/GalleryImage";
import { Project } from "@/types";

const API_URL = "https://api-v2.rafaar.my.id";

export async function getProjects() {
    return (await fetch(API_URL + "/projects").then((res) => res.json())) as Project[];
}

export async function getGallery() {
    return (await fetch(API_URL + "/gallery").then((res) => res.json())) as GalleryProps[];
}

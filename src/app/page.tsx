import { getProjects } from '@/libs/api';
import MainPageClient from './client';

export default async function Page() {

    const projects = await getProjects();

  return <MainPageClient projects={projects} />;
}

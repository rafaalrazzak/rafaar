'use client';

import { Card } from '@/components/Card';
import { projects } from '@/data/links/projects';

export default function Projects() {
  return (
    <>
      {projects.map((item, i) => (
        <Card key={item.url} i={i} {...item} />
      ))}
    </>
  );
}

'use client';

import { cn } from '@/lib/utils';

import { Footer } from '@/components/footer';
import { AboutMe } from '@/features/home/components/aboutMe';
import { Contact } from '@/features/home/components/contact';
import { Profile } from '@/features/home/components/profile';
import { Project } from '@/features/home/components/projects';
import { Skills } from '@/features/home/components/skills';
import { Tecnology } from '@/features/home/components/tecnology';

export default function Page() {
  return (
    <div className={cn('flex flex-col text-white')}>
      <Profile />
      <Skills />
      <AboutMe />
      <Tecnology />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

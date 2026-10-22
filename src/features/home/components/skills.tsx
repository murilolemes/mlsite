'use client';

import { Content } from '@/components/content';
import { cn } from '@/lib/utils';
import { skills } from '../constants/skills';

export function Skills() {
  return (
    <div className={cn('flex w-full justify-center bg-gray-950/20')}>
      <Content
        className={cn(
          'grid grid-cols-2 gap-x-3 gap-y-6 px-4 py-6 text-center sm:grid-cols-4 sm:gap-4 md:py-8',
        )}
      >
        {skills.map((skill) => (
          <div
            key={skill.description}
            className={cn('flex flex-col items-center gap-1')}
          >
            <p className={cn('text-3xl font-extrabold text-blue-300/90 sm:text-4xl')}>
              {skill.time}
            </p>
            <p className={cn('text-xs text-gray-400 sm:text-sm')}>
              {skill.description}
            </p>
          </div>
        ))}
      </Content>
    </div>
  );
}

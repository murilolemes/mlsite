'use client';

import { Content } from '@/components/content';
import { cn } from '@/lib/utils';
import { skills } from '../constants/skills';

export function Skills() {
  return (
    <div className={cn('flex h-30 w-full justify-center bg-gray-950/20')}>
      <Content className={cn('items-center justify-between px-4')}>
        {skills.map((skill) => (
          <div
            key={skill.description}
            className={cn('flex flex-col items-center')}
          >
            <p className={cn('text-4xl font-extrabold text-blue-300/90')}>
              {skill.time}
            </p>
            <p className={cn('text-sm text-gray-400')}>{skill.description}</p>
          </div>
        ))}
      </Content>
    </div>
  );
}

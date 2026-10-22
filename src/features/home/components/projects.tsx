'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Content } from '@/components/content';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { projects } from '../constants/project';

export function Project() {
  return (
    <div className={cn('flex justify-center')} id="projetos">
      <Content className={cn('flex-col gap-4 px-4 py-12')}>
        <div
          className={cn(
            'flex w-fit items-center justify-center gap-2 text-white',
          )}
        >
          <Separator className={cn('!w-4 bg-white')} />
          <h2 className={cn('text-2xl font-medium')}>Projetos</h2>
        </div>
        <p className={cn('w-full max-w-150 text-gray-200')}>
          Projetos que desenvolvi aplicando boas práticas, foco em performace e
          uma experiência de uso simples e eficiente.
        </p>
        <div className={cn('flex gap-4')}>
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              className={cn(
                'relative flex w-105 flex-col gap-2 overflow-hidden rounded-2xl',
                'shadow-[0_0_6px_1px_rgba(0,0,0,0.5)] hover:border-1 hover:border-white/30',
              )}
            >
              {project.desenv && (
                <div
                  className={cn(
                    'absolute top-2 left-4 flex rounded-xl bg-white px-2',
                    'border-1 border-red-500 py-1',
                  )}
                >
                  <p className={cn('text-[8px] font-bold text-red-500')}>
                    Em Desenvolvimento
                  </p>
                </div>
              )}
              <Image
                src={project.image}
                width={420}
                height={420}
                alt={project.title}
              />
              <div className={cn('flex flex-col gap-2 p-2')}>
                <h4 className={cn('text-md font-bold')}>{project.title}</h4>
                <p className={cn('text-sm text-gray-200')}>
                  {project.description}
                </p>
                <div className={cn('flex gap-2')}>
                  {project.tecnology.map((tech) => (
                    <div
                      key={tech}
                      className={cn(
                        'flex rounded-2xl border-1 border-gray-200/30 px-2 py-1',
                      )}
                    >
                      <p className={cn('text-xs text-gray-400')}>{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Content>
    </div>
  );
}

'use client';

import Image from 'next/image';

import { Content } from '@/components/content';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { tecnologies } from '../constants/tecnology';

export function Tecnology() {
  return (
    <div
      className={cn('flex justify-center bg-blue-50 text-gray-700')}
      id="tecnologias"
    >
      <Content className={cn('flex-col px-4 py-12')}>
        <div
          className={cn(
            'flex w-fit items-center justify-center gap-2 text-blue-950',
          )}
        >
          <Separator className={cn('!w-4 bg-blue-950')} />
          <h2 className={cn('text-2xl font-medium')}>TECNOLOGIAS</h2>
        </div>
        <p>
          Tecnologias e ferramentas que fazem parte do meu dia a dia e que
          utilizo para construir soluções modernas e escaláveis.
        </p>
        <div className={cn('flex gap-2 py-4')}>
          {tecnologies.map((tech) => (
            <div
              key={tech.name}
              className={cn(
                'flex w-40 flex-col items-center justify-center gap-4',
                'rounded-xl border-1 border-gray-200 bg-white p-4 hover:border-blue-300',
                'transition-all duration-300 hover:scale-104 hover:transform-gpu',
              )}
            >
              <Image src={tech.icon} width={48} height={48} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}

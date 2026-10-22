'use client';

import { Content } from '@/components/content';
import { Separator } from '@/components/ui/separator';
import { ButtonWhatsApp } from '@/components/whatsapp';
import { cn } from '@/lib/utils';

export function Contact() {
  return (
    <div className={cn('flex justify-center bg-white')} id="contato">
      <Content className={cn('flex-col px-4 py-12')}>
        <div
          className={cn(
            'flex w-fit items-center justify-center gap-2 text-blue-950',
          )}
        >
          <Separator className={cn('!w-4 bg-blue-950')} />
          <h2 className={cn('text-2xl font-medium')}>CONTATO</h2>
        </div>
        <div className={cn('mt-4 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8')}>
          <div className={cn('flex flex-col gap-2 sm:flex-1')}>
            <p className={cn('text-xl font-bold text-gray-700')}>
              Vamos <span className={cn('text-blue-500')}>conversar?</span>
            </p>
            <p className={cn('max-w-150 text-gray-700')}>
              Estou sempre aberto a novos desafios, oportunidades e projetos.
              Vamos transformar sua ideia em realidade.
            </p>
          </div>
          <ButtonWhatsApp
            textColor="text-blue-500"
            py="py-6"
            bg="bg-transparent"
            borderColor="border-blue-200"
          >
            Vamos conversar
          </ButtonWhatsApp>
        </div>
      </Content>
    </div>
  );
}

'use client';

import { Content } from '@/components/content';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { aboult } from '../constants/about';

export function AboutMe() {
  return (
    <div className={cn('flex justify-center bg-white')} id="sobre">
      <Content className={cn('flex-col px-4 py-12')}>
        <div
          className={cn(
            'flex w-fit items-center justify-center gap-2 text-blue-950',
          )}
        >
          <Separator className={cn('!w-4 bg-blue-950')} />
          <h2 className={cn('text-2xl font-medium')}>SOBRE MIM</h2>
        </div>
        <div className={cn('mt-4 flex flex-col gap-6 xl:flex-row xl:gap-8')}>
          <div className={cn('flex flex-col gap-2 xl:w-3/5')}>
            <p className={cn('text-gray-700')}>
              Sou desenvolvedor Full Stack e bacharel em Ciência da Computação,
              com experiência no desenvolvimento e manutenção de sistemas,
              integrações e soluções voltadas para o dia a dia das empresas.
              Minha trajetória começou com suporte e sistemas desktop e, com o
              tempo, evoluiu para o desenvolvimento web, trabalhando com
              tecnologias como React, Next.js, TypeScript, NestJS, C#,
              PostgreSQL e outras ferramentas do ecossistema moderno.
            </p>
            <p className={cn('text-gray-700')}>
              Gosto de transformar necessidades reais em soluções simples,
              organizadas e funcionais, sempre buscando evoluir tecnicamente e
              entender também o impacto que o software gera para quem o utiliza.
              Atualmente, venho aprofundando meus conhecimentos em aplicações
              web e arquitetura de sistemas enquanto desenvolvo projetos
              próprios, como um ERP completo, que reúne módulos de clientes,
              vendas, usuários e financeiro.
            </p>
          </div>
          <div
            className={cn(
              'grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:flex-1',
            )}
          >
            {aboult.map((ab) => (
              <div
                key={ab.title}
                className={cn(
                  'flex min-h-32 flex-col rounded-md border-1 border-gray-200',
                  'bg-gray-50 p-4 text-blue-950 hover:border-blue-300',
                )}
              >
                <ab.icon size={24} weight="bold" />
                <h3 className={cn('text-md mt-2 font-bold')}>{ab.title}</h3>
                <p className={cn('text-sm')}>{ab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
}

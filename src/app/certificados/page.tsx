'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

const certificates = [
  {
    training: 'Ciência da Computação',
    institution: 'UNIVERSIDADE PAULISTA - UNIP',
    conclusion: 'Junho de 2021',
    image: '/assets/CienciaComp.jpg',
  },
  {
    training: 'Modelagem de Banco de dados',
    institution: 'TREINAWEB',
    conclusion: 'Setembro de 2025',
    image: '/assets/bdModelagem.jpg',
  },
  {
    training: 'Banco de dados Relacional',
    institution: 'TREINAWEB',
    conclusion: 'Outubro de 2025',
    image: '/assets/bdRelacional.jpg',
  },
  {
    training: 'Banco de dados - Entidade e Relacionamento',
    institution: 'TREINAWEB',
    conclusion: 'Setembro de 2025',
    image: '/assets/bdRelacionamento.jpg',
  },
  {
    training: 'C# - Algoritmos',
    institution: 'TREINAWEB',
    conclusion: 'junho de 2025',
    image: '/assets/csharpAlgoritmos.jpg',
  },
  {
    training: 'C# - Estrutura de Dados e Collections',
    institution: 'TREINAWEB',
    conclusion: 'Junho de 2025',
    image: '/assets/csharpEstruturaDados.jpg',
  },
  {
    training: 'C# - Gerenciamento de Pacotes com NuGet',
    institution: 'TREINAWEB',
    conclusion: 'Julho de 2025',
    image: '/assets/csharpGerenciamentoNuGet.jpg',
  },
  {
    training: 'C# - Linq',
    institution: 'TREINAWEB',
    conclusion: 'Julho de 2025',
    image: '/assets/csharpLinq.jpg',
  },
  {
    training: 'C# - Orientação a Objetos',
    institution: 'TREINAWEB',
    conclusion: 'Junho de 2025',
    image: '/assets/csharpOrientadoObjeto.jpg',
  },
  {
    training: 'Git - Fundamentos',
    institution: 'TREINAWEB',
    conclusion: 'Agosto de 2025',
    image: '/assets/gitFundamentos.jpg',
  },
  {
    training: 'Bootcamp GoStack',
    institution: 'ROCKETSEAT',
    conclusion: 'Outubro de 2020',
    image: '/assets/gostack.jpg',
  },
  {
    training: 'Nest.js - Fundamentos',
    institution: 'TREINAWEB',
    conclusion: 'Setembro de 2025',
    image: '/assets/nestFundamentos.jpg',
  },
  {
    training: 'Node.js',
    institution: 'ALURA',
    conclusion: 'Agosto de 2019',
    image: '/assets/nodeJs.jpg',
  },
  {
    training: 'React',
    institution: 'ALURA',
    conclusion: 'Setembro de 2019',
    image: '/assets/reactJs.jpg',
  },
  {
    training: 'Scrum - Planejamento e Desenvolvimento Ágil',
    institution: 'TREINAWEB',
    conclusion: 'Outubro de 2025',
    image: '/assets/scrum.jpg',
  },
  {
    training: 'Node.js - Fundamentos',
    institution: 'TREINAWEB',
    conclusion: 'Março de 2026',
    image: '/assets/nodeFundamentos.jpg',
  },
  {
    training: 'MySQL - Desenvolvedor',
    institution: 'TREINAWEB',
    conclusion: 'Fevereiro de 2026',
    image: '/assets/mysqlDesenvolvedor.jpg',
  },
];

export default function Certificates() {
  return (
    <main className={cn('flex h-full flex-col gap-4 p-4')}>
      <h1
        className={cn(
          'text-purple-800text-5xl text-5xl font-medium text-purple-800',
        )}
      >
        Certificados
      </h1>

      <div
        className={`grid w-full grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 py-4`}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={cn(
              'overflow-hidden rounded-sm border border-gray-50/10 transition-all',
              'bg-gray-900/70 hover:translate-y-[-5px]',
              'duration-500 hover:-translate-y-[5px] hover:border-gray-300',
            )}
          >
            <Image
              src={cert.image}
              width={286}
              height={202}
              alt={cert.training}
              className={cn('h-auto w-full object-contain')}
            />
            <div
              className={cn('flex min-h-20 flex-col content-between gap-1 p-2')}
            >
              <p className={cn('text-sm text-gray-300')}>
                <span className={cn('text-sm font-bold text-gray-300')}>
                  Curso:
                </span>{' '}
                {cert.training}
              </p>
              <p className={cn('text-sm text-gray-300')}>
                <span className={cn('text-sm font-bold text-gray-300')}>
                  Instituição:
                </span>{' '}
                {cert.institution}
              </p>
              <p className={cn('text-sm text-gray-300')}>
                <span className={cn('text-sm font-bold text-gray-300')}>
                  Conclusão:
                </span>{' '}
                {cert.conclusion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

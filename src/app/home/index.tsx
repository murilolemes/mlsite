'use client';

import { cn } from '@/lib/utils';
import { apiGitHub } from '@/services/api';
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  MapPinIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Repositories from './components/cards';

interface GitHubProps {
  avatar_url: string;
}

export default function Home() {
  const [gitHubImage, setGitHubImage] = useState<GitHubProps>(
    {} as GitHubProps,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiGitHub.get<GitHubProps>('/users/murilolemes');
      setGitHubImage(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main
      className={cn('relative flex w-full flex-col items-center gap-24 p-4')}
    >
      {/* bio */}
      <div
        className={cn(
          'flex w-full flex-col items-center justify-center gap-8 md:flex-row',
        )}
      >
        <div className={cn('mb-8 flex-1 sm:mb-0')}>
          <h1 className={cn('text-5xl font-medium text-purple-800')}>
            Murilo Lemes
          </h1>
          <p className={cn('mt-8 text-sm')}>
            Formado em Ciência da Computação na Universidade Paulista (UNIP) e
            atualmente estou em busca de aprofundar meus conhecimentos nas
            tecnologias {`"ReactJS, JavaScript, TypeScript, HTML e CSS"`}.
          </p>
          <p className={cn('mt-4 text-sm')}>
            Estou sempre tentando ser melhor que ontem, gosto de enfrentar novos
            desafios e meus medos para melhorar a cada dia. Gosto de trabalhar
            em equipe e estou sempre disposto a aprender e a ajudar as pessoas.
          </p>
          <p className={cn('mt-4 text-sm')}>
            Possuo bom relacionamento interpessoal, trabalho em equipe,
            responsabilidades e dedicação às atividades de trabalho.
          </p>
          <p className={cn('mt-4 text-sm')}>
            <strong>
              Meu objetivo é aprender e adquirir experiência para crescimento
              profissional.
            </strong>
          </p>
        </div>

        {/* Profile */}
        <div
          className={cn(
            'h-80 w-full max-w-100',
            'flex flex-col items-center justify-between',
          )}
        >
          {/* Avatar */}
          <div
            className={cn(
              'h-48 w-48 rounded-full shadow-[0_0_0_3px] shadow-purple-800',
              isLoading
                ? 'animate-shimmer bg-[linear-gradient(90deg,#1E2939_25%,#364153_50%,#1E2939_75%)] bg-size-[200%_100%]'
                : 'bg-cover bg-center',
            )}
            style={
              !isLoading
                ? { backgroundImage: `url(${gitHubImage.avatar_url})` }
                : undefined
            }
          />

          <div className={cn('flex w-full flex-col gap-2')}>
            <p
              className={cn(
                'flex items-center justify-center gap-1 text-sm text-gray-200',
              )}
            >
              <MapPinIcon size={14} />
              Olímpia - SP
            </p>
            <p
              className={cn(
                'flex items-center justify-center gap-1 text-sm text-gray-200',
              )}
            >
              <EnvelopeSimpleIcon size={14} />
              murilo.lemes.mhl@gmail.com
            </p>

            {/* Button */}
            <Link
              href="https://github.com/murilolemes"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-full rounded-xl px-4 py-2 shadow-[0_0_2px] shadow-purple-500',
                'bg-purple-800 transition-colors duration-200 hover:bg-purple-600',
                'flex items-center justify-center gap-2',
              )}
            >
              <GithubLogoIcon size={14} weight="bold" />
              Acesse meu GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-8">
        <h2 className="text-3xl text-purple-800">Acesse meus repositórios</h2>
        <Repositories />
      </div>
    </main>
  );
}

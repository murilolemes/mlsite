'use client';

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  tecnology: string[];
  link: string;
  desenv: boolean;
};

export const projects: ProjectProps[] = [
  {
    image: '/assets/mlimports.png',
    title: 'MLCELL IMPORTS',
    description: 'Site de venda de celular',
    tecnology: ['Next.js', 'TailwindCSS', 'TypeScript'],
    link: 'https://mlcellimports.vercel.app/',
    desenv: false,
  },
  {
    image: '/assets/mlcontrol.png',
    title: 'MLCONTROL',
    description: 'Site para controle financeiro',
    tecnology: [
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'Nest.js',
      'PostgreSQL',
    ],
    link: 'https://mlcontrol.vercel.app/',
    desenv: true,
  },
  {
    image: '/assets/vidaemovimento.png',
    title: 'Vida & Movimento',
    description: 'Site de Pilates e Fisioterapia',
    tecnology: ['Next.js', 'TailwindCSS', 'TypeScript'],
    link: 'https://vidaemovimento.vercel.app/',
    desenv: false,
  },
];

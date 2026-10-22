'use client';

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  tecnology: string[];
  link: string;
};

export const projects: ProjectProps[] = [
  {
    image: '/assets/mlimports.png',
    title: 'MLCELL IMPORTS',
    description: 'Site de venda de celular',
    tecnology: ['Next.js', 'TailwindCSS', 'TypeScript'],
    link: 'https://mlcellimports.vercel.app/',
  },
  {
    image: '/assets/mlcontrol.png',
    title: 'MLCONTROL',
    description: 'Site para controle financeiro',
    tecnology: ['Next.js', 'TailwindCSS', 'TypeScript'],
    link: 'https://mlcontrol.vercel.app/',
  },
  {
    image: '/assets/fisio.png',
    title: 'Vida & Movimento',
    description: 'Site de Pilates e Fisioterapia',
    tecnology: ['Next.js', 'TailwindCSS', 'TypeScript'],
    link: 'https://fisiolaragratao.netlify.app/',
  },
];

'use client';

type SkillsProps = {
  id: string;
  time: string;
  description: string;
};

export const skills: SkillsProps[] = [
  {
    id: 'projects',
    time: '+3',
    description: 'Projetos desenvolvidos',
  },
  {
    id: 'skill',
    time: '+2',
    description: 'Anos de experiência',
  },
  {
    id: 'tecnologies',
    time: '+6',
    description: 'Tecnologias',
  },
  {
    id: 'evolution',
    time: '100%',
    description: 'Foco em evolução',
  },
];

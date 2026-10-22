'use client';

import {
  CodeIcon,
  DatabaseIcon,
  GearIcon,
  Icon,
  LightbulbIcon,
} from '@phosphor-icons/react';

type AboultProps = {
  icon: Icon;
  title: string;
  description: string;
};

export const aboult: AboultProps[] = [
  {
    icon: CodeIcon,
    title: 'Desenvolvimento Web',
    description: 'Aplicações modernas com React e Next.js.',
  },
  {
    icon: DatabaseIcon,
    title: 'Banco de Dados',
    description: 'PostgreSQL, MySQL e modelagem de dados.',
  },
  {
    icon: GearIcon,
    title: 'Sistemas e Integrações',
    description: 'APIs e sistemas de gestão.',
  },
  {
    icon: LightbulbIcon,
    title: 'Soluções sob medida',
    description: 'Soluções para problemas reais.',
  },
];

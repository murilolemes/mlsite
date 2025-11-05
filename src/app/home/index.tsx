"use client";

import { EnvelopeSimpleIcon, GithubLogoIcon, MapPinIcon } from "@phosphor-icons/react";
import Link from "next/link";
import Repositories from "./components/cards";
import {
  PageContainer,
  PageContent,
  PageDescription,
  PageProfile,
  PageRepositories,
  ProfileImage
} from "./styles";

export default function Home() {
  return (
    <PageContainer>
      <PageContent>
        <PageDescription>
          <h1>Murilo Lemes</h1>
          <p>
            Formado em Ciência da Computação na Universidade Paulista (UNIP) e
            atualmente estou em busca de aprofundar meus conhecimentos nas
            tecnologias "ReactJS, JavaScript, TypeScript, HTML e CSS".
          </p>
          <p>
            Estou sempre tentando ser melhor que ontem, gosto de enfrentar
            novos desafios e meus medos para melhorar a cada dia. Gosto de
            trabalhar em equipe e estou sempre disposto a aprender e a
            ajudar as pessoas.
          </p>
          <p>
            Possuo bom relacionamento interpessoal, trabalho em equipe,
            responsabilidades e dedicação às atividades de trabalho.
          </p>
          <p>
            <strong>
              Meu objetivo é aprender e adquirir experiência para crescimento profissional.
            </strong>
          </p>
        </PageDescription>
        <PageProfile>
          <ProfileImage />
          <p>
            <MapPinIcon size={14} />
            Olímpia - SP
          </p>
          <p>
            <EnvelopeSimpleIcon size={14} />
            murilo.lemes.mhl@gmail.com
          </p>
          <Link href="https://github.com/murilolemes" target="_blank" rel="noopener noreferrer">
            <GithubLogoIcon size={14} weight="bold" />
            Acesse meu GitHub
          </Link>
        </PageProfile>
      </PageContent>
      <PageRepositories>
        <h2>Acesse meus repositórios</h2>
        <Repositories />
        <button>Ver todos os repositórios</button>
      </PageRepositories>
    </PageContainer>
  )
}
"use client";

import bdModelagem from "@/assets/bdModelagem.jpg";
import bdRelacional from "@/assets/bdRelacional.jpg";
import bdRelacionamento from "@/assets/bdRelacionamento.jpg";
import csharpAlgoritimos from "@/assets/csharpAlgoritmos.jpg";
import csharpEstruturaDados from "@/assets/csharpEstruturaDados.jpg";
import csharpGerenciamentoNuGet from "@/assets/csharpGerenciamentoNuGet.jpg";
import csharpLinq from "@/assets/csharpLinq.jpg";
import csharpOrientadoObjeto from "@/assets/csharpOrientadoObjeto.jpg";
import gitFundamentos from "@/assets/gitFundamentos.jpg";
import goStack from "@/assets/gostack.jpg";
import nestFundamentos from "@/assets/nestFundamentos.jpg";
import nodeJs from "@/assets/nodeJs.jpg";
import reactJs from "@/assets/reactJs.jpg";
import scrum from "@/assets/scrum.jpg";


import Image from "next/image";
import { CertificateContainer, CertificateContent, CertificateDetails, CertificateItem } from "./styles";

const certificates = [
  {
    training: "Modelagem de Banco de dados",
    institution: "TREINAWEB",
    conclusion: "Setembro de 2025",
    image: bdModelagem,
  },
  {
    training: "Banco de dados Relacional",
    institution: "TREINAWEB",
    conclusion: "Outubro de 2025",
    image: bdRelacional,
  },
  {
    training: "Banco de dados - Entidade e Relacionamento",
    institution: "TREINAWEB",
    conclusion: "Setembro de 2025",
    image: bdRelacionamento,
  },
  {
    training: "C# - Algoritmos",
    institution: "TREINAWEB",
    conclusion: "junho de 2025",
    image: csharpAlgoritimos,
  },
  {
    training: "C# - Estrutura de Dados e Collections",
    institution: "TREINAWEB",
    conclusion: "Junho de 2025",
    image: csharpEstruturaDados,
  },
  {
    training: "C# - Gerenciamento de Pacotes com NuGet",
    institution: "TREINAWEB",
    conclusion: "Julho de 2025",
    image: csharpGerenciamentoNuGet,
  },
  {
    training: "C# - Linq",
    institution: "TREINAWEB",
    conclusion: "Julho de 2025",
    image: csharpLinq,
  },
  {
    training: "C# - Orientação a Objetos",
    institution: "TREINAWEB",
    conclusion: "Junho de 2025",
    image: csharpOrientadoObjeto,
  },
  {
    training: "Git - Fundamentos",
    institution: "TREINAWEB",
    conclusion: "Agosto de 2025",
    image: gitFundamentos,
  },
  {
    training: "Bootcamp GoStack",
    institution: "ROCKETSEAT",
    conclusion: "Outubro de 2020",
    image: goStack,
  },
  {
    training: "Nest.js - Fundamentos",
    institution: "TREINAWEB",
    conclusion: "Setembro de 2025",
    image: nestFundamentos,
  },
  {
    training: "Node.js",
    institution: "ALURA",
    conclusion: "Agosto de 2019",
    image: nodeJs,
  },
  {
    training: "React",
    institution: "ALURA",
    conclusion: "Setembro de 2019",
    image: reactJs,
  },
  {
    training: "Scrum - Planejamento e Desenvolvimento Ágil",
    institution: "TREINAWEB",
    conclusion: "Outubro de 2025",
    image: scrum,
  },
];

export default function Certificates() {
  return (
    <CertificateContainer>
      <h1>Certificados</h1>

      <CertificateContent>
        {certificates.map((cert, index) => (
          <CertificateItem key={index}>
            <Image src={cert.image} alt={cert.training} />
            <CertificateDetails>
              <p><span>Curso:</span> {cert.training}</p>
              <p><span>Instituição:</span> {cert.institution}</p>
              <p><span>Conclusão:</span> {cert.conclusion}</p>
            </CertificateDetails>
          </CertificateItem>
        ))}
      </CertificateContent>
    </CertificateContainer>
  );
}
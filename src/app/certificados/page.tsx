"use client";

import Image from "next/image";
import { CertificateContainer, CertificateContent, CertificateDetails, CertificateItem } from "./styles";

const certificates = [
  {
    training: "Modelagem de Banco de dados",
    institution: "TREINAWEB",
    conclusion: "Setembro de 2025",
    image: "/assets/bdModelagem.jpg",
  },
  {
    training: "Banco de dados Relacional",
    institution: "TREINAWEB",
    conclusion: "Outubro de 2025",
    image: "/assets/bdRelacional.jpg",
  },
  {
    training: "Banco de dados - Entidade e Relacionamento",
    institution: "TREINAWEB",
    conclusion: "Setembro de 2025",
    image: "/assets/bdRelacionamento.jpg",
  },
  {
    training: "C# - Algoritmos",
    institution: "TREINAWEB",
    conclusion: "junho de 2025",
    image: "/assets/csharpAlgoritmos.jpg",
  },
  {
    training: "C# - Estrutura de Dados e Collections",
    institution: "TREINAWEB",
    conclusion: "Junho de 2025",
    image: "/assets/csharpEstruturaDados.jpg",
  },
  {
    training: "C# - Gerenciamento de Pacotes com NuGet",
    institution: "TREINAWEB",
    conclusion: "Julho de 2025",
    image: "/assets/csharpGerenciamentoNuGet.jpg",
  },
  {
    training: "C# - Linq",
    institution: "TREINAWEB",
    conclusion: "Julho de 2025",
    image: "/assets/csharpLinq.jpg",
  },
  {
    training: "C# - Orientação a Objetos",
    institution: "TREINAWEB",
    conclusion: "Junho de 2025",
    image: "/assets/csharpOrientadoObjeto.jpg",
  },
  {
    training: "Git - Fundamentos",
    institution: "TREINAWEB",
    conclusion: "Agosto de 2025",
    image: "/assets/gitFundamentos.jpg",
  },
  {
    training: "Bootcamp GoStack",
    institution: "ROCKETSEAT",
    conclusion: "Outubro de 2020",
    image: "/assets/gostack.jpg",
  },
  {
    training: "Nest.js - Fundamentos",
    institution: "TREINAWEB",
    conclusion: "Setembro de 2025",
    image: "/assets/nestFundamentos.jpg",
  },
  {
    training: "Node.js",
    institution: "ALURA",
    conclusion: "Agosto de 2019",
    image: "/assets/nodeJs.jpg",
  },
  {
    training: "React",
    institution: "ALURA",
    conclusion: "Setembro de 2019",
    image: "/assets/reactJs.jpg",
  },
  {
    training: "Scrum - Planejamento e Desenvolvimento Ágil",
    institution: "TREINAWEB",
    conclusion: "Outubro de 2025",
    image: "/assets/scrum.jpg",
  },
];

export default function Certificates() {
  return (
    <CertificateContainer>
      <h1>Certificados</h1>

      <CertificateContent>
        {certificates.map((cert, index) => (
          <CertificateItem key={index}>
            <Image src={cert.image} width={286} height={202} alt={cert.training} />
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
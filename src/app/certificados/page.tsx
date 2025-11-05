"use client";

import Cert from "@/assets/csharp.jpg";
import Image from "next/image";
import { CertificateContainer, CertificateContent, CertificateDetails, CertificateItem } from "./styles";

const certificates = [
  {
    curso: "Certificado Bootcamp GoStack Rocketseat",
    instituicao: "Universidade São José do Rio Preto",
    conclusao: "Outubro de 2025",
  },
  {
    curso: "C# - Fundamentos",
    instituicao: "Treina Web",
    conclusao: "Outubro de 2025",
  },
  {
    curso: "C# - Fundamentos",
    instituicao: "Treina Web",
    conclusao: "Outubro de 2025",
  },
  {
    curso: "C# - Fundamentos",
    instituicao: "Treina Web",
    conclusao: "Outubro de 2025",
  },
  {
    curso: "C# - Fundamentos",
    instituicao: "Treina Web",
    conclusao: "Outubro de 2025",
  },
];

export default function Certificates() {
  return (
    <CertificateContainer>
      <h1>Certificados</h1>

      <CertificateContent>
        {certificates.map((cert, index) => (
          <CertificateItem key={index}>
            <Image src={Cert} alt={cert.curso} />
            <CertificateDetails>
              <p><span>Curso:</span> {cert.curso}</p>
              <p><span>Instituição:</span> {cert.instituicao}</p>
              <p><span>Conclusão:</span> {cert.conclusao}</p>
            </CertificateDetails>
          </CertificateItem>
        ))}
      </CertificateContent>
    </CertificateContainer>
  );
}
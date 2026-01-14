"use client"

import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { WhatsAppInButton } from "./styles";

export default function WhatsApp() {
  const message = 'Olá ML, tudo bem?'
  const cell = '551799742-0235';


  const apiWhats = `https://api.whatsapp.com/send?phone=${cell}&text=${message}`;

  return (
    <WhatsAppInButton
      href={apiWhats}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
    >
      <WhatsappLogoIcon size={24} weight="fill" />
    </WhatsAppInButton>
  )
}
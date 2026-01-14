"use client"

import { LinkedinLogoIcon } from "@phosphor-icons/react"
import { LinkedInButton } from "./styles"

export default function LinkedIn() {
  return (
    <LinkedInButton
      href="https://www.linkedin.com/in/murilolemes/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
    >
      <LinkedinLogoIcon size={24} weight="fill" />
    </LinkedInButton>
  )
}
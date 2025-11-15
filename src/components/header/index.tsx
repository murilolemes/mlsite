"use client"

import { usePathname } from "next/navigation";
import { HeaderContainer, HeaderContent, Logo, Nav, NavLink } from "./styles";

import LogoML from "@/assets/logoML.svg";

export default function Header() {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/certificados", label: "Certificados" }
  ]

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/home">
          <LogoML />
        </Logo>
        <Nav>
          {links.map(link => {
            const isActive = pathName === link.href
            return (
              <NavLink
                key={link.href}
                href={link.href}
                isactive={isActive}
              >
                {link.label}
              </NavLink>
            )
          })}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
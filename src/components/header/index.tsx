"use client"

import { usePathname } from "next/navigation";
import { HeaderContainer, HeaderContent, Logo, Nav, NavLink } from "./styles";

import Image from "next/image";

export default function Header() {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/certificados", label: "Certificados" }
  ]

  return (
    <HeaderContainer>
      <HeaderContent>
        {links
          .filter(link => link.label === "Home")
          .map(link => {
            const isActive = pathName === link.href
            return (
              <Logo
                key={link.href}
                href={link.href}
              >
                <Image src="/assets/logoML.svg" alt="Logo ML" width={64} height={64} />
              </Logo>
            )
          })}
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
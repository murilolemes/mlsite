"use client"

import { usePathname } from "next/navigation";
import { HeaderContainer, HeaderContent, Logo, Nav, NavLink } from "./styles";

export default function Header() {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/certificados", label: "Certificados" }
  ]

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <h1>ML</h1>
        </Logo>
        <Nav>
          {links.map(link => {
            const isActive = pathName === link.href
            return (
              <NavLink
                key={link.href}
                href={link.href}
                active={isActive}
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
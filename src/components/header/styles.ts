"use client"

import Link from "next/link";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.5rem;
  
  border-bottom: 1px solid var(--gray-500);
  background: var(--background-acrilic);
  backdrop-filter: blur(10px) saturate(100%);
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  
  transform: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  `

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1232px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  `

export const Logo = styled.div`
  h1 {
    font-weight: 400;
  }
`

interface LinksProps {
  active: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const NavLink = styled(Link) <LinksProps>`
  color: ${({ active }) => active ? 'var(--purple-400)' : 'var(--gray-300)'};
  font-weight: ${({ active }) => active ? '700' : '400'};
  border-bottom: ${({ active }) => active ? '1px solid var(--purple-400)' : 'none'};

  &:hover {
    color: var(--purple-400);
    transition: all 0.2s;
  }
`
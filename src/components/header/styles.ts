"use client"

import Link from "next/link";
import styled from "styled-components";

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
  height: 100%;
  margin: 0 auto;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Link)`
  height: 100%;
  padding: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    height: calc(100% - 0.25rem);
  }
`

interface LinksProps {
  isactive: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const NavLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["isactive"].includes(prop)
}) <LinksProps>`
  color: ${({ isactive }) => isactive ? 'var(--purple-400)' : 'var(--gray-300)'};
  font-weight: ${({ isactive }) => isactive ? '700' : '400'};
  border-bottom: ${({ isactive }) => isactive ? '1px solid var(--purple-400)' : 'none'};

  &:hover {
    color: var(--purple-400);
    transition: all 0.2s;
  }
`
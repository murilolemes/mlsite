"use client"

import Link from "next/link";
import styled from "styled-components";

export const LinkedInButton = styled(Link)`
  background-color: var(--blue-500);
  color: white;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1rem;
  right: 1rem;

  &:hover {
    background-color: var(--blue-700);
    transition: 0.5s;
  }
`; 
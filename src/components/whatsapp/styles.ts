"use client"

import Link from "next/link";
import styled from "styled-components";

export const WhatsAppInButton = styled(Link)`
  background-color: var(--green-500);
  color: white;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;


  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  
  bottom: 5rem;
  right: 1rem;

  &:hover {
    background-color: var(--green-900);
    transition: 0.5s;
  }
`; 
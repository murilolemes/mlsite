"use client"

import { styled } from "styled-components";

export const CertificateContainer = styled.main`
  height: 100%;  
  padding: 1rem; 
  
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 400;
    color: var(--purple-400);
  }

  @media(max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const CertificateContent = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-top: 0.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(20rem - 32px), 1fr));
  gap: 1rem;
`;

export const CertificateItem = styled.div`
  background: var(--gray-700);
  border: 1px solid var(--gray-500);
  border-radius: 10px;
  overflow: hidden;

  transition: 0.5s;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--gray-300);
  }
`;

export const CertificateDetails = styled.div`
  min-height: 5rem;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.25rem;

  p {
    font-size: var(--font-sm);
    font-weight: 500;
    color: var(--gray-100);
    
    &:first-child {
      font-weight: 600;
    }
  }
  
  span {
    font-weight: 500;
    color: var(--gray-300);
  }
`;
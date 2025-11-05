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
`;

export const CertificateContent = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(20rem - 32px), 1fr));
  gap: 1rem;
`;

export const CertificateItem = styled.div`
  background: var(--gray-100);
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  
 img {
    width: 100%;
    height: auto;
    object-fit: contain;
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
    color: var(--gray-900);
    
    &:first-child {
      font-weight: 600;
    }
  }
  
  span {
    font-weight: 500;
    color: var(--gray-300);
  }
`;
"use client"

import styled, { css } from "styled-components";

export const PageContainer = styled.main`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6rem;
`

const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const PageContent = styled(Content)`
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const PageDescription = styled.div`
  max-width: 38rem;

  h1 {
    font-size: 3rem;
    font-weight: 400;
    color: var(--purple-400);
  }

  p {
    line-height: 1.8;
    font-size: 0.875rem;
    font-weight: 400;

    margin-top: 2rem;

    & + p {
      margin-top: 1rem;
    }
  }

  @media(max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      text-align: justify;
    }

    p {
      font-weight: 400;
      text-align: justify;
    }
  }
`

export const PageProfile = styled.div`
  width: 100%;
  max-width: 25rem;
  height: 20rem;

  border: 1px solid var(--gray-500);
  border-radius: 20px;
  padding: 2rem;
  margin-left: auto;

  background: var(--gray-700);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--gray-300);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  a {
    width: 100%;
    padding: 0.5rem 1rem;

    border-radius: 10px;
    border: 1px solid var(--purple-500);
    background: var(--purple-500);
    color: var(--white);
      
    font-size: 0.875rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      background: var(--purple-600);
      transition: 0.5s;
    }
  }

  @media(max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }
`;

interface ProfileImageProps {
  imageurl: string;
  isloading: boolean;
}

export const ProfileImage = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isloading", "imgageUrl"].includes(prop)
}) <ProfileImageProps>`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--purple-500);
  margin-bottom: 1rem;

  ${({ isloading, imageurl }) => (isloading
    ? css`
      background: linear-gradient(
        90deg, 
        #1E2939 25%, 
        #364153 50%, 
        #1E2939 75%
      );
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    `
    : css`
      background-image: url(${imageurl});
      background-size: cover;
      background-position: center;
    `
  )}
  
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const PageRepositories = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: var(--purple-400);
  }

  @media(max-width: 768px) {
    font-size: 2rem;
  }
`

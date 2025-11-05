"use client"

import { styled } from "styled-components";

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
`

export const PageProfile = styled.div`
  width: 25rem;
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
`;

export const ProfileImage = styled.div`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--purple-500);
  margin-bottom: 1rem;

  background-image: url('https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc5MjI3NzJ8MA&ixlib=rb-4.1.0&q=80&w=400');
  background-size: cover;
  background-position: center;
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

  button {
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: 10px;

    background: var(--foreground);
    color: var(--purple-500);
    border: 2px solid var(--purple-500);

    font-size: 0.875rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--purple-500);
      color: var(--foreground);
      transition: 0.2s;
    }
  }
`

"use client"

import styled, { css } from "styled-components";

interface CardContainerProps {
  isloading: boolean;
}

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isloading"].includes(prop)
}) <CardContainerProps>`
  width: 100%;
  padding: 1rem 0;

  ${({ isloading }) => (isloading
    ? css`
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    ` : css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(calc(20rem - 32px), 1fr));
      gap: 1rem;
    `
  )}

  .spinner {
    ${({ isloading }) => (isloading
    ? css`
      display: initial;
      animation: spin 3s linear infinite;
      `
    : css`
        display: none;
      `
  )}
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CardContent = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 14rem;

  background: var(--gray-700);
  border: 1px solid var(--gray-500);
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.5s;

  .title-repo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      font-weight: 400;
    }

    a {
      width: 1rem;
      height: 1rem;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .description {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-300);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--gray-300);
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  .inf {
    display: flex;
    flex-direction: row;
    align-items: center;


    span {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--purple-500);
      margin-right: 0.5rem;
    }

    p {
      font-size: 0.875rem;
      color: var(--gray-300);

      display: flex;
      align-items: center;
      gap: 0.5rem;

      & + p {
        margin-left: 1rem;
      }

    }

    .starred {
      svg {
        color: var(--yellow-500);
      }

      color: var(--gray-100);
    }

    .forked {
      svg {
        color: var(--green-500);
      }

      color: var(--gray-100);
    }
  }

  .public {
    font-size: 0.75rem;
    background: var(--gray-500);
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 0.5rem 1rem;
  }
`;
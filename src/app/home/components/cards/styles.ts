"use client"

import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 1rem;

  padding: 1rem 0 0.5rem 0;
`;

export const CardContent = styled.div`
  min-width: 24rem;
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

    button {
      width: 14px;
      height: 14px;
      font-size: 10px;
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
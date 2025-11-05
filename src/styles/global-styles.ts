"use client"

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: var(--gray-900);
    --foreground: var(--gray-100);
    --background-acrilic: rgba(16, 24, 40, 0.6);
    
    --white: #FFFFFF;

    --gray-900: #101828;
    --gray-700: #1E2939;
    --gray-500: #364153;
    --gray-300: #707988;
    --gray-200: #B8B8D0;
    --gray-100: #f9fafb;
    
    --purple-700: #7159c1;
    --purple-600: #850ed0;
    --purple-500: #9810FA;
    --purple-400: #a32cff;
    --purple-300: #7038f8;
    --purple-200: #a890f0;

    --red-300: #ff3b30;
    --fighting: #C03028;
    
    --green-600: #a8a878;
    --green-500: #30d158;
    --green-300: #8aee71;
    --green-100: #49d0b0;
    
    
    --blue-300: #76befe;
    --blue-100: #98D8D8;
    
    
    --yellow-900: #705848;
    --yellow-600: #B8A038;
    --yellow-500: #f8d030;
    --yellow-300: #E0C068;

    --orange-600: #f08030;
    
    --pink-700: #a040a0;
    --pink-500: #f85888;
    --pink-300: #ee99ac;

    /* --max-width: 1200px; */
    
    --font-lg: 1rem;
    --font-md: 0.875rem;
    --font-sm: 0.75rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    overflow: auto;
    scrollbar-width: 1px;

    ::-webkit-scrollbar-track {
      background-color: var(--gray-500);
    }

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background: var(--gray-700);
    }

    ::-webkit-scrollbar-thumb {
      width: 50%;
      background: var(--gray-300);
      border-radius: 10px;
    }
  }

  body {
    font-family: var(--font-montserrat), sans-serif;
    color: var(--foreground);
    
    background: var(--background);
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #content {
    width: 100%;
    max-width: 1232px;
    min-height: calc(100vh - 4.5rem);
    margin: 4.5rem auto 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

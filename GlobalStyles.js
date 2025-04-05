import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Variables */
    --primary-color: #ff6b6b;
    --secondary-color: #495057;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    
    /* Spacing Variables */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Typography Variables */
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-xxl: 2rem;
    
    /* Border Variables */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-circle: 50%;
    
    /* Shadow Variables */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark-color);
    background-color: #ffffff;
  }
  
  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--secondary-color);
    }
  }
  
  ul, ol {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* Typography Helpers */
  .text-center {
    text-align: center;
  }
  
  .text-uppercase {
    text-transform: uppercase;
  }
  
  .text-primary {
    color: var(--primary-color);
  }
  
  /* Spacing Helpers */
  .my-1 { margin: var(--spacing-sm) 0; }
  .my-2 { margin: var(--spacing-md) 0; }
  .my-3 { margin: var(--spacing-lg) 0; }
  
  .p-1 { padding: var(--spacing-sm); }
  .p-2 { padding: var(--spacing-md); }
  .p-3 { padding: var(--spacing-lg); }
  
  /* Flex Helpers */
  .flex {
    display: flex;
  }
  
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Button Base Styles */
  .btn {
    display: inline-block;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    
    &-primary {
      background-color: var(--primary-color);
      color: white;
      
      &:hover {
        background-color: darken(var(--primary-color), 10%);
      }
    }
    
    &-outline {
      background-color: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      
      &:hover {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }
  
  /* Form Elements */
  input, textarea, select {
    width: 100%;
    padding: var(--spacing-sm);
    border: 1px solid #ddd;
    border-radius: var(--border-radius-sm);
    margin-bottom: var(--spacing-md);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
    }
  }
  
  /* Responsive Grid */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }
  
  /* Utility Classes */
  .shadow-sm { box-shadow: var(--shadow-sm); }
  .shadow-md { box-shadow: var(--shadow-md); }
  .shadow-lg { box-shadow: var(--shadow-lg); }
  
  .rounded-sm { border-radius: var(--border-radius-sm); }
  .rounded-md { border-radius: var(--border-radius-md); }
  .rounded-lg { border-radius: var(--border-radius-lg); }
`;

export default GlobalStyles;
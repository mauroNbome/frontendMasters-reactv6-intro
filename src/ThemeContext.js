import { createContext } from 'react';

// Passing a function as second argument, (it's a hook) that's because of

// typescript will yell to us If we dont do this way.
export const ThemeContext = createContext('green', () => {});

export default ThemeContext;

import { createContext, useContext } from 'react';

export const MyContext = createContext(null);

export const useMyContext = () => useContext(MyContext);

'use client';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

type CounterContextData = {
  counter: number;
  addCounter: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const CounterContext = createContext<CounterContextData>({} as CounterContextData);

export function CounterProvider({ children }: AuthProviderProps) {
  const [counter, setCounter] = useState(0);

  const addCounter = useCallback(() => {
    setCounter(state => state + 1)
  }, []);
  
  return (
    <CounterContext.Provider value={{ counter, addCounter }}>
     {children}
    </CounterContext.Provider>
  );
}

export function useCounter(): CounterContextData {
  return useContext(CounterContext);
}
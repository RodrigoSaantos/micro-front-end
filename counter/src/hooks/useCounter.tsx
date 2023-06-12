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
  resetCounter: () => void;
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

  const resetCounter = useCallback(() => {
    setCounter(0)
  }, []);
  
  return (
    <CounterContext.Provider value={{ counter, addCounter, resetCounter }}>
     {children}
    </CounterContext.Provider>
  );
}

export function useCounter(): CounterContextData {
  return useContext(CounterContext);
}
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { NAV } from 'menu/Menu'

export type MenuOptions = typeof NAV[number]['name'];

export type TabContextData = {
  tabSelected?: MenuOptions;
  changeTab: (tab: MenuOptions) => void;
};

type TabProviderProps = {
  children: ReactNode;
};

const TabContext = createContext<TabContextData>({} as TabContextData);

export function TabProvider({ children }: TabProviderProps) {
  const [tabSelected, setTabSelected] = useState<MenuOptions | undefined>(undefined);

  const changeTab = useCallback((tab?: MenuOptions) => {
    setTabSelected(tab);
  }, []);
  
  return (
    <TabContext.Provider value={{ tabSelected, changeTab }}>
     {children}
    </TabContext.Provider>
  );
}

export function useTab(): TabContextData {
  return useContext(TabContext);
}
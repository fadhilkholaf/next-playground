"use client";

import { GlobalStateContext } from "@/types/globalState";
import { createContext, useContext, useState } from "react";

const globalStateContext = createContext<GlobalStateContext | undefined>(
  undefined
);

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [globalState, setGlobalState] = useState<string>("");

  return (
    <globalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </globalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(globalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

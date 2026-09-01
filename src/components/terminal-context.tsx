"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type TerminalContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const TerminalContext = createContext<TerminalContextValue | null>(null);

export function TerminalProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
}

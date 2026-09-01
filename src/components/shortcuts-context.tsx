"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ShortcutsContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ShortcutsContext = createContext<ShortcutsContextValue | null>(null);

export function ShortcutsProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <ShortcutsContext.Provider value={value}>
      {children}
    </ShortcutsContext.Provider>
  );
}

export function useShortcuts() {
  const context = useContext(ShortcutsContext);
  if (!context) {
    throw new Error("useShortcuts must be used within a ShortcutsProvider");
  }
  return context;
}

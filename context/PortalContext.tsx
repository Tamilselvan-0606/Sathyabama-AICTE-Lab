'use client';

import React, { createContext, useContext, useState } from 'react';

interface PortalContextType {
  isOpen: boolean;
  openPortal: () => void;
  closePortal: () => void;
}

const PortalContext = createContext<PortalContextType>({
  isOpen: false,
  openPortal: () => {},
  closePortal: () => {},
});

export function PortalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PortalContext.Provider
      value={{
        isOpen,
        openPortal: () => setIsOpen(true),
        closePortal: () => setIsOpen(false),
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  return useContext(PortalContext);
}

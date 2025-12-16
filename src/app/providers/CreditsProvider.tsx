import { createContext, useContext, useState, ReactNode } from 'react';

interface CreditsContextType {
  credits: number;
  addCredits: (amount: number) => void;
  deductCredits: (amount: number) => boolean;
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

const STORAGE_KEY = 'reveo_credits';
const DEFAULT_CREDITS = 1250;

export const CreditsProvider = ({ children }: { children: ReactNode }) => {
  const [credits, setCredits] = useState<number>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? parseInt(stored, 10) : DEFAULT_CREDITS;
  });

  const addCredits = (amount: number) => {
    const newCredits = credits + amount;
    setCredits(newCredits);
    localStorage.setItem(STORAGE_KEY, newCredits.toString());
  };

  const deductCredits = (amount: number): boolean => {
    if (credits < amount) return false;
    const newCredits = credits - amount;
    setCredits(newCredits);
    localStorage.setItem(STORAGE_KEY, newCredits.toString());
    return true;
  };

  return (
    <CreditsContext.Provider value={{ credits, addCredits, deductCredits }}>
      {children}
    </CreditsContext.Provider>
  );
};

export const useCredits = () => {
  const context = useContext(CreditsContext);
  if (context === undefined) {
    throw new Error('useCredits must be used within a CreditsProvider');
  }
  return context;
};

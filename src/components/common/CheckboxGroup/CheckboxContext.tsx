import { createContext } from 'react';

type Context = {
  isChecked: (value: string) => boolean;
  toggleValue: ({ checked, value }: { checked: boolean; value: string }) => void;
};

export const CheckboxContext = createContext<Context | null>(null);

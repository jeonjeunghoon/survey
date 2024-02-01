import { ReactElement } from 'react';

export type DropdownMenu = {
  icon: ReactElement | null;
  text: string;
  handleClick: () => void;
};

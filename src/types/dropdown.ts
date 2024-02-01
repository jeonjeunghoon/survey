import { ReactElement } from 'react';
import { QuestionType } from './question';

export type DropdownMenu = {
  icon: ReactElement | null;
  text: string;
  type: QuestionType;
  handleClick: (selectedType: QuestionType) => void;
};

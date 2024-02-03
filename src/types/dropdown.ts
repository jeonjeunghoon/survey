import { ReactElement } from 'react';

import { QuestionType } from './question';

export type DropdownMenu = {
  text: string;
  icon?: ReactElement;
  type?: QuestionType;
  handleClick?: (selectedType: QuestionType) => void;
};

export type QuestionType = 'singleChoice' | 'shortAnswer' | 'longAnswer' | 'checkbox' | 'dropdown';

export type Question = {
  id: number;
  type: QuestionType;
  question: string;
  optionList: string[] | null;
  hasOtherOption: boolean;
  isRequired: boolean;
};

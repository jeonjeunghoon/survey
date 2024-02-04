export type QuestionType = 'singleChoice' | 'shortAnswer' | 'longAnswer' | 'checkbox' | 'dropdown';

type SelectedOption = {
  option: string;
  index: number;
};

export type Question = {
  id: number;
  type: QuestionType;
  question: string;
  optionList: string[];
  isRequired: boolean;
  hasOtherOption: boolean;
  answer?: string | null;
  selectedSingleOption?: SelectedOption | null;
  selectedMultipleOption?: SelectedOption[] | null;
  otherOption?: string | null;
};

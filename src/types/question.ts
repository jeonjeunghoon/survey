export type QuestionType = 'singleChoice' | 'shortAnswer' | 'longAnswer' | 'checkbox' | 'dropdown';

type SelectedSingleOption = {
  option: string;
  index: number;
};

export type Question = {
  id: number;
  type: QuestionType;
  question: string;
  optionList: string[];
  hasOtherOption: boolean;
  isRequired: boolean;
  answer?: string | null;
  selectedSingleOption?: SelectedSingleOption | null;
};

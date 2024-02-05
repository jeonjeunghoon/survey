import { Question } from '../../types/question';

type FormState = {
  title: string;
  description: string;
  hasRequired: boolean;
  questionList: Question[];
  currentFocusedCardId: number | null;
};

export const INITIAL_QUESTION: Question = {
  id: 0,
  type: 'singleChoice',
  question: '제목없는 질문',
  optionList: ['옵션 1'],
  otherOption: null,
  answer: null,
  selectedSingleOption: null,
  selectedMultipleOption: null,
  hasOtherOption: false,
  isRequired: false,
};

export const initialState: FormState = {
  title: '제목 없는 설문지',
  description: '',
  hasRequired: false,
  questionList: [INITIAL_QUESTION],
  currentFocusedCardId: null,
};

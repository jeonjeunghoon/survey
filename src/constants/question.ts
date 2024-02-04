import { QuestionType } from '../types/question';

export const QUESTION_TYPE: Record<string, QuestionType> = {
  단답형: 'shortAnswer',
  장문형: 'longAnswer',
  객관식질문: 'singleChoice',
  체크박스: 'checkbox',
  드롭다운: 'dropdown',
} as const;

import { QuestionType } from '../types/question';
import { QUESTION_TYPE } from '../hooks/useQuestionTypeSet';

export const isRenderAnswer = (type: QuestionType) =>
  type === QUESTION_TYPE.단답형 || type === QUESTION_TYPE.장문형;

export const isRenderOtherOptionButton = (type: QuestionType, hasOtherOption: boolean) =>
  !hasOtherOption && (type === QUESTION_TYPE.객관식질문 || type === QUESTION_TYPE.체크박스);

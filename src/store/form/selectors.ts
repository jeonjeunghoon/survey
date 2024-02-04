import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const titleSelector = (state: RootState) => state.form.title;
export const descriptionSelector = (state: RootState) => state.form.description;
export const questionListSelector = (state: RootState) => state.form.questionList;
export const questionFormSelector = (id: number) => (state: RootState) => {
  const questionForm = state.form.questionList.find((question) => question.id === id);
  if (!questionForm) throw new Error('잘못된 id입니다.');

  return questionForm;
};

// const INITIAL_QUESTION = {
//   id: 0,
//   type: 'singleChoice',
//   question: '제목없는 질문',
//   optionList: ['옵션 1'],
//   otherOption: null,
//   answer: null,
//   selectedSingleOption: null,
//   selectedMultipleOption: null,
//   hasOtherOption: false,
//   isRequired: false,
// };

export const selectQuestionById = (id: number) =>
  createSelector([questionFormSelector(id)], (questionForm) => questionForm.question);

export const selectQuestionTypeById = (id: number) =>
  createSelector([questionFormSelector(id)], (questionForm) => questionForm.type);

export const selectQuestionHasOtherOptionById = (id: number) =>
  createSelector([questionFormSelector(id)], (questionForm) => questionForm.hasOtherOption);

export const selectQuestionOptionListById = (id: number) =>
  createSelector([questionFormSelector(id)], (questionForm) => questionForm.optionList);

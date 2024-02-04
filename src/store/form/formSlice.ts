import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Question, QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../constants/question';
import { initialState, INITIAL_QUESTION } from './state';

const findTargetIndex = (questionList: Question[], id: number) =>
  questionList.findIndex((question) => question.id === id);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    editTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
    },

    editDescription: (state, action: PayloadAction<{ description?: string }>) => {
      const { description } = action.payload;

      if (description === undefined) return;

      state.description = description;
    },

    addSingleChoiceQuestion: (state) => {
      state.questionList.push({
        ...INITIAL_QUESTION,
        question: '',
        id: state.questionList
          ? Math.max(...state.questionList.map((question) => question.id)) + 1
          : 0,
      });
    },

    editType: (state, action: PayloadAction<{ id: number; questionType: QuestionType }>) => {
      const { id, questionType } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);

      const hasOtherOption =
        questionType === QUESTION_TYPE.객관식질문 || questionType === QUESTION_TYPE.체크박스
          ? state.questionList[targetQuestionFormIndex].hasOtherOption
          : false;
      const newQuestion = {
        ...state.questionList[targetQuestionFormIndex],
        type: questionType,
        hasOtherOption,
      };
      state.questionList[targetQuestionFormIndex] = newQuestion;
    },

    editQuestion: (state, action: PayloadAction<{ id: number; question?: string }>) => {
      const { id, question } = action.payload;

      if (question === undefined) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);

      const parseQuestion = question.trim();
      const newQuestionForm = {
        ...state.questionList[targetQuestionFormIndex],
        question: parseQuestion,
      };
      state.questionList[targetQuestionFormIndex] = newQuestionForm;
    },

    addOption: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionFormIndex].optionList;
      optionList.push(`옵션 ${optionList.length + 1}`);
    },

    deleteOption: (state, action: PayloadAction<{ id: number; index: number }>) => {
      const { id, index } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionFormIndex].optionList;
      optionList.splice(index, 1);
    },

    editOption: (state, action: PayloadAction<{ id: number; index: number; option: string }>) => {
      const { id, index, option } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionFormIndex].optionList;
      if (optionList && optionList.length > index) optionList[index] = option;
    },

    addOtherOption: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      state.questionList[targetQuestionFormIndex].hasOtherOption = true;
    },

    deleteOtherOption: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      state.questionList[targetQuestionFormIndex].hasOtherOption = false;
    },

    pasteQuestion: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);

      const NEW_QUESTION: Question = {
        ...state.questionList[targetQuestionFormIndex],
        id: Math.max(...state.questionList.map((question) => question.id)) + 1,
      };

      state.questionList.splice(targetQuestionFormIndex, 0, NEW_QUESTION);
    },

    deleteQuestion: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);

      state.questionList.splice(targetQuestionFormIndex, 1);

      if (!state.questionList.length) state.questionList = [];
    },

    toggleRequired: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const { questionList } = state;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);
      const newIsRequired = !questionList[targetQuestionFormIndex].isRequired;

      questionList[targetQuestionFormIndex].isRequired = newIsRequired;

      if (questionList.some(({ isRequired }) => isRequired)) state.hasRequired = true;
      else state.hasRequired = false;
    },

    storeAnswer: (state, action: PayloadAction<{ id: number; answer: string | null }>) => {
      const { id, answer } = action.payload;

      const { questionList } = state;

      if (answer === null) return;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);
      questionList[targetQuestionFormIndex].answer = answer;
    },

    selectSingleOption: (
      state,
      action: PayloadAction<{
        id: number;
        selectedOption: { option: string; index: number } | null;
      }>,
    ) => {
      const { id, selectedOption } = action.payload;

      const { questionList } = state;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);
      questionList[targetQuestionFormIndex].selectedSingleOption = selectedOption;
    },

    selectMultipleOption: (
      state,
      action: PayloadAction<{
        id: number;
        selectedOptionList: { option: string; index: number }[] | null;
      }>,
    ) => {
      const { id, selectedOptionList } = action.payload;

      const { questionList } = state;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);
      questionList[targetQuestionFormIndex].selectedMultipleOption = selectedOptionList;
    },

    setOtherOption: (state, action: PayloadAction<{ id: number; option: string }>) => {
      const { id, option } = action.payload;

      const { questionList } = state;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);
      const target = questionList[targetQuestionFormIndex];

      if (!target.hasOtherOption) return;

      target.otherOption = option;
    },

    deleteReplies: (state) => {
      const newQuestionList: Question[] = state.questionList.map((question) => {
        return {
          ...question,
          otherOption: null,
          answer: null,
          selectedSingleOption: null,
          selectedMultipleOption: null,
        };
      });

      state.questionList = newQuestionList;
    },

    changeQuestionOrder: (state, action: PayloadAction<{ questionList: Question[] }>) => {
      state.questionList = action.payload.questionList;
    },

    changeOptionOrder: (state, action: PayloadAction<{ id: number; optionList: string[] }>) => {
      const { id, optionList } = action.payload;
      const { questionList } = state;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);

      questionList[targetQuestionFormIndex].optionList = optionList;
    },
  },
});

export const {
  editTitle,
  editDescription,
  addSingleChoiceQuestion,
  editType,
  editQuestion,
  addOption,
  deleteOption,
  editOption,
  addOtherOption,
  deleteOtherOption,
  pasteQuestion,
  deleteQuestion,
  toggleRequired,
  storeAnswer,
  selectSingleOption,
  selectMultipleOption,
  setOtherOption,
  deleteReplies,
  changeQuestionOrder,
  changeOptionOrder,
} = formSlice.actions;

export default formSlice.reducer;

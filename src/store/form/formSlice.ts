import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Question, QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../constants/question';
import { initialState, INITIAL_QUESTION } from './state';

const findTargetIndexById = (questionList: Question[], id: number) =>
  questionList.findIndex((question) => question.id === id);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    editTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
    },

    editDescription: (state, action: PayloadAction<{ description: string }>) => {
      state.description = action.payload.description;
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

    editType: (state, action: PayloadAction<{ id: number; type: QuestionType }>) => {
      const { type } = action.payload;

      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);

      const hasOtherOption =
        type === QUESTION_TYPE.객관식질문 || type === QUESTION_TYPE.체크박스
          ? state.questionList[targetIndex].hasOtherOption
          : false;

      const newQuestion = {
        ...state.questionList[targetIndex],
        type,
        hasOtherOption,
      };

      state.questionList.splice(targetIndex, 1, newQuestion);
    },

    editQuestion: (state, action: PayloadAction<{ id: number; question: string }>) => {
      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);

      const parseQuestion = action.payload.question.trim();

      const newQuestionForm = {
        ...state.questionList[targetIndex],
        question: parseQuestion,
      };

      state.questionList.splice(targetIndex, 1, newQuestionForm);
    },

    addOption: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);

      const optionList = state.questionList[targetIndex].optionList;
      optionList.push(`옵션 ${optionList.length + 1}`);
    },

    deleteOption: (state, action: PayloadAction<{ id: number; index: number }>) => {
      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);
      const optionList = state.questionList[targetIndex].optionList;
      optionList.splice(action.payload.index, 1);
    },

    editOption: (state, action: PayloadAction<{ id: number; index: number; option: string }>) => {
      const { index } = action.payload;

      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);
      const optionList = state.questionList[targetIndex].optionList;
      if (optionList.length > index) optionList[index] = action.payload.option;
    },

    addOtherOption: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);
      state.questionList[targetIndex].hasOtherOption = true;
    },

    deleteOtherOption: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);
      state.questionList[targetIndex].hasOtherOption = false;
    },

    pasteQuestion: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);

      const NEW_QUESTION: Question = {
        ...state.questionList[targetIndex],
        id: Math.max(...state.questionList.map((question) => question.id)) + 1,
      };

      state.questionList.splice(targetIndex, 0, NEW_QUESTION);
    },

    deleteQuestion: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = findTargetIndexById(state.questionList, action.payload.id);

      state.questionList.splice(targetIndex, 1);
    },

    toggleRequired: (state, action: PayloadAction<{ id: number }>) => {
      const { questionList } = state;

      const targetIndex = findTargetIndexById(questionList, action.payload.id);
      const newIsRequired = !questionList[targetIndex].isRequired;

      state.questionList[targetIndex].isRequired = newIsRequired;

      if (questionList.some(({ isRequired }) => isRequired)) state.hasRequired = true;
      else state.hasRequired = false;
    },

    storeAnswer: (state, action: PayloadAction<{ id: number; answer: string | null }>) => {
      const { answer } = action.payload;

      const { questionList } = state;

      if (answer === null) return;

      const targetIndex = findTargetIndexById(questionList, action.payload.id);
      questionList[targetIndex].answer = answer;
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

      const targetIndex = findTargetIndexById(questionList, id);
      questionList[targetIndex].selectedSingleOption = selectedOption;
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

      const targetIndex = findTargetIndexById(questionList, id);
      questionList[targetIndex].selectedMultipleOption = selectedOptionList;
    },

    setOtherOption: (state, action: PayloadAction<{ id: number; option: string }>) => {
      const { id, option } = action.payload;

      const { questionList } = state;

      const targetIndex = findTargetIndexById(questionList, id);
      const target = questionList[targetIndex];

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
      const { questionList } = state;

      const targetIndex = findTargetIndexById(questionList, action.payload.id);
      state.questionList[targetIndex].optionList = action.payload.optionList;
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

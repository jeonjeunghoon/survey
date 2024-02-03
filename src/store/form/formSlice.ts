import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Question, QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

type FormState = {
  title: string;
  description: string;
  hasRequired: boolean;
  questionList: Question[] | null;
};

const INITIAL_QUESTION: Question = {
  id: 0,
  type: 'singleChoice',
  question: '제목없는 질문',
  optionList: ['옵션 1'],
  answer: null,
  hasOtherOption: false,
  isRequired: false,
};

const initialState: FormState = {
  title: '제목 없는 설문지',
  description: '',
  hasRequired: false,
  questionList: [INITIAL_QUESTION],
};

const findTargetIndex = (questionList: Question[], id: number) =>
  questionList?.findIndex((question) => question.id === id);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    editTitle: (state, action: PayloadAction<{ title?: string }>) => {
      const { title } = action.payload;

      if (title === undefined) return;

      state.title = title;
    },

    editDescription: (state, action: PayloadAction<{ description?: string }>) => {
      const { description } = action.payload;

      if (description === undefined) return;

      state.description = description;
    },

    addSingleChoiceQuestion: (state) => {
      const NEW_QUESTION: Question = {
        ...INITIAL_QUESTION,
        question: '',
        id: state.questionList
          ? Math.max(...state.questionList.map((question) => question.id)) + 1
          : 0,
      };

      if (!state.questionList) state.questionList = [NEW_QUESTION];
      else state.questionList.push(NEW_QUESTION);
    },

    editType: (state, action: PayloadAction<{ id: number; questionType: QuestionType }>) => {
      const { id, questionType } = action.payload;

      if (!state.questionList) return;

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

      if (!state.questionList || question === undefined) return;

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

      if (!state.questionList) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionFormIndex].optionList;
      optionList.push(`옵션 ${optionList.length + 1}`);
    },

    deleteOption: (state, action: PayloadAction<{ id: number; index: number }>) => {
      const { id, index } = action.payload;

      if (!state.questionList) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionFormIndex].optionList;
      optionList.splice(index, 1);
    },

    editOption: (state, action: PayloadAction<{ id: number; index: number; option: string }>) => {
      const { id, index, option } = action.payload;

      if (!state.questionList) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionFormIndex].optionList;
      if (optionList && optionList.length > index) optionList[index] = option;
    },

    addOtherOption: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      if (!state.questionList) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      state.questionList[targetQuestionFormIndex].hasOtherOption = true;
    },

    deleteOtherOption: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      if (!state.questionList) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);
      state.questionList[targetQuestionFormIndex].hasOtherOption = false;
    },

    pasteQuestion: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      if (!state.questionList) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);

      const NEW_QUESTION: Question = {
        ...state.questionList[targetQuestionFormIndex],
        id: Math.max(...state.questionList.map((question) => question.id)) + 1,
      };

      state.questionList.splice(targetQuestionFormIndex, 0, NEW_QUESTION);
    },

    deleteQuestion: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      if (!state.questionList) return;

      const targetQuestionFormIndex = findTargetIndex(state.questionList, id);

      state.questionList.splice(targetQuestionFormIndex, 1);
    },

    toggleRequired: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const { questionList } = state;

      if (!questionList) return;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);
      const newIsRequired = !questionList[targetQuestionFormIndex].isRequired;

      questionList[targetQuestionFormIndex].isRequired = newIsRequired;

      if (questionList.some(({ isRequired }) => isRequired)) state.hasRequired = true;
      else state.hasRequired = false;
    },

    changeQuestionOrder: () => {},

    changeOptionOrder: () => {},

    storeAnswer: (state, action: PayloadAction<{ id: number; answer: string | null }>) => {
      const { id, answer } = action.payload;

      const { questionList } = state;

      if (!questionList || answer === null) return;

      const targetQuestionFormIndex = findTargetIndex(questionList, id);
      questionList[targetQuestionFormIndex].answer = answer;
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
  changeQuestionOrder,
  changeOptionOrder,
  storeAnswer,
} = formSlice.actions;

export default formSlice.reducer;

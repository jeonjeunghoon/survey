import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Question, QuestionType } from '../../types/question';

type FormState = {
  title: string;
  description: string;
  questionList: Question[] | null;
};

const INITIAL_QUESTION: Question = {
  id: 0,
  type: 'singleChoice',
  question: '제목없는 질문',
  optionList: ['옵션 1'],
  isRequired: false,
};

const initialState: FormState = {
  title: '제목 없는 설문지',
  description: '',
  questionList: [INITIAL_QUESTION],
};

const findTargetIndex = (questionList: Question[], id: number) =>
  questionList?.findIndex((question) => question.id === id);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    editTitle: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload;

      state.title = title;
    },
    editDescription: (state, action: PayloadAction<{ description: string }>) => {
      const { description } = action.payload;

      state.description = description;
    },
    addSingleChoiceQuestion: (state) => {
      const NEW_QUESTION: Question = {
        id: state.questionList
          ? Math.max(...state.questionList.map((question) => question.id)) + 1
          : 0,
        type: 'singleChoice',
        question: '',
        optionList: ['옵션 1'],
        isRequired: false,
      };

      if (!state.questionList) state.questionList = [NEW_QUESTION];
      else state.questionList.push(NEW_QUESTION);
    },
    editType: (state, action: PayloadAction<{ id: number; questionType: QuestionType }>) => {
      const { id, questionType } = action.payload;

      if (!state.questionList) return;

      const targetQuestionForm = findTargetIndex(state.questionList, id);

      const newQuestion = { ...state.questionList[targetQuestionForm], type: questionType };
      state.questionList[targetQuestionForm] = newQuestion;
    },
    editQuestion: (state, action: PayloadAction<{ id: number; question: string }>) => {
      const { id, question } = action.payload;

      if (!state.questionList) return;

      const targetQuestionForm = findTargetIndex(state.questionList, id);

      const parseQuestion = question.trim();
      const newQuestionForm = {
        ...state.questionList[targetQuestionForm],
        question: parseQuestion,
      };
      state.questionList[targetQuestionForm] = newQuestionForm;
    },
    addOption: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      if (!state.questionList) return;

      const targetQuestionForm = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionForm].optionList;
      optionList?.push(`옵션 ${optionList.length + 1}`);
    },
    deleteOption: (state, action: PayloadAction<{ id: number; index: number }>) => {
      const { id, index } = action.payload;

      if (!state.questionList) return;

      const targetQuestionForm = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionForm].optionList;
      optionList?.splice(index, 1);
    },
    editOption: (state, action: PayloadAction<{ id: number; index: number; option: string }>) => {
      const { id, index, option } = action.payload;

      if (!state.questionList) return;

      const targetQuestionForm = findTargetIndex(state.questionList, id);
      const optionList = state.questionList[targetQuestionForm].optionList;
      if (optionList) optionList[index] = option;
    },
    pasteQuestion: () => {},
    deleteQuestion: () => {},
    setRequired: () => {},
    changeQuestionOrder: () => {},
    changeOptionOrder: () => {},
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
  pasteQuestion,
  deleteQuestion,
  setRequired,
  changeQuestionOrder,
  changeOptionOrder,
} = formSlice.actions;

export default formSlice.reducer;

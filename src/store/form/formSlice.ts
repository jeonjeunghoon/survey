import { createSlice } from '@reduxjs/toolkit';
import { Question } from '../../types/question';

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

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
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
    editType: () => {},
    editQuestion: () => {},
    editOption: () => {},
    pasteQuestion: () => {},
    deleteQuestion: () => {},
    setRequired: () => {},
    changeQuestionOrder: () => {},
    changeOptionOrder: () => {},
  },
});

export const {
  addSingleChoiceQuestion,
  editType,
  editQuestion,
  editOption,
  pasteQuestion,
  deleteQuestion,
  setRequired,
  changeQuestionOrder,
  changeOptionOrder,
} = formSlice.actions;

export default formSlice.reducer;

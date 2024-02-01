import { useDispatch } from 'react-redux';

import { editType } from '../store/form/formSlice';
import { QuestionType } from '../types/question';
import { DropdownMenu } from '../types/dropdown';

type QuestionTypeSet = {
  default: Omit<DropdownMenu, 'handleClick'>;
  list: DropdownMenu[];
};

export const useQuestionTypeSet = (id: number) => {
  const dispatch = useDispatch();
  const handleClick = (selectedType: QuestionType) =>
    dispatch(editType({ id, questionType: selectedType }));
  const questionTypeSet: QuestionTypeSet = {
    default: {
      type: 'singleChoice',
      icon: null,
      text: '객관식 질문',
    },
    list: [
      {
        type: 'shortAnswer',
        icon: null,
        text: '단답형',
        handleClick,
      },
      {
        type: 'longAnswer',
        icon: null,
        text: '장문형',
        handleClick,
      },
      {
        type: 'singleChoice',
        icon: null,
        text: '객관식 질문',
        handleClick,
      },
      {
        type: 'checkbox',
        icon: null,
        text: '체크박스',
        handleClick,
      },
      {
        type: 'dropdown',
        icon: null,
        text: '드롭다운',
        handleClick,
      },
    ],
  };

  return questionTypeSet;
};

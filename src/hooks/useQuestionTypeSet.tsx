import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionTypeById } from '../store/form/selectors';
import { editType } from '../store/form/formSlice';

import { DropdownMenu } from '../types/dropdown';
import { QUESTION_TYPE } from '../constants/question';

import CheckboxIcon from '../assets/svg/checkbox.svg?react';
import CircleDotIcon from '../assets/svg/circle-dot.svg?react';
import DownArrowCircleIcon from '../assets/svg/down-arrow-circle.svg?react';
import GripLinesIcon from '../assets/svg/grip-lines.svg?react';
import LineColumnsIcon from '../assets/svg/line-columns.svg?react';

const TYPE_TABLE = {
  [QUESTION_TYPE.객관식질문]: { ICON: <CircleDotIcon />, TEXT: '객관식 질문' },
  [QUESTION_TYPE.단답형]: { ICON: <GripLinesIcon />, TEXT: '단답형' },
  [QUESTION_TYPE.장문형]: { ICON: <LineColumnsIcon />, TEXT: '장문형' },
  [QUESTION_TYPE.체크박스]: { ICON: <CheckboxIcon />, TEXT: '체크박스' },
  [QUESTION_TYPE.드롭다운]: { ICON: <DownArrowCircleIcon />, TEXT: '드롭다운' },
} as const;

export const useQuestionTypeSet = (id: number) => {
  const type = useSelector(selectQuestionTypeById(id));
  const dispatch = useDispatch();

  const defaultQuestionType: Omit<DropdownMenu, 'handleClick'> = {
    type,
    icon: TYPE_TABLE[type].ICON,
    text: TYPE_TABLE[type].TEXT,
  };

  const questionTypeList: DropdownMenu[] = [
    {
      type: QUESTION_TYPE.단답형,
      icon: TYPE_TABLE[QUESTION_TYPE.단답형].ICON,
      text: TYPE_TABLE[QUESTION_TYPE.단답형].TEXT,
      handleClick: () => dispatch(editType({ id, type: QUESTION_TYPE.단답형 })),
    },
    {
      type: QUESTION_TYPE.장문형,
      icon: TYPE_TABLE[QUESTION_TYPE.장문형].ICON,
      text: TYPE_TABLE[QUESTION_TYPE.장문형].TEXT,
      handleClick: () => dispatch(editType({ id, type: QUESTION_TYPE.장문형 })),
    },
    {
      type: QUESTION_TYPE.객관식질문,
      icon: TYPE_TABLE[QUESTION_TYPE.객관식질문].ICON,
      text: TYPE_TABLE[QUESTION_TYPE.객관식질문].TEXT,
      handleClick: () => dispatch(editType({ id, type: QUESTION_TYPE.객관식질문 })),
    },
    {
      type: QUESTION_TYPE.체크박스,
      icon: TYPE_TABLE[QUESTION_TYPE.체크박스].ICON,
      text: TYPE_TABLE[QUESTION_TYPE.체크박스].TEXT,
      handleClick: () => dispatch(editType({ id, type: QUESTION_TYPE.체크박스 })),
    },
    {
      type: QUESTION_TYPE.드롭다운,
      icon: TYPE_TABLE[QUESTION_TYPE.드롭다운].ICON,
      text: TYPE_TABLE[QUESTION_TYPE.드롭다운].TEXT,
      handleClick: () => dispatch(editType({ id, type: QUESTION_TYPE.드롭다운 })),
    },
  ];

  return { questionTypeList, defaultQuestionType };
};

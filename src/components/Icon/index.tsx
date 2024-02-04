import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { selectQuestionTypeById } from '../../store/form/selectors';

import { QUESTION_TYPE } from '../../constants/question';

import CircleIcon from '../../assets/svg/circle.svg?react';
import SquareIcon from '../../assets/svg/square.svg?react';

type Props = {
  id: number;
  index: number;
};

export default function Icon({ id, index }: Props) {
  const type = useSelector(selectQuestionTypeById(id));

  const OPTION_ICON_TABLE = {
    [QUESTION_TYPE.객관식질문]: <CircleIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.체크박스]: <SquareIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.드롭다운]: <S.DropdownIndex>{index}</S.DropdownIndex>,
  };

  return <>{OPTION_ICON_TABLE[type]}</>;
}

const S = {
  DropdownIndex: styled.p`
    font-size: 1.6rem;
  `,
};

import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { editOption } from '../../store/form/formSlice';

import { QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../constants/question';

import Input from '../common/Input';
import CircleIcon from '../../assets/svg/circle.svg?react';
import SquareIcon from '../../assets/svg/square.svg?react';

type Props = {
  id: number;
  type: QuestionType;
  text: string;
  index: number;
  fontColor?: string;
};

export default function FormOption({ id, type, text, index, fontColor = 'black' }: Props) {
  const dispatch = useDispatch();
  const OPTION_ICON_TABLE = {
    [QUESTION_TYPE.객관식질문]: <CircleIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.체크박스]: <SquareIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.드롭다운]: <S.DropdownIndex>{index + 1}</S.DropdownIndex>,
  };

  return (
    <S.Option>
      <S.Head>{OPTION_ICON_TABLE[type]}</S.Head>
      <Input
        initialValue={text}
        fontColor={fontColor}
        handleInputChange={(value: string) => dispatch(editOption({ id, index, option: value }))}
      />
    </S.Option>
  );
}

const S = {
  Option: styled.div`
    display: flex;
    justify-content: start;
    gap: 12px;
    flex: 1;
  `,

  Head: styled.div`
    margin: auto 0;
  `,

  Text: styled.p<{ fontColor: string }>`
    font-size: 1.6rem;
    color: ${({ fontColor }) => fontColor};
  `,

  DropdownIndex: styled.p`
    font-size: 1.6rem;
  `,
};

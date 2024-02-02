import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { editOption } from '../../store/form/formSlice';

import { QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

import Input from '../common/Input';
import CircleIcon from '../../assets/svg/circle.svg?react';
import SquareIcon from '../../assets/svg/square.svg?react';

type Props = {
  id: number;
  type: QuestionType;
  text: string;
  index: number;
  isEdit?: boolean;
  fontColor?: string;
};

export default function Option({
  id,
  type,
  text,
  index,
  isEdit = false,
  fontColor = 'black',
}: Props) {
  const table = {
    [QUESTION_TYPE.객관식질문]: <CircleIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.체크박스]: <SquareIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.드롭다운]: <S.DropdownIndex>{index + 1}</S.DropdownIndex>,
  };
  const dispatch = useDispatch();

  return (
    <S.Option>
      <S.Head>{table[type]}</S.Head>
      {isEdit ? (
        <Input
          initialValue={text}
          fontColor={fontColor}
          handleInputChange={(value: string) => dispatch(editOption({ id, index, option: value }))}
          autoFocus
        />
      ) : (
        <S.Text fontColor={fontColor}>{text}</S.Text>
      )}
    </S.Option>
  );
}

const S = {
  Option: styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
  `,

  Head: styled.div``,

  Text: styled.p<{ fontColor: string }>`
    font-size: 1.6rem;
    color: ${({ fontColor }) => fontColor};
  `,

  DropdownIndex: styled.p`
    font-size: 1.6rem;
  `,
};

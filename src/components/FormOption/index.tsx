import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { editOption } from '../../store/form/formSlice';
import { selectQuestionById } from '../../store/form/selectors';

import Input from '../common/Input';
import Icon from '../Icon';

type Props = {
  id: number;
  index: number;
  text?: string;
  fontColor?: string;
  disabled?: boolean;
};

export default function FormOption({
  id,
  index,
  text,
  fontColor = 'black',
  disabled = false,
}: Props) {
  const question = useSelector(selectQuestionById(id));
  const dispatch = useDispatch();

  return (
    <S.Option>
      <S.Head>
        <Icon id={id} index={index + 1} />
      </S.Head>
      <Input
        initialValue={text ?? question}
        fontColor={fontColor}
        handleInputChange={(value: string) => dispatch(editOption({ id, index, option: value }))}
        disabled={disabled}
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

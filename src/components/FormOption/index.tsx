import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { editOption } from '../../store/form/formSlice';

import Input from '../common/Input';
import Icon from '../Icon';
import { isFocusSelectorById } from '../../store/form/selectors';

type Props = {
  id: number;
  option: string;
  index: number;
  fontColor?: string;
  disabled?: boolean;
};

export default function FormOption({
  id,
  option,
  index,
  fontColor = 'black',
  disabled = false,
}: Props) {
  const dispatch = useDispatch();
  const isFocus = useSelector(isFocusSelectorById(id));

  return (
    <S.Option>
      <S.Head>
        <Icon id={id} index={index + 1} />
      </S.Head>
      <Input
        initialValue={option}
        fontColor={fontColor}
        handleInputChange={(value: string) => dispatch(editOption({ id, index, option: value }))}
        disabled={disabled}
        hasHover={isFocus}
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

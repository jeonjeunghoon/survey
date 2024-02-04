import styled from '@emotion/styled';

import { useOtherOption } from '../../hooks/useOtherOption';

import Input from '../common/Input';

type Props = {
  id: number;
};

export default function OtherOption({ id }: Props) {
  const { hasOtherOption, otherOption, changeOtherOption } = useOtherOption(id);

  if (!hasOtherOption) return null;

  return (
    <>
      <S.Text>기타:</S.Text>
      <Input initialValue={otherOption} handleInputChange={changeOtherOption} />
    </>
  );
}

const S = {
  Text: styled.p`
    font-size: 1.6rem;
  `,
};

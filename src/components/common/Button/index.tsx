import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren & ComponentPropsWithoutRef<'button'>;

export default function Button({ children, ...rest }: Props) {
  return <S.Button {...rest}>{children}</S.Button>;
}

const S = {
  Button: styled.button``,
};

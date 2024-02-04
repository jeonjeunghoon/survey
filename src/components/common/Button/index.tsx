import { ComponentPropsWithoutRef } from 'react';

import styled from '@emotion/styled';

export default function Button({ children, ...rest }: ComponentPropsWithoutRef<'button'>) {
  return <S.Button {...rest}>{children}</S.Button>;
}

const S = {
  Button: styled.button`
    &:disabled {
      cursor: default;
      color: black;
    }
  `,
};

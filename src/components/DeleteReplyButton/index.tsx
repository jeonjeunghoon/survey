import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { deleteReplies } from '../../store/form/formSlice';

import Button from '../common/Button';

export default function DeleteReplyButton() {
  const dispatch = useDispatch();

  const deleteReply = () => dispatch(deleteReplies());

  return (
    <Button onClick={deleteReply}>
      <S.Text>양식 지우기</S.Text>
    </Button>
  );
}

const S = {
  Text: styled.p`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
  `,
};

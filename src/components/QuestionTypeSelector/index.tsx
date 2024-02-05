import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { isFocusSelectorById } from '../../store/form/selectors';

import { useQuestionTypeSet } from '../../hooks/useQuestionTypeSet';

import Dropdown from '../common/Dropdown';

type Props = {
  id: number;
};

export default function QuestionTypeSelector({ id }: Props) {
  const isFocus = useSelector(isFocusSelectorById(id));
  const { questionTypeList, defaultQuestionType } = useQuestionTypeSet(id);

  if (!isFocus) return null;

  return (
    <S.DropdownWrapper>
      <Dropdown dropdownMenuList={questionTypeList} defaultMenu={defaultQuestionType} />
    </S.DropdownWrapper>
  );
}

const S = {
  DropdownWrapper: styled.div`
    width: 208px;
  `,
};

import styled from '@emotion/styled';

import { useQuestionTypeSet } from '../../hooks/useQuestionTypeSet';

import Dropdown from '../common/Dropdown';

type Props = {
  id: number;
};

export default function QuestionTypeSelector({ id }: Props) {
  const { questionTypeList, defaultQuestionType } = useQuestionTypeSet(id);

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

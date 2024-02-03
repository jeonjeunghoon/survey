import styled from '@emotion/styled';

import { useQuestionTypeSet } from '../../hooks/useQuestionTypeSet';

import Dropdown from '../common/Dropdown';
import { QuestionType } from '../../types/question';

type Props = {
  id: number;
  type: QuestionType;
};

export default function QuestionTypeSelector({ id, type }: Props) {
  const { questionTypeList, defaultQuestionType } = useQuestionTypeSet(id, type);

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

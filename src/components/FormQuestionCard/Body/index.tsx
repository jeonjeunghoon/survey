import { isRenderAnswer } from '../../../constants/option';
import { QuestionType } from '../../../types/question';

import FormAnswer from '../../FormAnswer';
import FormOptionSection from '../../FormOptionSection';

type Props = {
  id: number;
  type: QuestionType;
  optionList: string[] | null;
  hasOtherOption: boolean;
};

export default function Body({ id, type, optionList, hasOtherOption }: Props) {
  return (
    <>
      {isRenderAnswer(type) ? (
        <FormAnswer type={type} />
      ) : (
        <FormOptionSection
          id={id}
          type={type}
          optionList={optionList}
          hasOtherOption={hasOtherOption}
        />
      )}
    </>
  );
}

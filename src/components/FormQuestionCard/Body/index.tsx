import { isRenderAnswer } from '../../../constants/option';
import { Question } from '../../../types/question';

import FormAnswer from '../../FormAnswer';
import FormOptionSection from '../../FormOptionSection';

export default function Body({
  id,
  type,
  optionList,
  hasOtherOption,
}: Omit<Question, 'question' | 'answer' | 'isRequired'>) {
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

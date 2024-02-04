import { isRenderAnswer } from '../../../constants/option';
import { Question } from '../../../types/question';
import AddOption from '../../AddOption';

import FormAnswer from '../../FormAnswer';
import FormOptionList from '../../FormOptionList';

export default function Body({ id, type }: Omit<Question, 'question' | 'answer' | 'isRequired'>) {
  return (
    <>
      {isRenderAnswer(type) ? (
        <FormAnswer type={type} />
      ) : (
        <>
          <FormOptionList id={id} />
          <AddOption id={id} />
        </>
      )}
    </>
  );
}

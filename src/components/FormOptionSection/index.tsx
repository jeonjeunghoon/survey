import FormOptionList from '../FormOptionList';
import AddOption from '../AddOption';
import { QuestionType } from '../../types/question';

type Props = {
  id: number;
  type: QuestionType;
  optionList: string[] | null;
  hasOtherOption: boolean;
};

export default function FormOptionSection({ id, type, optionList, hasOtherOption }: Props) {
  if (!optionList) return;

  return (
    <>
      <FormOptionList id={id} type={type} optionList={optionList} hasOtherOption={hasOtherOption} />
      <AddOption id={id} type={type} index={optionList.length} hasOtherOption={hasOtherOption} />
    </>
  );
}

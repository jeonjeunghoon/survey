import { QuestionType } from '../../types/question';

import Option from '../Option';

type Props = {
  type: QuestionType;
  optionList: string[] | null;
};

export default function OptionList({ type, optionList }: Props) {
  return (
    <ul>
      {optionList?.map((option, index) => (
        <Option key={option} type={type} text={option} index={index} />
      ))}
    </ul>
  );
}

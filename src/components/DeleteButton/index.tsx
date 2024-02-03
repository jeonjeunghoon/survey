import XSymbolIcon from '../../assets/svg/x-symbol.svg?react';
import Button from '../common/Button';

type Props = {
  handleButtonClick: () => void;
};

export default function DeleteButton({ handleButtonClick }: Props) {
  return (
    <Button onClick={handleButtonClick}>
      <XSymbolIcon width='16px' height='16px' />
    </Button>
  );
}

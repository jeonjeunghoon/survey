import { useDisabled } from '../../hooks/useDisabled';
import { useViewformDropdownOption } from '../../hooks/useViewformDropdownOption';

import Dropdown from '../common/Dropdown';

type Props = {
  id: number;
};

export default function ViewformDropdown({ id }: Props) {
  const { defaultOption, dropdownOptionList } = useViewformDropdownOption(id);
  const isDisabled = useDisabled();

  return (
    <Dropdown
      dropdownMenuList={dropdownOptionList}
      defaultMenu={defaultOption}
      disabled={isDisabled}
    />
  );
}

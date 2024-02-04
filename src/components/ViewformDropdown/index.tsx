import { useViewformDropdownOption } from '../../hooks/useViewformDropdownOption';

import Dropdown from '../common/Dropdown';

type Props = {
  id: number;
  disabled?: boolean;
};

export default function ViewformDropdown({ id, disabled }: Props) {
  const { defaultOption, dropdownOptionList } = useViewformDropdownOption(id);

  return (
    <Dropdown
      dropdownMenuList={dropdownOptionList}
      defaultMenu={defaultOption}
      disabled={disabled}
    />
  );
}

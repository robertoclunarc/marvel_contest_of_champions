import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "All" },
    { value: "Mystic", label: "Mystic" },
    { value: "Mutant", label: "Mutant" },
    { value: "Science", label: "Science" },
    { value: "Skill ", label: "Skill " },
    { value: "Tech", label: "Tech" },
    { value: "Cosmic", label: "Cosmic" },
    { value: "Combined", label: "Combined" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'All'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { IDamage, ILuchadoresConInmunidades } from "../hooks/useGames";
import useInmunizados from "../hooks/usePlatforms";

interface Props { 
  onSelectPlatform: (danos: IDamage) => void;
  selectedPlatform: IDamage | null;
}

const DamageSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = useInmunizados();
  console.log(data);
  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.damage || 'Immunity'}
      </MenuButton>
      <MenuList>
        {data.map(danos => <MenuItem onClick={() => onSelectPlatform(danos)} key={danos.iddamage}>{danos.damage}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default DamageSelector;

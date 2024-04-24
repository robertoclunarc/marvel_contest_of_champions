import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { IDamage } from "../hooks/useGames";
import useInmunizados from "../hooks/usePlatforms";
import { IDamageXluchadores } from "../models/luchadores.interface";

interface Props { 
  onSelectPlatform: (danos: IDamageXluchadores) => void;
  selectedPlatform: IDamageXluchadores | null;
}

const DamageSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = useInmunizados();
  //console.log(data);
  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.damage || 'Inmunidad'}
      </MenuButton>
      <MenuList>
        {data.map(danos => <MenuItem onClick={() => onSelectPlatform(danos)} key={danos.iddamage}>{danos.damage}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default DamageSelector;

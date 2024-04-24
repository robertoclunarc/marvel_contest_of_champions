import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const handleLogoClick = () => {
    window.location.reload(); // Recargar la página
  };

  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' cursor='pointer' title='Marvel Constest Champions (Inicio)'  onClick={handleLogoClick} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from "@chakra-ui/react";
import { IDamage, Iinmunes } from "../hooks/useGames";
import { IconType } from "react-icons";
import { ILuchador } from "../hooks/useluchadores";

interface Props {
  danos: IDamage[];
}

const PlatformIconList = ({ danos = [] }: Props) => {
  //console.log(danos);
  const iconMap: { [key: string]: IconType } = { 
    Hemorragia: FaWindows,
    Envenenamiento: FaPlaystation,
    Incineracion: FaXbox,
    Congelacion: SiNintendo,
    Electrificacion: FaApple,
    Degeneracion: FaLinux, 
    Roptura: FaAndroid,
    Mejoras: MdPhoneIphone,
    'Destruccion de Armadura': BsGlobe,
    'Control Mental': BsGlobe,
    'Bloqueo Curacion': BsGlobe,
    'Drenaje/Quemapoderes': BsGlobe,
    Represion: BsGlobe,
    Entorpecimiento: BsGlobe,
  }

  return (
    <HStack marginY={1}> 
      {danos.map((dn) => (
        <Icon key={dn.iddamage} as={iconMap[dn.damage]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;

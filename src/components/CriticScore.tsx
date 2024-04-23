import { Badge } from '@chakra-ui/react';

interface Props { 
  score: string;
  clase: number;
}

const CriticScore = ({ score, clase }: Props) => {
  //let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  let color =  'white';
  switch(clase) {
    case 1:
      color =  'purple';
      break;
    case 2:
      color =  'yellow';
      break;
    case 3:
      color =  'green';
      break;
    case 4:
    color =  'red';
      break;
    case 5:
      color =  'blue';
      break;
    case 6:
      color =  'cyan';
      break;  
    default:
      color =  'white';
  }

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore
//import bullsEye from '../assets/bulls-eye.webp';
import mystic from "../assets/mistic.png";
import mutant from "../assets/mutant.png";
import science from "../assets/science.png";
import skill from "../assets/skill.png";
import tech from "../assets/tech.png";
import cosmic from "../assets/cosmic.png";
import combined from "../assets/combined.png";
//import thumbsUp from '../assets/thumbs-up.webp';
//import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  //if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    //3: { src: meh, alt: 'meh', boxSize: '25px' },
    //4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    //5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
    1: { src: mystic, alt: 'Mystic', boxSize: '25px' },
    2: { src: mutant, alt: 'Mutant', boxSize: '25px' },
    3: { src: science, alt: 'Science', boxSize: '25px' },
    4: { src: skill, alt: 'Skill', boxSize: '25px' },
    5: { src: tech, alt: 'Tech', boxSize: '25px' },
    6: { src: cosmic, alt: 'Cosmic', boxSize: '35px' },
    7: { src: combined, alt: 'Combined', boxSize: '25px' },
  }

  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji

import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IDamage, Iinmunes } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'
import { ILuchador } from '../models/luchadores.interface'

interface Props {
  game: Iinmunes
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQX5fX4Dppwil8MZPYPx7d4v1rjfN6bl-hNA&s")} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList danos={game.luchadoresInmunes?.map(p => p.luchadores)} />
          <CriticScore score={game.iddamage} />
        </HStack>
        <Heading fontSize='2xl'>{game.damage}<Emoji rating={5}/></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard

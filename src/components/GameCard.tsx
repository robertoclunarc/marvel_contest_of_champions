
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IDamage, Iinmunes, ILuchadoresConInmunidades } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'
import { ILuchador } from '../hooks/useluchadores'

interface Props {
  personaje: ILuchadoresConInmunidades
}

const GameCard = ({ personaje }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(personaje.luchador.image_background)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList danos={personaje.parentInmunidades?.map(p => p.inmune)} />
          <CriticScore score={personaje.luchador.date_release} clase={personaje.luchador.fkclase} />
        </HStack>
        <Heading fontSize='1xl'>{personaje.luchador.nombre}<Emoji rating={personaje.luchador.fkclase}/></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard

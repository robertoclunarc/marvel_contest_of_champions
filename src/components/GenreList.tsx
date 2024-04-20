import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useLuchadores, { ILuchador } from "../hooks/useluchadores";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: ILuchador) => void;
  selectedGenre: ILuchador | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useLuchadores();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Luchadores
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.idluchador} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background || '')}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.idluchador === selectedGenre?.idluchador ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="md"
                variant="link"
              >
                {genre.nombre}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'Api/Api';

import {
  ListWrapper,
  StyledList,
  ListItem,
  ActorProfile,
  AbouParagraph,
} from './castPage.styled';

const CastPage = () => {
  const [cost, setCost] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId)
      .then(({ cast }) => setCost(cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ListWrapper>
      <StyledList>
        {cost?.map(({ profile_path, name, character, id }) => (
          <ListItem key={id}>
            <ActorProfile
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6fijGUoLDhRPSMKNcGwIodoh2rzVOd3Rhw&usqp=CAU`
              }
              alt={name}
              width="100px"
            />
            <AbouParagraph>{name}</AbouParagraph>
            <AbouParagraph>{character}</AbouParagraph>
          </ListItem>
        ))}
      </StyledList>
    </ListWrapper>
  );
};

export default CastPage;

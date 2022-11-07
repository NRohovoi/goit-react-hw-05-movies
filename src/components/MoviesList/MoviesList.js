import {
  List,
  ListItem,
  ImageWrapper,
  Image,
  ListLink,
  VoteImage,
} from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ popularMovies }) => {
  return (
    <List>
      {popularMovies.map(el => (
        <ListItem key={el.id} id={el.id}>
          <ListLink to={`/movies/${el.id}`}>
            <ImageWrapper>
              {' '}
              <Image
                src={
                  el.poster_path
                    ? `https://image.tmdb.org/t/p/original${el.poster_path}`
                    : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000`
                }
                alt=""
                width={350}
              />
            </ImageWrapper>
            {el.title}
            <VoteImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png"
              alt="star"
              width="20px"
              style={{ display: 'inline-block' }}
            />{' '}
            {el.vote_average}/10
          </ListLink>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  popularMovies: PropTypes.array,
};

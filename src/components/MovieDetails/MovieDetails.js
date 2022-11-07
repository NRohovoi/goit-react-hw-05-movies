import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieForId } from 'Api/Api';

import {
  Main,
  MovieDetalisWrapper,
  MovieNamed,
  Vote,
  OverviewWrapper,
  GenresWrapper,
  Title,
  Poster,
  AditionalWrapper,
  StyledDiv,
  NavLinkStyled,
  BackSvg,
  ImageWrapper,
} from './movieDetails.styled.js';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieForId(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      {movie && (
        <Main>
          <NavLinkStyled to="/">
            <BackSvg />
            Back
          </NavLinkStyled>
          <MovieDetalisWrapper>
            <ImageWrapper>
              <Poster
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : `https://i.pinimg.com/736x/d6/02/31/d60231b361afca9e713a920ca03bf4a6.jpg`
                }
                alt=""
                width="350"
              />
            </ImageWrapper>
            <StyledDiv>
              <MovieNamed>{movie.original_title}</MovieNamed>
              <Vote>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png"
                  alt="star"
                  width="20px"
                  style={{ display: 'inline-block' }}
                />{' '}
                {movie.vote_average}/10
              </Vote>
              <OverviewWrapper>
                <Title>Overview</Title>
                <p>{movie.overview}</p>
              </OverviewWrapper>
              <GenresWrapper>
                <Title>Genres</Title>
                <ul>
                  {movie.genres.map(({ name }, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </GenresWrapper>

              <AditionalWrapper>
                <Title>Aditional information</Title>
                <NavLinkStyled to={`cast`}>Cast</NavLinkStyled>
                <NavLinkStyled to={`reviews`}>Reviews</NavLinkStyled>
              </AditionalWrapper>
            </StyledDiv>
          </MovieDetalisWrapper>
          <Outlet />
        </Main>
      )}
    </>
  );
}

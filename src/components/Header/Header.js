import {
  NavLinkStyled,
  StyledHeader,
  HomeSvg,
  MoviesSvg,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <NavLinkStyled to="/">
            <HomeSvg />
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">
            <MoviesSvg />
            Movies
          </NavLinkStyled>
        </nav>
      </StyledHeader>
    </>
  );
};

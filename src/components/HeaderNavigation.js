import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import styled from 'styled-components';

export default function HeaderNavigation() {
  return (
    <NavContainer>
      <NavLink exact to="../pages/">
        Home
      </NavLink>
      <NavLink to="../pages/characters">Characters</NavLink>
      <NavLink to="../pages/FavoriteChars">Favorites</NavLink>
      <NavLink to="../pages/episodes">Episodes</NavLink>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  gap: 0.3rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  width: 330px;

  a {
    text-decoration: none;
    /* color: white; */
    font-size: 1rem;
    background-image: linear-gradient(
      to right,
      #16a085 0%,
      #f4d03f 51%,
      #16a085 100%
    );
    /* margin: 10px; */
    padding: 0.3rem;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    /* box-shadow: 0 0 20px #eee; */
    border-radius: 10px;
    display: block;
  }

  a:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

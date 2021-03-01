import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import saveToLocal from '../lib/saveToLocal';
import Button from '../components/Button';
import Cards from '../components/Cards.js';
import Search from '../components/Search';
import loadFromLocal from '../lib/loadFromLocal';

export default function Characters() {
  const [cardInfos, setCardInfos] = useState([]);
  const [isHuman, setIsHuman] = useState([]);
  const [isAlien, setIsAlien] = useState([]);
  const [query, setQuery] = useState('');
  const [isChecked, setIsChecked] = useState(
    loadFromLocal('favoriteChars') ?? []
  );
  //  Query in Fetch einfügen und neuen useState anlegen

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const characters = result.data.results.map((item) => ({
        id: item.id,
        name: item.name,
        species: item.species,
        origin: item.origin.name,
        image: item.image,
      }));
      console.log(result.data.results);
      setCardInfos(characters);
      console.log(characters);
    };
    fetchItems();
  }, [query]);

  useEffect(() => {
    saveToLocal('favoriteChars', isChecked);
  }, [isChecked]);

  //   loadFromLocal('Characters');

  // Wenn der Wert query geändert wird, wird der useEffect ausgelöst
  function toggleCheckbox(idToToggle) {
    const favouriteCard = cardInfos.filter((card) => card.id === idToToggle);

    setIsChecked([...isChecked, ...favouriteCard]);

    /* saveToLocal('favoriteChars', isChecked); */
  }

  function showAll() {
    setIsHuman([]);
    setIsAlien([]);
    setCardInfos(cardInfos);
  }

  function showHumans() {
    const humans = cardInfos.filter(
      (currywurst) => currywurst.species === 'Human'
    );
    setIsHuman(humans);
    setIsAlien([]);
  }

  function showAliens() {
    const alien = cardInfos.filter(
      (currywurst) => currywurst.species === 'Alien'
    );
    setIsAlien(alien);
    setIsHuman([]);
  }

  let data;
  let oldAlienData = cardInfos.filter(
    (currywurst) => currywurst.species === 'Alien'
  );
  let oldHumanData = cardInfos.filter(
    (currywurst) => currywurst.species === 'Human'
  );

  if (isHuman.length > 0) {
    data = isHuman;
  } else if (isAlien.length > 0) {
    data = isAlien;
  } else if (isHuman.length === 0 && isAlien.length !== 0) {
    data = oldHumanData;
  } else if (isAlien.length === 0 && isHuman.length !== 0) {
    data = oldAlienData;
  } else {
    data = cardInfos;
  }

  return (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <ButtonWrapper>
        <Button text="Filter Humans" currywurstFunktion={showHumans} />
        <Button text="Filter Aliens" currywurstFunktion={showAliens} />
        <Button text="Show All" currywurstFunktion={showAll} />
      </ButtonWrapper>

      {data.map(
        ({
          name,
          species,
          origin,
          image,
          id,
          isFavorite,
          onChangeFunction,
        }) => (
          <Cards
            key={id}
            name={name}
            species={species}
            origin={origin}
            image={image}
            onChangeFunction={() => toggleCheckbox(id)}
          />
        )
      )}
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.3rem;
  height: 30px;
  border-radius: 10px;
  width: 330px;
`;

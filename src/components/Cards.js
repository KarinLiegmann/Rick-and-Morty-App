import React from 'react';
import styled from 'styled-components';
import card_background from '../img/card_background.jpg';
import Button from './Button';
import { useState } from 'react';
import CharDetails from './CharDetails';
import PropTypes from 'prop-types';
import FavoriteCheckBox from './FavoriteCheckBox';

export default function Cards({
  name,
  species,
  origin,
  image,
  text,
  onClickFunction,
  isFavorite,
  onChangeFunction,
}) {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  function toggleDetails() {
    setIsShowingDetails(!isShowingDetails);
  }

  return (
    <CardWrapper>
      <CheckboxWrapper>
        <FavoriteCheckBox onChangeFunction={onChangeFunction} />
      </CheckboxWrapper>
      <ImageWrapper src={image} alt="this is {name}" />
      <TitleWrapper>
        <h2>{name}</h2>
        <CharDetails
          species={species}
          origin={origin}
          details={isShowingDetails}
        />
        <Button
          onClickFunction={toggleDetails}
          text={isShowingDetails ? 'Hide Details' : 'Show More'}
        />
      </TitleWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: black solid 1px;
  background-image: url(${card_background});
  background-size: cover;

  color: white;
  border-radius: 10px;
  padding: 1rem;
  /* margin-left: 10%;
  margin-right: 10%; */
  width: 330px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const ImageWrapper = styled.img`
  border-radius: 10px;
  width: 250px;
`;

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(48, 142, 10, 0.2);
  margin-top: 1rem;
  padding: 1rem;
  width: 330px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
`;

Cards.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  image: PropTypes.string,
};

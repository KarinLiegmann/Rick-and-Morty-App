import React from 'react';
import styled from 'styled-components';
import episode_background from '../img/episode_background.png';

export default function EpisodeCards({ number, name, air_date }) {
  return (
    <EpisodeWrapper>
      <OpacityContainer>
        <h3>
          Episode {number}: {name}
        </h3>
      </OpacityContainer>
    </EpisodeWrapper>
  );
}

const EpisodeWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${episode_background});
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  color: white;
  margin-bottom: 0.5rem;
  width: 330px;
  height: 190px;
`;

const OpacityContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; */
`;

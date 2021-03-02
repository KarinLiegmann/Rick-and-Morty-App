import PropTypes from 'prop-types';

import styled from 'styled-components';

import React from 'react';

export default function Button({ text, onClickFunction }) {
  return (
    <ButtonStyler>
      <button onClick={onClickFunction}>{text}</button>
    </ButtonStyler>
  );
}

const ButtonStyler = styled.div`
  button {
    border: none;
    text-decoration: none;
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
    border-radius: 10px;
    display: block;
  }
  button:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  currywurstFunktion: PropTypes.func,
};

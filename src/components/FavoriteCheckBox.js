import React, { useState } from 'react';
import styled from 'styled-components';

export default function FavoriteCheckBox({ onChangeFunction, Cards }) {
  return (
    <Wrapper>
      <p>Favorite</p>
      <label>
        {' '}
        <>
          <input type="checkbox" onChange={onChangeFunction} />
          <span></span>
        </>
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1.5rem;
  gap: 0.4rem;
  width: 300px;

  p {
    font-size: 0.7rem;
  }

  input {
    visibility: hidden;
    position: absolute;
  }

  span {
    width: 30px;
    height: 15px;
    background-color: #828080;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    display: block;
    transition: 500ms;
  }

  span:before {
    content: '';
    width: 16px;
    height: 16px;
    background: #fff;
    /* left: 0;
    top: -1; */
    border-radius: 50%;
    position: absolute;
    transition: 500ms;
    box-shadow: 0px 1px 3px #111;
  }

  input[type='checkbox']:checked ~ span {
    background: rgba(4, 165, 186, 1);
  }

  input[type='checkbox']:checked ~ span:before {
    transform: translateX(20px);
  }
`;

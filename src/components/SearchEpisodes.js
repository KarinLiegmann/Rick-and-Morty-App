import React, { useState } from 'react';
import styled from 'styled-components';

const SearchEpisodes = ({ getQuery }) => {
  //1. Dem Inputfeld einen State zuweisen
  const [text, setText] = useState('');

  const onChange = (q) => {
    //5. q steht für den Value unten (was immer auch getippt wird)
    setText(q); //6. setText wird trotzdem aufgerufen nach der Änderung
    getQuery(q); //7. diese Funktion wird als Prop in der App.js zu "Search hinzugefügt"
    //diese Prop "getQuery" wir anschließend oben in die Funktion Search() eingefügt
  };

  return (
    <SectionWrapper>
      <Formstyler>
        <Inputstyler
          type="text"
          placeholder="Search for Episode"
          value={text} //text von useState s.o.
          onChange={(e) => onChange(e.target.value)}
          // 2. Wird beim tippen ausgelöst und der Wert in der Klammer geht in Value
          // 3. Query in Fetch einfügen und neuen useState anlegen
          // 4. onChange war zurvor setText(e.target.value), zum hochreichen zur App.js
          // wird oben eine Funktion "const onChange" angelegt
          autoFocus
        />
      </Formstyler>
    </SectionWrapper>
  );
};

export default SearchEpisodes;

const Inputstyler = styled.input`
  width: 330px; /*
  border: none;
  background-color: limegreen;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  text-align: center; */
`;

const Formstyler = styled.form`
  input {
    border: none;
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
  input:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  input:focus {
    outline: none;
  }
`;

const SectionWrapper = styled.section`
  /* color: white; */
`;

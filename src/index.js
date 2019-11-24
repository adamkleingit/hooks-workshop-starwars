import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Details } from "./details";

const characters = [
  "Luke Skywalker",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Leia Organa",
  "Owen Lars",
  "Obi-Wan Kenobi"
];

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(1);
  const [anotherStateVar, setAnotherStateVar] = useState(2);

  const selectCharacter = e => {
    setSelectedCharacterId(e.target.value);
  };

  return (
    <div>
      <select value={selectedCharacterId} onChange={selectCharacter}>
        {characters.map((name, index) => (
          <option value={index + 1} key={name}>
            {name}
          </option>
        ))}
      </select>
      <Details id={selectedCharacterId} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

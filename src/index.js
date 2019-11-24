import React from "react";
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

class App extends React.Component {
  state = {
    selectedCharacterId: 1,
    anotherStateVar: 2
  };

  selectCharacter = e => {
    this.setState({ selectedCharacterId: e.target.value });
  };

  render() {
    const { selectedCharacterId } = this.state;

    return (
      <div>
        <select value={selectedCharacterId} onChange={this.selectCharacter}>
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

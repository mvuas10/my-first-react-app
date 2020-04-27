import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon.js";

const all_pokemon = [
  {
    name: "Charizardx",
    weight: "90",
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },

  {
    name: "Bulbasaur",
    weight: "6.9",
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },

  {
    name: "Mewtwo",
    weight: "122",
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },

  {
    name: "Mega beedrill",
    weight: "65",
    awesome: true,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <div className="page-content my-5">
        <div className="test mx-5">
          <main>
            <Title content="Pokemon, I choose you!" />
            <div className="mb-4"></div>
            <div className="row">
              {all_pokemon.map((pokemon) => (
                <div className="col-md-6 col-lg-4">
                  <Pokemon
                    name={pokemon.name}
                    weight={pokemon.weight}
                    awesome={pokemon.awesome}
                    terrifying={pokemon.terrifying}
                    abilities={pokemon.abilities}
                  />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur
        </a>
        <br></br>
        <a>Learn more</a>
      </header>
    </div>
  );
}

export default App;

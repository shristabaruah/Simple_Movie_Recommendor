import React, { useState } from "react";
import "./styles.css";

var osDB = {
  scifi: [
    {
      property: "Inception",
      rating: "Director: Christopher Nolan || 4.5/5",
      description:
        "Description:A troubled thief who extracts secrets from people's dreams takes one last job: leading a dangerous mission to plant an idea in a target's subconscious.    "
    },
    {
      property: "Blade Runner",
      rating:
        "Director: Luke Scott, Shinichirō Watanabe, Denis Villeneuve, Ridley Scott || 4.5/5",
      description:
        " Description: Harrison Ford stars in this fascinating, dark vision of the near future as a policeman who tracks engineered humans--a Blade Runner."
    }
  ],

  RomCom: [
    {
      property: "Proposal",
      rating: " Director:  Anne Fletcher || 3.5/5",
      description:
        "Description: The Proposal is a movie about a couple who start out hating each other and end up liking each other."
    },
    {
      property: "Blended",
      rating: " Director:Frank Coraci || 4.5/5",
      description:
        "Description: After a bad blind date, a man and woman find themselves stuck together at a resort for families, where their attraction grows as their respective kids benefit from the burgeoning relationship."
    }
  ],
  Action: [
    {
      property: "Avenger",
      rating: "Director: Joss Whedon || 5/5",
      description:
        "Description: Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
      property: "Bad boys",
      rating: "Director:Michael Bay || 3/5",
      description:
        "Description: Two hip detectives protect a witness to a murder while investigating a case of stolen heroin from the evidence storage room from their police precinct."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h3> Movie Recommendor</h3>
      <p>Checkout Movie Recommendor. Select a genre to get started!</p>
      <div>
        {Object.keys(osDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {osDB[selectedGenre].map((mov) => (
            <li
              key={mov.property}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {mov.property} </div>
              <div style={{ fontSize: "larger" }}> {mov.rating} </div>
              <div style={{ fontSize: "smaller" }}>{mov.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

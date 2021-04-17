import React, { useState } from "react";
import "./styles.css";

var osDB = {
  scifi: [
    { property: "Inception", rating: "4.5/5" },
    { property: "Blade Runner", rating: "4.5/5" }
  ],

  RomCom: [
    {
      property: "Proposal",
      rating: "3.5/5"
    },
    {
      property: "Blended",
      rating: "4.5/5"
    }
  ],
  Action: [
    {
      property: "Avenger",
      rating: "5/5"
    },
    {
      property: "Bad boys",
      rating: "3/5"
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
              <div style={{ fontSize: "smaller" }}> {mov.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

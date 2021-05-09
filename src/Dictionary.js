import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus="on" onChange={handleWordChange} />
      </form>
    </div>
  );
}

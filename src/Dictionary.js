import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search() {
    //DOCUMENTATION: https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="search"
              autoFocus="on"
              defaultValue={props.defaultWord}
              onChange={handleWordChange}
            />
          </form>
          <div className="hint">
            <em>example:</em> sunset, ocean, nature, ...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

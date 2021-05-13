import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        Synonyms:
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </span>
    );
  } else {
    return null;
  }
}

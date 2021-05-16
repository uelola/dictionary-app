import React from "react";
import "./Results.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        <em>example: </em>
        {props.example}
      </div>
    );
  } else {
    return null;
  }
}

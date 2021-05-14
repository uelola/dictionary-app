import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        <em>example: </em>
        {props.example}
      </div>
    );
  }
}

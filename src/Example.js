import React from "react";

export default function Example(props) {
  if (props.example) {
    return <em>example: {props.example}</em>;
  }
}

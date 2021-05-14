import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import "./Phonetics.css";

export default function Phonetics(props) {
  const audio = new Audio(props.phonetic.audio);
  const playSound = (audioFile) => {
    audioFile.play();
  };

  return (
    <div className="Phonetics">
      <VolumeUpIcon
        className="icon"
        fontSize="large"
        style={{ color: "#9C27B0" }}
        onClick={() => playSound(audio)}
      ></VolumeUpIcon>
      <span className="phoneticText">{props.phonetic.text}</span>
    </div>
  );
}

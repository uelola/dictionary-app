import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

export default function Phonetics(props) {
  const audio = new Audio(props.phonetic.audio);
  const playSound = (audioFile) => {
    audioFile.play();
  };

  return (
    <div className="Phonetics">
      <VolumeUpIcon onClick={() => playSound(audio)}></VolumeUpIcon>
      {props.phonetic.text}
    </div>
  );
}

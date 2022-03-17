import React from "react";
import audio from "./audio.png";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src={audio} className="audio-icon img-fluid" alt="audio" />
      </a>
      {props.phonetic.text}
    </div>
  );
}

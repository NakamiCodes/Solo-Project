import React, { Component } from "react";
import { ProgressPlugin } from "webpack";
import CharacterHolder from './CharacterHolder'

const Character = () => {
  return (
    <div className="character">
      <img src={props.images.portrait}></img>
      <p>Name: {props.name}</p>
      <p>Roster Postion: {props.order}</p>
      <p>Tutorial Link: {props.ytl}</p>
      <p>Frame Data Link: {prop.fdl}</p>
    </div>
  );
};

export default Character

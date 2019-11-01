import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";

const PlayerCard = props => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="card">
      <h1>Player: {props.name}</h1>
      <h2>Country: {props.country}</h2>
      <button onClick={toggleMode}>Invert Page</button>
    </div>
  );
};

export default PlayerCard;

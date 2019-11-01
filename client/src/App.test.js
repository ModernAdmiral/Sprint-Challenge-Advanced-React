import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as rtl from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlayerCard from "./Components/PlayerCard";
// import { useLocalStorage } from "./useLocalStorage";
// import { useDarkMode } from "../Hooks/useDarkMode";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const app = rtl.render(<App />);
  console.log(app.debug());
});

it("renders players in app", () => {
  const playerCard = rtl.render(<PlayerCard />);
  playerCard.getByText(/player/i);
  console.log(playerCard.debug());
});

it("renders players in app", () => {
  const playerCard = rtl.render(<PlayerCard />);
  playerCard.getByText(/country/i);
  console.log(playerCard.debug());
});

import React, { Component } from "react";
import "./App.css";
import PlayerCard from "./Components/PlayerCard";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      playersData: []
    };
  }

  componentDidMount() {
    console.log("CDM is running");

    fetch(`http://localhost:5000/api/players`)
      .then(res => res.json())
      .then(response => {
        console.log("response", response);
        this.setState({ playersData: response });
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }

  render() {
    return (
      <div className="cardWrapper">
        {this.state.playersData.map(e => {
          return <PlayerCard key={e.id} name={e.name} country={e.country} />;
        })}
      </div>
    );
  }
}

import React, { Component } from "react";
import { LOP } from "../shared/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: LOP,
    };
  }
  render() {
    return <PlayersPresentation players={this.state.players} />;
  }
}
export default Main;

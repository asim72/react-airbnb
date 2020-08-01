import React, { Component } from "react";
import Items from "./Items";

class ItemList extends Component {
  state = {
    rentals: [1, 2, 3, 4, 5, 6, 7],
  };

  renderRentals = () => {
    return this.state.rentals.map((rental, index) => {
      return <Items key={index} />;
    });
  };

  render() {
    return (
      <div className="ui container">
        <h1 style={{ paddingTop: 80 }}>Your Home All Around The World</h1>

        <div className="ui link  fluid cards">{this.renderRentals()}</div>
      </div>
    );
  }
}

export default ItemList;

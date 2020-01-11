import React, { Component } from 'react';


class BeerCard extends Component {
  state = {
    isLiked: false
  }

  handleLiked = () => {
    this.setState({isLiked: !this.state.isLiked})
  }

  render() {
    return <div>
      The beer {this.props.beer} 
      <button 
        className = {this.state.isLiked ? "blackButton" : "whiteButton"} 
        onClick={() => this.handleLiked()}
      >Like</button>
    </div>
  }

}

export default BeerCard
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      black: true
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
    })
    .catch(error => console.log('parsing failed'. error))
  }

  buttonColor(id) {
    let beer = this.state.black

    if(beer === true) {
      
    }
    this.setState({black: !this.state.black})
  }


  render() {
    console.log("**THIS STATE**", this.state.items)
    var {isLoaded, items} = this.state;
    var btn_class = this.state.black ? "blackButton" : "whiteButton";
    if(!isLoaded) {
        return <div>Loading...</div>
    }

    else {
    return ( 
      <div className="App">
        {/* Data has been loaded */}
        <ul>
          {items.map(beer => (
            <li key={beer.id}>
            NAME: {beer.name} TAGLINE: {beer.tagline} <p> {beer.description}</p>
            <button className ={btn_class} onClick = {this.buttonColor.bind(this)}>Like</button>
            <h1>     </h1>
            </li>
          ))}
        </ul>
      </div>
    );
    }

}
}
export default App;



// //render() {
// //  const {isLoading, contacts} = this.state
//     return(
//       <div>
//         <div className ={`content ${isLoading ? 'isLoading' : ''}`>
//           {

//           }
//         }
//       </div>
//     )
// // }
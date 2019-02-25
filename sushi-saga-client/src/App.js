import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    display: 0,
    wallet: 200
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(res => {
      this.setState({
        sushis: res
      })
    })
  }

  getBelt = () => {
    return this.state.sushis.slice(this.state.display, this.state.display+4)
    //sushis[0], sushis[4]
  }

  showMore = () => {
    console.log("Show More Button")
    this.setState({
      display: this.state.display+4
    })
  }

  eatSushi = (banana) => {
    // console.log("I'm eating sushi", banana)
    // See bonus question number one! 
    if (this.state.wallet - banana.price > 0) {
    this.setState({
      eaten: [...this.state.eaten, banana],
      wallet: this.state.wallet - banana.price
    })
  } else {
     alert("You can't do that!")
   }
  }


  render() {
    // console.log("This is my state: ", this.state.sushis)
    // console.log("This is my eaten sushi: ", this.state.eaten)
    console.log("This is my wallet ", this.state.wallet)
    return (
      <div className="app">
        <SushiContainer sushis={this.getBelt()} eaten={this.state.eaten} eatSushi={this.eatSushi} getMore={this.showMore}/>
        <Table eaten={this.state.eaten} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;

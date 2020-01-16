import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard'

class App extends React.Component {
  constructor() {//initialize state
    super();//call super and bind methods
    this.state = {
      cardInfo: [],
      followersInfo: [],
      query: ""
    };
    console.log("constructor is running");
  }
  componentDidMount() {//fetch initial data and sets it to state
    axios
    .get("https://api.github.com/users/acarrillo3")
    .then(response => {
      this.setState({
        cardInfo: response.data
      });
      console.log(response)
    })
    .catch(error => console.log(error));
  }
  
  render() {
    console.log("Loading", this.state);
    return (
      <div>
        <UserCard 
          cardInfo={this.state.cardInfo}
        />
      </div>
    );
  }
    

}

export default App;

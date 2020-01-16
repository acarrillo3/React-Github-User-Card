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
    axios
      .get("https://api.github.com/users/acarrillo3/followers")
      .then(response => {
        this.setState({
          followersInfo: response.data
        });
        console.log("followers", response);
      })
      .catch(error => console.log(error));
  }
  
  handleChanges = element => {
    this.setState({query: element.target.value});
  };

  filterUsers = element => {
    element.preventDefault();
    const results = this.state.followersInfo.filter(user => 
      user.toLowerCase().includes(this.query.toLowerCase())
    );
    this.setState({ followersInfo:results });
  };

  render() {
    console.log("Loading", this.state);
    return (
      <div style={{background: "skyblue", margin: "30%" }}>
        <h1>Welcome to my GitHub and Follower's</h1>
        <p>Feel free to search thru</p>
        <form>
            <input onSubmit="submit"
              id="name"
              onChange={this.handleChanges}
              value={this.filterUsers}
              placeholder="Search..."
              type="text"
              name="textfield"
            />
            <button>submit</button>
        </form>
        <UserCard
          cardInfo={this.state.cardInfo}
          followers={this.state.followersInfo}
        />
      </div>
    );
  }
}

export default App;

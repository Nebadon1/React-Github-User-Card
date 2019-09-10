import React from "react";
import GithubCard from "./components/GithubCard.js";
import GithubFollowers from "./components/GithubFollowers";
import NavBar from "./components/NavBar";
import HeatMap from "./components/HeatMap";
import GitHubButton from 'react-github-btn'
import "./App.css"




class App extends React.Component {
constructor() {
 super()
 this.state = {
  user: [],
  follower:[]
};

}
  
  componentDidMount() {
    console.log('CDM');
    fetch('https://api.github.com/users/nebadon1')
      .then(res => res.json())
      .then(users => this.setState({ user: users} ) 
      )
      .catch(err => console.log('noooo'));

      fetch('https://api.github.com/users/nebadon1/followers')
      .then(res => res.json())
      .then(followers =>   this.setState({ follower: followers})
      
      )
      .catch(err => console.log('noooo'));
  }

 

  render() {
    return (
       <section className="main-container">
          <NavBar/>
           <div className="App">
             <div className="card">
               <GithubCard {...this.state.user}/>
             
            <GitHubButton href="https://github.com/nebadon1" data-size="large" aria-label="Follow @nebadon1 on GitHub">Follow @nebadon1</GitHubButton>
             </div >
             <div className="main">
              <HeatMap/>
             </div>
            <div className ="following">
              <div>
              <h2>Who to Follow</h2>
              {this.state.follower.map(gitfollowers => <GithubFollowers gitfollowers={gitfollowers}/>)}
              </div>
          </div>
          </div>
      </section>
    );
  }
}

export default App;
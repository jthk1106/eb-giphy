import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Favorites from './components/Favorites'

class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          favorites: [],
      }
  }

  favoritesList = (e) => {
    console.log(e.target.value)
    if(e.target.checked === true) {
      this.setState({
        favorites: [...this.state.favorites, e.target.value]
      })
    } else if(e.target.checked === false) {
      let currentFavorites = [...this.state.favorites]
      let updatedFavorites = currentFavorites.filter(fav => fav !== e.target.value)
      console.log(updatedFavorites)
      this.setState({
        favorites: [...updatedFavorites]
      })
    }
    
  }

  render() {
    console.log('favs: ', this.state.favorites)
    return (
      <div className="App">
          <div className="jumbotron jumbotron-fluid text-white header-box">
            <div className="container">
              <h1 className="display-4">Dear Echobind...</h1>
              <p className="lead">have any GIF you want</p>
            </div>
          </div>
          <div className="container-fluid ">
            <Search toggleFavorite={(e) => this.favoritesList(e)}></Search>
            <Favorites list={this.state.favorites}></Favorites>
          </div>
          <div className="container-fluid">
            <div className="row footer">
              <div className="col">
                © Jeremy Kim 2020
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

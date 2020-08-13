import React, { Component } from 'react';

class Favorites extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: ''
        }
    }

    selectGif = (gif) => {
        console.log(gif)
        this.setState({
            selected: gif
        })
    }

    render() {
        const favsArray = this.props.list
        const favs = favsArray.map((fav, i) => {
            return (
                <div className="col-3 fav-gifs" key={i}>
                    <img src={fav} alt="a gif" height="200" width="300"/>
                    <div>
                        <button className="btn btn-dark fav-btn" onClick={() => this.selectGif(fav)}>Make me big</button>
                    </div>
                </div>
            )
        })
        const empty = <div className="col empty">Get started adding your favorite gifs</div>
        const display = favs.length === 0 ? empty : favs
        const bigGif = <div className="col big-gif">
            <img src={this.state.selected} alt="a gif" width="1000"/>
        </div>

        return (
            <div className="container favorites">
                <div className="jumbotron jumbotron-fluid favorites-header">
                    <div className="container">
                    <h1 className="display-4">Favorites</h1>
                    </div>
                </div>
                <div className="row">
                    {display}
                </div>
                <div className="row">
                    {this.state.selected ? bigGif : null}
                </div>
            </div>
        );
    }
}

export default Favorites;
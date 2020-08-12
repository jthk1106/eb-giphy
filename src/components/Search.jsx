import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: '',
            hits: []
        }
    }

    typed = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    search = () => {
        axios.get(`https//api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${process.env.REACT_APP_API_KEY}&limit=8`)
            .then(res => this.setState({ hits: [...res.data.data] }))
            .catch(err => console.log('err: ', err))
    }

    render() {
        let searchHits = [...this.state.hits]
        let displaySearchHits = searchHits.map((hit, i) => {
            return (
                <div className="col-3 search-hit" key={i}>
                    <img src={hit.images.original.url} alt="a gif" height="200" width="300"/>
                    <div>
                        <input type="checkbox" className="checkbox" value={hit.images.original.url} onClick={this.props.toggleFavorite}/>
                        <label>Favorites</label>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row search-input">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="What are you looking for?"
                            onChange={(e) => this.typed(e)}
                            onKeyPress={(e) => e.key === 'Enter' && this.search()}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark search-btn" type="button" onClick={this.search}>Find It</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {displaySearchHits ? displaySearchHits : null}
                </div>
            </div>
        );
    }
}

export default Search;
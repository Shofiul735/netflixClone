import React, { Component } from "react";
import Movie from "../../components/Movie/Movie";
import axios from "../../axios";
import style from "./MovieSuggestions.module.css";

class MovieSuggestions extends Component {
  state = {
    moviesData: [],
  };
  componentDidMount() {
    axios
      .get(this.props.url)
      .then((result) => {
        const movies = { ...this.state };
        movies.moviesData = result.data.results;
        this.setState({ moviesData: movies.moviesData });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let rowPoster = <p style={{color:"white"}}>Loading...</p>;
    if (this.state.moviesData.length !== 0) {
      const movies = [...this.state.moviesData];
      rowPoster = movies.map((movie) => <Movie key={movie.id} data={movie} largePic={this.props.larger}/>);
    }
    return (
      <div>
        <div className={`${style.container} ${style.marginTopBottom15}`}>
          <h3 className={style.title}>{this.props.title}</h3>
          <div className={style.makeRow}>{rowPoster}</div>
        </div>
      </div>
    );
  }
}

export default MovieSuggestions;

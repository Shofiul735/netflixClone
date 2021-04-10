import React, { Component } from "react";
import Bazinga from "../../components/Bazinga/Bazinga";
import req from "../../request";
import axios from "../../axios";
import style from "./Banner.module.css";

class Banner extends Component {
  state = {
    bannerMove: {},
    bazinga: false,
  };
  componentDidMount() {
    axios
      .get(req.fetchTopRated)
      .then((results) => {
        const index = Math.floor(Math.random() * 19);
        const bannerMove = results.data.results[index];
        this.setState({ bannerMove: bannerMove });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  playBazinga = () => {
    const bazinga = this.state.bazinga;
    this.setState({ bazinga: !bazinga });
  };
  render() {
    if (this.state.bazinga) {
      return (
        <div onClick={this.playBazinga} className={style.backdrop}>
          <Bazinga />
        </div>
      );
    } else {
      return (
        <header
          className={style.bannerBg}
          style={{
            backgroundImage: `linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,.2)),url("https://image.tmdb.org/t/p/original/${this.state.bannerMove.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={style.bannerContent}>
            {console.log(this.state.bannerMove)}
            <h1>
              {this.state.bannerMove?.name || this.state.bannerMove?.title}
            </h1>
            <div className={style.bannerButton}>
              <button onClick={this.playBazinga}>Play</button>
              <button>Mylist</button>
            </div>
            <p>{this.state.bannerMove.overview}</p>
          </div>
        </header>
      );
    }
    
  }
}

export default Banner;

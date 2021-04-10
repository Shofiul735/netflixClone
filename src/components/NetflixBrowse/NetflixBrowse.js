import React from "react";
import MovieSuggestions from "../../containers/MovieSuggestions/MovieSuggestions";
import Navbar from "../Navbar/Navbar";
import Banner from "../../containers/Banner/Banner";
import req from "../../request";
import style from "./NetflixBrowse.module.css";

const netflixBrowse = (props) => {
  return (
    <div className={style.netflixbgColor}>
      <Navbar options />
      <Banner />
      <div>
        <MovieSuggestions
          title="trending now"
          url={req.featchTrending}
          larger
        />
        <MovieSuggestions
          title="netflix original"
          url={req.featchingNetflixOriginals}
        />

        <MovieSuggestions title="top rated" url={req.fetchTopRated} />

        <MovieSuggestions title="action movies" url={req.fetchActionMovies} />

        <MovieSuggestions title="comedy movie" url={req.fetchComedyMovies} />

        <MovieSuggestions title="Horror movies" url={req.fetchHorrorMovies} />

        <MovieSuggestions
          title="romantic movies"
          url={req.fetchRomanceMovies}
        />

        <MovieSuggestions
          title="documentaries"
          url={req.fetchDocumentsMovies}
        />
      </div>
    </div>
  );
};

export default netflixBrowse;

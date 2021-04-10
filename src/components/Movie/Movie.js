import React from "react";
import style from "./Movie.module.css";


const movie = (props) => {
  let pic='backdrop_path';
  let image=style.imageSize;
  if(props.largePic){
    pic = 'poster_path';  
    image = style.imageSizeLarge
  }
  const baseURL = `https://image.tmdb.org/t/p/original/`;
  return <img className={image} src={`${baseURL}${props.data[pic]}`} alt={props.data.title}></img>;
};

export default movie;

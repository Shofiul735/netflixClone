import React from "react";
import style from "./Bazinga.module.css";

const bazinga = (props) => {
  return (
    <div className={style.box}>
      <iframe
        title="Bazinga-1"
        src="https://giphy.com/embed/5WwQfUDJlh9F6"
        width="480"
        height="250"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <iframe
        title="Bazinga"
        src="https://giphy.com/embed/YWZPFFCblEqsw"
        width="480"
        height="240"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default bazinga;

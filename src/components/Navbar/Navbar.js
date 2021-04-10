import React from 'react';
import {Link} from "react-router-dom";
import style from "./Navbar.module.css";


const navbar=(props)=> {
        const arr=[style.navLink];
        if(props.linkColor === "red"){
            arr.push(style.linkRed);
        }
        if(!props.signInShow){
            arr.push(style.linkHide);
        }
        return (
            <nav className={style.loginNav}>
                {/* <img className={style.loginNav__img} src={img} alt="logo"></img> */}
                <div className={style.logo}></div>
                <Link to="" className={arr.join(" ")} onClick={props.func}>Sign In</Link>
            </nav>
        );
}

export default navbar;
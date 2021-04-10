import React from "react";
import style from "./FAQ.module.css";
const FAQ = (props)=>{
    let result = null;
     if(props.show){
        const classes = [style.answer,style.show]
        result=(
            <div className={style.faqDiv} onClick={props.clicked}>
                <div className={`${style.clearfix} ${style.width100}`}>
                        <span className={`${style.qus}`}>{props.qus}</span>
                        <span   className={`${style.cross}`}> &times; </span>
                    
                </div>
            <div>
                <hr className={style.faqhr}/>
                <p className={classes.join(" ")}>{props.ans}</p>
            </div>
        </div>
        );
     }else{
         result=(
            <div className={style.faqDiv} onClick={props.clicked}>
            <div>
            <div className={`${style.clearfix} ${style.width100}`}>
                <span className={style.qus}>{props.qus}</span> 
                <span className={style.cross}> &#x0002B; </span>
            </div>
            </div>
        </div>
         );
     }
    return(
        result
    );
}
export default FAQ;
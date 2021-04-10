import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Aux from "../../hoc/higherOrder";
import Navbar from "../Navbar/Navbar";
import FAQS from "../../containers/FAQs/FAQs";
import style from "./InitialPage.module.css";
class initialPage extends Component {
    state={
        message:false,
        redirect:false
    }
    messagePop = () =>{
        const message = this.state.message;
        this.setState({message:!message})
    }
    clicked = () =>{
        const redirect = this.state.redirect;
        this.setState({redirect:!redirect})
    }
    render() {
        if(this.state.redirect){
            return(
                <Redirect to="/browse"/>
            )
        }
        if(this.state.message){
            return(
            <div className={style.messageBox}>
                <h3  onMouseOver={this.clicked}>To Skip the login and payment process,Please put your cursor on this text</h3>
            </div>
            );
        }
        return (
            <Aux>
                <Navbar linkColor="red" func={this.messagePop} signInShow />
                <div className={style.bgImage}>
                    <div className={style.contentDiv}>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>

                        <form action="/browse">
                            <span>Ready to watch? Enter your email to create or restart your membership.</span>
                  
                            <div className={style.emailForm}>
                                <input type="email" required ></input>
                                <label>Email Address</label>
                                <button onClick={this.messagePop}>Get Started &gt;</button>
                                <p>Email is required!</p>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className={style.hrForInitialPage}/>
                <FAQS/>
            </Aux>
        );
    }
}

export default initialPage;
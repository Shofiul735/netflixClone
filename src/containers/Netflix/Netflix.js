import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import InititalPage from "../../components/InitalPage/InitialPage";
import NetflixBrowse from "../../components/NetflixBrowse/NetflixBrowse";

class Netflix extends Component {
    render() {
        return (
            <Switch> 
                <Route path="/" exact>
                    <InititalPage/>
                </Route>
                <Route path="/browse" exact>
                    <NetflixBrowse/>
                </Route>
            </Switch> 
        );
    }
}

export default Netflix;
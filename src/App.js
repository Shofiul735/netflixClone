import React,{Component} from "react";
import Aux from "./hoc/higherOrder";
import Netflix from "./containers/Netflix/Netflix";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
class App extends Component {
  render(){
    return (
      <React.Fragment>
        <BrowserRouter basename="/">
          <Aux>
            <Netflix/>
          </Aux>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

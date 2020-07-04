import React, { Component } from 'react'
import Childcomponent from "./Component/Childcomponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        objects: [{item: "Ball"}, {item: "Bat"}, {item: "Glove"}],
        someBoolean: false,

    };

}

changeButtonState = () => {
      this.setState({
        someBoolean: !this.state.someBoolean,
      });
};

  render() {
    const childComponent = this.state.someBoolean ? <Childcomponent objects={this.state.objects} /> : <p></p>; 

    
    return (
      <div>
        {childComponent}
        <button onClick={this.changeButtonState}>Change State</button>
        
      </div>
    )
  }
}

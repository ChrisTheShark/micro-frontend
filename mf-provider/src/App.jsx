import React from "react";
import ReactDOM from "react-dom";

import Button from './Button';

const App = () => (
  <React.Fragment>
    <h1 className="ui center aligned header">MF Provider</h1>
    <div className="ui container">
      <div className="ui segments">
        <div className="ui segment">
          <Button text="primary"/>
        </div>
      </div>
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));

import React, { Fragment } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Button from "./Button";

class ComponentMain extends React.Component {
  render() {
    return (
      <Fragment>
        <Button />
        <Component1 />
        <Component2 />
      </Fragment>
    );
  }
}

export default ComponentMain;

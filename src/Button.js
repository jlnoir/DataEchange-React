import React, { Fragment } from "react";
import { DataContext } from "./DataContext";

class Button extends React.Component {
  render() {
    return (
      <DataContext.Consumer>
        {({ getData }) => (
          <Fragment>
            <button onClick={getData}> Changer le thème </button>
          </Fragment>
        )}
      </DataContext.Consumer>
    );
  }
}

export default Button;

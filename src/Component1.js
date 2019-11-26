import React, { Fragment } from "react";
import { DataContext } from "./DataContext";

class Component1 extends React.Component {
  render() {
    return (
      <DataContext.Consumer>
        {({ items }) => (
          <Fragment>
            {items.map(item => (
              <li key={item.recordid}>{item.fields.title}</li>
            ))}
          </Fragment>
        )}
      </DataContext.Consumer>
    );
  }
}

export default Component1;

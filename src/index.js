import React from "react";
import ReactDOM from "react-dom";
import ComponentMain from "./ComponentMain";
import { DataContext } from "./DataContext";

const rootElement = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getData = () => {
      fetch(
        "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=category"
      )
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              items: result.records
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    };

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      getData: this.getData
    };
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        <ComponentMain />
      </DataContext.Provider>
    );
  }
}

ReactDOM.render(<App />, rootElement);

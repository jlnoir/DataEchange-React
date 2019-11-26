import React from "react";

export const DataContext = React.createContext({
  error: null,
  isLoaded: false,
  items: [],
  getData: () => {}
});

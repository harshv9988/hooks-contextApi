import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext();

export default function Provider(props) {
  const { themes } = props;
  return (
    <ThemeContext.Provider value={themes}>
      {props.children}
    </ThemeContext.Provider>
  );
}

ReactDOM.render(
  <Provider themes={themes}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React, { useContext } from "react";
import { ThemeContext } from "./index";

import Harsh from "./Harsh";

export default function App() {
  const themes = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{
          background: themes.dark.background,
          color: themes.dark.foreground,
        }}
      >
        I am styled by theme context!
      </button>
      <Harsh />
    </div>
  );
}

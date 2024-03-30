import React from "react";

import { ColoredHeadingOne, ColoredHeadingTwo } from "atomic-uix";

const App = () => {
  return (
    <div>
      <ColoredHeadingOne color={"red"} text="Colored heading one is working 😄" />
      <ColoredHeadingTwo color={"blue"} text="Colored heading two is working 😄" />
    </div>
  );
};

export default App;

import React from "react";
import Greeting from "./components/Greeting";
import Image from "./components/Image";

class App extends React.Component {
  render() {
    return (
      <div>
      <Greeting name="Samuel" lastName="Silva"/>
      <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Gatinho bonito" />
      </div>
    );
  }
}

export default App;
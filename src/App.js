import React, { Fragment } from "react";
import Header from "../src/components/Layouts/Header";
import Meals from "./components/Meal/Meal";

function App() {
  return (
    <React.Fragment>
      <Header>
        <main>
          <Meals></Meals>
        </main>
      </Header>
    </React.Fragment>
  );
}

export default App;

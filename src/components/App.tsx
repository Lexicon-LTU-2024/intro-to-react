import { ReactElement } from "react";
import { Header } from "./header";
import { Introduction } from "./introduction";
import { HowToDo } from "./how-to-do";

import "./App.css";

function App(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <HowToDo />
      </main>
    </>
  );
}

export default App;

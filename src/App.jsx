import "./App.css";
import { Menus } from "./components/Menus/Menus";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="wrapper">
        <Menus />
        <Main />
      </div>
    </>
  );
}

export default App;

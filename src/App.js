import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/global.css";

function App() {
  useEffect(() => {
    document.title = "Welcome to Techdepo";
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;

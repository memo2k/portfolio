import React from "react";
import "./assets/styles/style.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

import React, { lazy } from "react";
import "./assets/styles/style.scss";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

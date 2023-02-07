import React, { useRef } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import Product from "./components/Product";
import About from "./components/About";
import Scrolltotop from "./components/Scrolltotop";
import "./style/style.css";
const App = () => {
  const about = useRef(null);
  const content = useRef(null);
  const product = useRef(null);
  const home = useRef(null);
  return (
    <div>
      <Nav product={product} content={content} about={about} home={home}></Nav>
      <Scrolltotop></Scrolltotop>
      <Header home={home}></Header>
      <Product product={product}></Product>
      <Content content={content}></Content>
      <About about={about}></About>
      <Footer></Footer>
    </div>
  );
};

export default App;

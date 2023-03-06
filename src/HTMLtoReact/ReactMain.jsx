import Header from "../HTMLtoReact/HeaderComponent/Header"
import Container from "./ContainerComponent/Container";
import Footer from "./FooterComponent/Footer";
import { Outlet } from "react-router-dom";

const React = ()=> {

  return(
    <>
      <Header/>
      <Outlet/>
      <Container/>
      <Footer/>
    </>
  );
}

export default React;
import React from "react";
import Category from "../components/Category";
import Carousel from "../components/Example";
import Recomandations from "../components/Recomandations";

export default function Home() {
  return (
    <>
      <Category />
      <Recomandations />
      <Carousel />
    </>
  );
}

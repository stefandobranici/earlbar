import React from "react";
import Carousel from "../components/carousel/Carousel";
import { Link } from "react-router-dom";

const pageContent = {
  title: "Shisha Bar",
  subtitle:
    "Distinct hookah bar providing the cleanest and best Shisha brands, an experienced and knowledgeable staff.",
};

export const Home = () => {
  return <Carousel />;
};

export default Home;

import React from "react";
import DrinkMenu from "../components/drink-menu/DrinkMenu";
import { drinksMenu } from "../repository/drinks-menu";
import Banner from "../components/Banner";

export const TheEarl = () => {
  return (
    <div>
      <Banner
        title="The Earl Cocktail Bar Menu"
        subtitle="Check out our highlighted cocktails and special deals we have for you"
      />{" "}
      <DrinkMenu menu={drinksMenu} />
    </div>
  );
};

export default TheEarl;

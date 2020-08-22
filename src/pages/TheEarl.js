import React from "react";
import DrinkMenu from "../components/drink-menu/DrinkMenu";
import { drinksMenu } from "../repository/menu";

export const TheEarl = () => {
  return <DrinkMenu menu={drinksMenu} />;
};

export default TheEarl;

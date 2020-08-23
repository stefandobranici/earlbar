import React from "react";
import Banner from "../components/Banner";
import ShishaMenu from "../components/ShishaMenu";

export const TheTerrace = () => {
  return (
    <div>
      {" "}
      <Banner
        title="The Terrace Shisha Bar Menu"
        subtitle="Check out our premium shisha flavours specially chosen for a relaxing time"
      />
      <ShishaMenu />
    </div>
  );
};

export default TheTerrace;

import React from "react";
import Banner from "../components/layout/banner/Banner";

export default function Error() {
  return (
    <Banner title="404" subtitle="page not found">
      <a href="/home">
        <button type="button" className="btn-primary-main">
          Return Home
        </button>
      </a>
      <div style={{ height: "24vh", backgroundColor: "white" }} />
    </Banner>
  );
}

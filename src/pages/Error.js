import React from "react";
import Banner from "../components/Banner";
import { useHistory } from "react-router-dom";

export default function Error() {
  const history = useHistory();

  const goToBooking = () => {
    history.push("/");
  };

  return (
    <Banner title="404" subtitle="page not found">
      <button
        type="button"
        className="btn-primary-main"
        onClick={() => goToBooking}
      >
        Return Home
      </button>
      <div style={{ height: "23vh", backgroundColor: "white" }} />
    </Banner>
  );
}

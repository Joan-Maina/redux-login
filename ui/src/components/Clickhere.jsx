import { Link } from "react-router-dom";
import React from "react";

function Clickhere({ text, navigation }) {
  return (
    <>
      <Link to={navigation}>
        <p>{text}</p>
      </Link>
    </>
  );
}

export default Clickhere;

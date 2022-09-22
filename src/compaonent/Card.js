import React from "react";
import Data from "./Data";

export default function Card() {
  return (
    <div className="app">
      <div className="quote">
        <p>"{Data[0].quote}"</p>
        <p>Author:{Data[0].author} </p>
      </div>
    </div>
  );
}

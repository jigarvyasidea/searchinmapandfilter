import React, { useState } from "react";
import Data from "./compaonent/Data";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const changeHander = (e) => {
    setText(e.target.value);
  };
  const myStyle = {
    color: "white",
    backgroundColor: "red"
  };

  return (
    <div style={myStyle} className="App">
      <h1>This is Search Bar we Created</h1>

      <div className="container text-center">
        <input
          type="text"
          className="form-control my-2"
          value={text}
          onChange={changeHander} />

        {Data.filter((val) => {
          if (text == "") {
            return val;
          } else if (
            val.name.toLocaleLowerCase().startsWith(text.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((value) => {
          return <h5>{value.name}</h5>;
        })}
      </div>
    </div>
  );
}

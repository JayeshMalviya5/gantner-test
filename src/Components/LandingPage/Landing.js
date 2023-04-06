import React, { useState } from "react";
import "./Landing.css";
import { v4 as uuidv4 } from "uuid";

function Landing() {
  const [selectedColor, setSelectedColor] = useState("");
  const [colorArray, setColorArray] = useState([]);
  
  const selectColor = (event) => {
    setSelectedColor(event.target.value);
  };

  const deleteColor = (id) => {
    let newColors = colorArray.filter((item) => {
      return item != id;
    });

    setColorArray(newColors);
  };

  const setColor = () => {
    setColorArray([...colorArray, selectedColor]);
    console.log(colorArray);
  };
  return (
    <div className="landingContainer">
      <div className="title">
        <h2>Please select the color</h2>
      </div>
      <div className="chooseColor">
        <input type="color" value={selectedColor} onChange={selectColor} />
        <button onClick={setColor}>Select</button>
      </div>

      <div className="showColor">
        {colorArray.map((item, uid = uuidv4()) => {
          return (
            <>
              <div
                key={uid}
                style={{
                  backgroundColor: `${item}`,
                  width: "40px",
                  height: "40px",
                  gap: "10px",
                }}
              ></div>
              <button className="changeBTN"
                onClick={() => {
                  deleteColor(item);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Landing;

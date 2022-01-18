import { useState } from "react";
import React from "react";
import { ColorBox } from "./ColorBox";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function ColorList() {
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color, color: "black" };



  const initial_colors = ["yellow", "blue", "red", "crimson"];
  const [colors, setColors] = useState(initial_colors);



  return (
    <div className="main-box">
      <div>
      <TextField style={styles} onChange={(event) => setColor(event.target.value)} label="Enter a color" variant="outlined" />
        {/* <input style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter a color" /> */}
        {/* <button onClick={() => setColors([...colors, color])}>Add Button</button> */}
        <Button variant="contained" className="add-movies-button" onClick={() => setColors([...colors, color])}>Add Button</Button>
      </div>
      {colors.map((clr, index) => (<ColorBox key={index} clrname={clr} />))};
      {/* {colors.map((clr)=>(<ColorBox/>))} */}
    </div>
  );
}

import React from "react";


export function ColorBox({ clrname }) {
  const styles = { height: "50px", width: "150px", backgroundColor: clrname, margin: "10px 10px" };
  return (
    <div style={styles}></div>
  );
}

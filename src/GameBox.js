import React from "react";

export function GameBox({ val, onPlayerClick }) {
  // const [val,setVal]=useState("");
  const styles = { color: val === "X" ? "green" : "red" };
  return <div onClick={() => onPlayerClick()}
    style={styles}
    className="game-box"
  >
    {val}

  </div>;
}

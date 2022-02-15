import React, { useState } from "react";
import { Addcolor } from './Addcolor';

export function Colorbox() {
  const [color, setColor] = useState("pink");
  const styles = { background: color };
  const [colorList, setColorList] = useState(["red", "Green", "Blue",]);

  return (<div className='ColorBox'>
    <input style={styles} onChange={e => setColor(e.target.value)} placeholder='Enter the color' value={color} />
    <button onClick={() => setColorList([...colorList, color])}>Add color</button>
    {colorList.map((clr) => (<Addcolor color={clr} />))}


  </div>
  );
}

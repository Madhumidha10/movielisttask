import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(98);
  const [dislike, setdisLike] = useState(10);
  const addLike=()=>{setLike(like + 1)};
  const addDisLike=()=>{setdisLike(dislike+1)}
  return (<div className="Counter">


    <IconButton aria-label="like" color="secondary" onClick={addLike} >
      <Badge badgeContent={like} color="secondary" max={999}>
        👍
      </Badge>
    </IconButton>
    <IconButton aria-label="dis-like" color="error" onClick={addDisLike} >
      <Badge badgeContent={dislike} color="error" max={999}>
        👎
      </Badge>
    </IconButton>
   

  </div>);
}

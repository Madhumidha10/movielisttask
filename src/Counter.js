import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(98);
  const [dislike, setdisLike] = useState(10);
  return (<div className="Counter">


    <IconButton aria-label="like" color="secondary" onClick={e => setLike(like + 1)}>
      <Badge badgeContent={like} color="secondary" max={999}>
        👍
      </Badge>
    </IconButton>
    <IconButton aria-label="dis-like" color="error" onClick={e => setdisLike(dislike + 1)}>
      <Badge badgeContent={dislike} color="error" max={999}>
        👎
      </Badge>
    </IconButton>
    {/* <button className='btn' onClick={e=>setLike(like+1)}>👍{like} </button>
       <button className='btn' onClick={e=>setdisLike(dislike+1)}>👎{dislike} </button>   */}

  </div>);
}

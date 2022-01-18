import { useState } from "react";
import React from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  // const like = 0;
  return (
    <div>
      <IconButton color="primary" aria-label="upload picture" onClick={() => setLike(like + 1)}>
        👍
        <Badge badgeContent={like} color="primary">
          {/* <MailIcon color="action" /> */}
        </Badge>
      </IconButton>

      <IconButton color="primary" aria-label="upload picture" onClick={() => setdisLike(dislike + 1)}>
        👎
        <Badge badgeContent={dislike} color="error">
          {/* <MailIcon color="action" /> */}
        </Badge>
      </IconButton>

      {/* <button  onClick={()=>setLike(like + 1)}>👍{like}</button>
            <button  onClick={()=>setdisLike(dislike + 1)}>👎{dislike}</button> */}
    </div>
  );
}

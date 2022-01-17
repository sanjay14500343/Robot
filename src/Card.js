import React from "react";


export default function Card({name,email,id}) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-3'>
<img src={`https://robohash.org/${id}`} alt="id_card"/>
{/* <img src={`https://i.pravatar.cc/150?img=${id}`} alt="id_card"/> */}

<div>
  <h4>{name}</h4>
  <h5>{email}</h5>
</div>
  
  </div>
  );
} 
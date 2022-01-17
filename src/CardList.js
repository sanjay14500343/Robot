import React from "react";
import Card from './Card';

export default function CardList({robotes}) {
  return (
    <div>
    {
     robotes.map((robotes,index)=>{
     return <Card id ={robotes.id} name={robotes.name} email={robotes.email}/>
     })
    }    
  </div>
  );
} 
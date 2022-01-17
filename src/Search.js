import React from "react";

export default function Search({onInputChange}) {
    return ( <div>
      <input type="text" 
      placeholder="Search"
      className="pa3 ba b--green bg-lightest-blue"
      onChange={(e) => onInputChange(e.target.value)}
      />
      </div>
    );

    
  }
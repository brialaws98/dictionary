import React from "react";
import "./Meaning.css";
  
 export default function Meaning(props) {
    
    console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>
        {props.meaning.partOfSpeech}
      </h3>
       {props.meaning.definitions.map(function(definition, index) {
           return (
               <div key={index}>
                <p>
                   <span className="definitions">
                     {definition.definition}
                   </span>
                    <br />
                    <br />
                   <span className="examples">
                     <em>{definition.example}</em>
                  </span>
                </p>
               </div>
           );
       })}
    </div>
  );

 }
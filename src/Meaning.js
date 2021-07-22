import React from "react";
import Synonyms from "./Synonyms";
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
                  <div>
                    <strong>Definition:</strong>
                  </div>
                  <span className="definitions">
                     {definition.definition}
                   </span>
                    <br />
                    <br />
                   <div><strong>Example:</strong></div> 
                       <span className="examples">
                    <em>{definition.example}</em>
                  </span>
                  <br/>
                  <Synonyms synonyms= {definition.synonyms} />
                </p>
               </div>
           );
       })}
    </div>
  );

 }
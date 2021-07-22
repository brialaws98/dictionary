import React from "react";
import "./Phonetic.css"

 export default function Phonetic(props){
     console.log(props.phonetic);
     return (
         <div className="Phonetic">
             <button className="listen">
             <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
             🔈
             </a>
             </button>
             <br />
             {props.phonetic.text}
         </div>
     );
 }
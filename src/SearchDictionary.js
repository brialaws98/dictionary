import React, {useState} from "react"; 
import Results from "./Results";
import axios from "axios";
import "./Results.css";


  export default function SearchDictionary (props){
      let [keyword, setKeyword]= useState(props.defaultKeyword);
      let [results, setResults]= useState(null);
      let [loaded,setLoaded]= useState(false);
    
    function search (){
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
          axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
      setLoaded(true);
      search();
    }

    if (loaded) {
        return (
          <div className= "SearchWord">
         <section className="wordHunt">
              <form onSubmit={handleSubmit}>
                  <input 
                    type="search"
                   autoFocus={true}
                   onChange={handleKeywordChange}
                  />
                  <button 
                     type= "Submit"
                     className= "btn btn-primary">
                      🔍📚
                  </button>
              </form>
              <div className="wordExample">
              <em>suggested words</em>: Sunset, Yogurt, etc.
              </div>
            </section>
              <Results results={results} />
          </div>
      );
    } else {
      load();
      return "Loading";
    }
    
  }
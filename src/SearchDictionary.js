import React, {useState} from "react"; 
import Results from "./Results";
import axios from "axios";
import "./Results.css";
import Photos from "./Photos";


  export default function SearchDictionary (props){
      let [keyword, setKeyword]= useState(props.defaultKeyword);
      let [results, setResults]= useState(null);
      let [loaded,setLoaded]= useState(false);
      let [photos, setPhotos]= useState(null);
    
    function search (){
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
          axios.get(apiUrl).then(handleResponse);

          let pexApiKey =
          "563492ad6f91700001000001a0a82e39dc1847fe82d3cffc4c1525ba";
        let pexApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexApiKey}` };
        axios.get(pexApiUrl, { headers: headers }).then(handlePexResponse);
    }

    function handlePexResponse(response) {
      setPhotos(response.data.photos);
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
          <div className= "searchWord">
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
              </div >
            </section>
            <div className="wordResults">
              <Results results={results} />
              <Photos photos={photos} />
            </div>
          </div>
      );
    } else {
      load();
      return "Loading";
    }
    
  }
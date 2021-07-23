import SearchDictionary from "./SearchDictionary";
import './App.css';


function App() {
  return (
    <div className="App">
      <main>

        <SearchDictionary defaultKeyword="sunset" />
        

      </main>
      <footer>
        <strong>
          <a href="https://github.com/brialaws98/dictionary">
            open source </a>
        </strong>
            code by <em>Briana Laws</em>
      </footer>
    </div>
  );
}

export default App;

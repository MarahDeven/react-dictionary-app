import book from "./book.jpg";
import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={book} className="App-logo img-fluid rounded" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Ambiguous" />
        </main>
        <footer className="App-footer">
          <small>Coded by Marah Rice</small>
        </footer>
      </div>
    </div>
  );
}

export default App;

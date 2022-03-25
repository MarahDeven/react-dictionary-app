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
          <Dictionary defaultKeyword="Astronomy" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="www.linkedin.com/in/marah-deven-rice"
              target="_blank"
              rel="noreferrer"
            >
              Marah Rice
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/MarahDeven/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on Github
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

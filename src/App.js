import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Lola Ueda,{" "}
          <a
            href="https://github.com/uelola/dictionary-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            open-source on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://elated-euler-539c63.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

import "./App.css";
import Dictionary from "./Dictionary";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <LocalLibraryIcon
            className="bookIcon"
            fontSize="large"
            style={{ color: "#edb8f5" }}
          />{" "}
          Dictionary
        </header>
        <main>
          <Dictionary defaultWord="sunset" />
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

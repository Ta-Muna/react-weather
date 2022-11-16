import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Project was created by Tamari Pilia{" "}
          <a
            href="https://github.com/Ta-Muna/react-weather"
            rel="noreferrer"
            target="_blank"
          >
            and is open-sourced on Github
          </a>
        </footer>{" "}
      </div>
    </div>
  );
}

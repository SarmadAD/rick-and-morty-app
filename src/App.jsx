import { Cards } from "../components/Cards";
import { SearchBar } from "../components/SearchBar";
import "./app.css";

export function App() {
  return (
    <div className="App">
      <SearchBar />
      <Cards />
    </div>
  );
}

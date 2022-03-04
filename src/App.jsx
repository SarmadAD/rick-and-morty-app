import { useState } from "react";
import { Cards } from "../components/Cards";
import { SearchBar } from "../components/SearchBar";
import "./app.css";

export function App() {
  const [searchItem, setSearchItem] = useState("");
  const [cardItems, setCardItems] = useState([]);
  return (
    <div className="App">
      <SearchBar setSearchItem={setSearchItem} searchItem={searchItem} setCardItems={setCardItems} />
      <Cards cardItems={cardItems} />
    </div>
  );
}

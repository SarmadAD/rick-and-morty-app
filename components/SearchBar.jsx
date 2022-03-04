import "./searchbar.css";

export function SearchBar({ setSearchItem, searchItem, setCardItems }) {
  function handleSearchChange(e) {
    setSearchItem(e.target.value);
  }

  async function handleSearchButtonClick() {
    fetchData();
  }
  async function fetchData() {
    const apiurl = `https://rickandmortyapi.com/api/character/?name=${searchItem}`;
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      setCardItems(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="search-bar">
      <input className="search-input" placeholder="Search" onChange={handleSearchChange}></input>
      <button className="search-button" onClick={handleSearchButtonClick}>
        Search
      </button>
    </div>
  );
}

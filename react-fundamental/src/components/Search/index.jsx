import { useState } from "react";

function Search(props) {
  const { totalData, hasilPencarian } = props;
  const [search, setSearch] = useState("");

  const handeClick = () => {
    hasilPencarian(search)
};

  const onKeyDown = e => {
    if(e.key == "Enter") handeClick()
  }

  return (
    <>
      <input
        placeholder="Search"
        className="border border-black rounded-full px-3 py-1 text-sm"
        onChange={e => setSearch(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button className="px-3 mx-3 rounded-full border-black border" onClick={handeClick}>
        Search
      </button>
      <div>
        Ditemukan {totalData} data dengan pencarian kata {search}
      </div>
    </>
  );
}

export default Search;

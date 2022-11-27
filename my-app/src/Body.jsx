import React, {useState} from "react";
import Database from "./Database"
import SearchBox from "./List";

function Body() {

    let [animeList, updateAnime] = useState(Database);
    const [unchangedList] = useState(Database)

    function onSearchChange(event) {

        let filterAnime = unchangedList.filter(anime => {
            const filteredAnime = event.target.value.toLocaleLowerCase()
            return anime.name.toLocaleLowerCase().includes(filteredAnime)
        });

        updateAnime(filterAnime) 
    }

    return <div>
    <input 
        className='search-box'
        type="search"
        placeholder='search person' 
        onChange={onSearchChange}
    ></input>
        <SearchBox animeList={animeList}/>
    </div>
}

export default Body
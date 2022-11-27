import React from "react";

function SearchBox(props) {

    let animeList = props.animeList 
    return <div className="card-list">
         {animeList.map(anime => {
         const {name, email, id, nationality, money} = anime;
         return <div className="card-container">
            
            <h1 key={id}>NAME: { name}
            </h1>
            <p>Email: {email}</p>
            <p>Nationality: {nationality}</p>
            <p>Money: {money}</p>
         </div>
         })}
    </div>
}

export default SearchBox
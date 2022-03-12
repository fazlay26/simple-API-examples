const allPlayers = () => {
    const searchValue = document.getElementById('search-box');
    const searchText = searchValue.value;

    searchValue.value = ''
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.player))
}

const displayPlayer = players => {
    const playerContainer = document.getElementById('player-container');
    //console.log(players)
    for (const player of players) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card">
       <img src="${player.strThumb}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">${player.strPlayer}</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural
               lead-in to additional content. This content is a little bit longer.</p>
           <button onclick="playerDetails('${player.idPlayer}')" class="btn btn-warning">details</button>
           <button class="btn btn-danger">delete</button>
       </div>
   </div>`;
        playerContainer.appendChild(div)
    }
}

const playerDetails = id => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayerDetails(data.players[0]))
}

const displayPlayerDetails = details => {
    console.log(details)
    const singlePlayerDetails = document.getElementById('player-details');
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `<img src="${details.strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">${details.strPlayer}</p>
    </div>`;
    singlePlayerDetails.appendChild(div)

}

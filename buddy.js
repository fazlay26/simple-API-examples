const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    console.log(data.results)
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name:${buddy.name.first} ${buddy.name.last}
        Email:${buddy.email} 
        Phone:${buddy.phone}`;
        buddiesContainer.appendChild(p)
    }

}
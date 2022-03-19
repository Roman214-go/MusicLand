export let arrayOfTrackList = [] // Массив с треклистом альбома
export async function getRockPlaylist(url) {
    await fetch(`https://spotify23.p.rapidapi.com/albums/?ids=${url}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spotify23.p.rapidapi.com",
            "x-rapidapi-key": "c86bea617bmsh109655b98e3b1c1p1d42cajsn819c3defcd4f"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.albums[0].tracks.items.forEach(element => {
            arrayOfTrackList.push({album: `${data.albums[0].name}`,name : `${data.albums[0].artists[0].name}`, songs: `${element.name}`})            
        });
        document.querySelector('.playlists-rock-cont').innerHTML += `
        <div class="playlist">
        <a href="${data.albums[0].external_urls.spotify}" target="_blank"><img src="${data.albums[0].images[0].url}" alt="" class="album-cover"></a>
        <p class="album-name">${data.albums[0].name}</p> 
        <p class="artist-name">${data.albums[0].artists[0].name}</p>
        <div>
        `
        
        
    })
    .catch(err => {
        console.error('Лимит исчерпан');
    });
}
// Получаем информацию о плейлисте и создаем плейлист

export async function getRapPlaylist(url) {
    await fetch(`https://spotify23.p.rapidapi.com/albums/?ids=${url}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spotify23.p.rapidapi.com",
            "x-rapidapi-key": "c86bea617bmsh109655b98e3b1c1p1d42cajsn819c3defcd4f"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.albums[0].tracks.items.forEach(element => {
            arrayOfTrackList.push({album: `${data.albums[0].name}`,name : `${data.albums[0].artists[0].name}`, songs: `${element.name}`})            
        });
        document.querySelector('.playlists-rap-cont').innerHTML += `
        <div class="playlist">

        <a href="${data.albums[0].external_urls.spotify}" target="_blank"><img src="${data.albums[0].images[0].url}" alt="" class="album-cover"></a>
        <p class="album-name">${data.albums[0].name}</p>
        <p class="artist-name">${data.albums[0].artists[0].name}</p>
        <div>
        `
    })
    .catch(err => {
        console.error('Лимит исчерпан');
    });
}
// Получаем информацию о другом плейлисте и создаем плейлист



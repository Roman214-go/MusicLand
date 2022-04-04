import { getRockPlaylist, getRapPlaylist, arrayOfTrackList} from "./api.js";

let numOfRockPlaylist = 0
let numOfRapPlaylist = 0
const arrayRockPlaylist = ['4fc73QNw5EjIorFfZ6n6YG','0sbdMEPj1M3UG2gfKclNbo', '22CY2ZOM32r3CrDeX09NYI', '5dN7F9DV0Qg1XRdIgW8rke']
const arrayRapPlaylist = ['5rKmFf43tkwEabLAqx9d8J', '5PvosHtqCuqLK8A131lGZf', '2cWBwpqMsDJC1ZUwz813lo', '36S1wi12axIDqEdKSXB5xh']
let track = document.querySelector('.track-list')
let interval = setInterval(() => {
    if (numOfRapPlaylist == arrayRapPlaylist.length) {
        clearInterval(interval)
    }
    else if (numOfRockPlaylist < arrayRockPlaylist.length) {
    getRockPlaylist(arrayRockPlaylist[numOfRockPlaylist])
    numOfRockPlaylist++
}
    else {
        getRapPlaylist(arrayRapPlaylist[numOfRapPlaylist])
        numOfRapPlaylist++
    }   
}, 2000)

document.querySelector('.playlists-rock-cont').addEventListener('click', (event) => {
    let target = event.target
    if (target.className != "album-name") return;
    let albumList = '';
    arrayOfTrackList.forEach(element => {
        if (target.innerHTML == element.album) {
        albumList += `<li class="songs">${element.name} : ${element.songs}</li>`
        }
        track.innerHTML = albumList

    });
})

document.querySelector('.playlists-rap-cont').addEventListener('click', (event) => {
    let target = event.target
    if (target.className != "album-name") return;
    let albumList = '';
    arrayOfTrackList.forEach(element => {
        if (target.innerHTML == element.album) {
        albumList += `<li class="songs">${element.name} : ${element.songs}</li>`
        }
        track.innerHTML = albumList 
    });
})
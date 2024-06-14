// Ritika

let title = document.querySelector("#title");
let songItemContainer = document.querySelector(".songItemContainer");
let songItem = document.querySelector(".songItem");
let songName = document.querySelector(".songName");
let timestamp = document.querySelector(".timestamp");
let songIcon = document.querySelector(".songIcon");


document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);

    const playlistName = urlParams.get('name');

    console.log("Playlist Name:", playlistName);

    let title = document.querySelector("#title");

    try {
        const response = await fetch(`http://localhost:3000/playlist`);
        const result = await response.json();
        const playlists = result.contents.items;

        const currPlaylist = playlists.find(playlist => playlist.name === playlistName);

        if (currPlaylist) {
            title.innerHTML = currPlaylist.name;
            showData(currPlaylist);
        } else {
            console.error(`Playlist "${playlistName}" not found.`);
        }
    } catch (error) {
        console.error(error);
    }
});

let showData = (curr_playlist) => {
    songItemContainer.innerHTML = "";

    curr_playlist.music.forEach((song) => {
        let songItem = document.createElement("div");
        songItem.classList.add("songItem");

        let songIcon = document.createElement("img");
        songIcon.classList.add("songIcon");
        songIcon.src = song.img;
        songItem.appendChild(songIcon);

        let songName = document.createElement("span");
        songName.classList.add("songName");
        songName.innerHTML = song.name;
        songItem.appendChild(songName);

        let timestamp = document.createElement("span");
        timestamp.classList.add("timestamp");
        timestamp.innerHTML = song.duration;
        songItem.appendChild(timestamp);

        songItemContainer.appendChild(songItem);
    });
}


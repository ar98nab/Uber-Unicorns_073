document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const playlistName = urlParams.get('name');

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

let audioElement = new Audio(); // Initialize Audio element
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = document.querySelectorAll(".songItem");
let songs = [];
let songIndex = 0;

// Function to display songs in the playlist
let showData = (currPlaylist) => {
    let songItemContainer = document.querySelector(".songItemContainer");
    songItemContainer.innerHTML = "";

    currPlaylist.music.forEach((song, index) => {
        let songItem = document.createElement("div");
        songItem.classList.add("songItem");

        let songIcon = document.createElement("img");
        songIcon.classList.add("songIcon");
        songIcon.src = song.img;
        songItem.appendChild(songIcon);

        let songlistplay = document.createElement("span");
        songlistplay.classList.add("songlistplay");

        let songName = document.createElement("span");
        songName.classList.add("songName");
        songName.innerHTML = song.name;
        songlistplay.appendChild(songName);

        let timestamp = document.createElement("span");
        timestamp.classList.add("timestamp");
        timestamp.innerHTML = song.duration + " ";

        
        let itag = document.createElement("i");
        itag.classList.add("far");
        itag.classList.add("songItemPlay");
        itag.classList.add("fa-play-circle");
        itag.dataset.index = index; // Store index in data attribute for identification
        timestamp.appendChild(itag);

        songlistplay.appendChild(timestamp);
        songItem.appendChild(songlistplay);

        songItemContainer.appendChild(songItem);

        // Push song details into songs array for later use
        songs.push({
            songName: song.name,
            filePath: song.url,
            coverPath: song.img
        });
    });

    // Attach event listeners for song play buttons
    attachSongPlayEvents();
}

// Function to attach event listeners for song play buttons
let attachSongPlayEvents = () => {
    let songItemPlays = document.querySelectorAll('.songItemPlay');

    songItemPlays.forEach((playButton) => {
        playButton.addEventListener('click', (e) => {
            let index = e.target.dataset.index;
            playSong(index);
        });
    });
}

// Function to play the selected song
let playSong = (index) => {
    // Reset all play buttons
    makeAllPlays();

    // Update UI for the selected song
    songIndex = parseInt(index);
    masterSongName.innerText = songs[index].songName;
    audioElement.src = songs[index].filePath;

    // Play the selected song
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

    // Update progress bar and listen for time updates
    audioElement.addEventListener('timeupdate', updateProgressBar);
}

// Function to update progress bar based on audio current time
let updateProgressBar = () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
}

// Function to handle master play/pause button click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // Play the audio
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        // Pause the audio
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Function to reset all song play buttons
let makeAllPlays = () => {
    let songItemPlays = document.querySelectorAll('.songItemPlay');
    songItemPlays.forEach((playButton) => {
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
    });
}

// Function to handle seek bar change
myProgressBar.addEventListener('change', () => {
    let seekTime = myProgressBar.value * audioElement.duration / 100;
    audioElement.currentTime = seekTime;
});

// Event listener for previous song button
document.getElementById('previous').addEventListener('click', () => {
    let newIndex = songIndex - 1;
    if (newIndex < 0) {
        newIndex = songs.length - 1;
    }
    playSong(newIndex);
});

// Event listener for next song button
document.getElementById('next').addEventListener('click', () => {
    let newIndex = songIndex + 1;
    if (newIndex >= songs.length) {
        newIndex = 0;
    }
    playSong(newIndex);
});
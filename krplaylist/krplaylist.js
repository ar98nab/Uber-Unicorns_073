document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('krcreatePlaylistModal');
    const closeModalElements = document.querySelectorAll('.krclose');
    const addSongButton = document.getElementById('kraddSong');
    const songsContainer = document.getElementById('krsongsContainer');
    const playlistList = document.getElementById('krr-playlists');
    const playlistContainer = document.getElementById('krr-playlist-container'); // Added for playlist display
  
    const songs = [
        { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
        { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
        { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
        { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
        { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
        { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
        { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
        { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
    ];
  
    
    const populateSongOptions = () => {
        const songSelect = document.createElement('select');
        songSelect.name = 'krsongs[]';
        songSelect.innerHTML = '<option value="">Select a song</option>';
        songs.forEach(song => {
            const option = document.createElement('option');
            option.value = song.filePath; 
            option.textContent = song.songName; 
            songSelect.appendChild(option);
        });
        return songSelect;
    };

    const addSongInput = () => {
        const newSongInput = document.createElement('div');
        newSongInput.classList.add('krsong-input');
        newSongInput.innerHTML = `
            <label for="krsong${songCount}">Song:</label>
        `;
        newSongInput.appendChild(populateSongOptions());
        songsContainer.appendChild(newSongInput);
    };
  
    let songCount = 1;
 
    addSongButton.addEventListener('click', () => {
        songCount++;
        addSongInput();
    });
  
   
    closeModalElements.forEach(el => {
        el.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    document.getElementById('krcreatePlaylistForm').addEventListener('submit', (e) => {
        e.preventDefault();
  
        const playlistName = document.getElementById('krplaylistName').value;
        const songInputs = document.querySelectorAll('[name="krsongs[]"]');
        const selectedSongs = Array.from(songInputs).map(input => {
            const selectedOption = input.options[input.selectedIndex];
            return {
                songName: selectedOption.textContent,
                filePath: selectedOption.value
            };
        });
  
        if (playlistName && selectedSongs.length > 0) {
            const playlistItem = document.createElement('li');
            playlistItem.classList.add('krr-playlist-item');
            playlistItem.innerHTML = `
                <span class="krr-playlist-name">${playlistName}</span>
                <ul class="krr-song-list"></ul>
            `;
  
            const songList = playlistItem.querySelector('.krr-song-list');
            selectedSongs.forEach(song => {
                const songItem = document.createElement('li');
                songItem.textContent = song.songName;
                songList.appendChild(songItem);
            });
  
            playlistList.appendChild(playlistItem);
  
            document.getElementById('krcreatePlaylistForm').reset();
            while (songsContainer.children.length > 1) {
                songsContainer.removeChild(songsContainer.lastChild);
            }
  
            modal.style.display = 'none';
            alert('Playlist created successfully!');
        } else {
            alert('Please enter a playlist name and select at least one song.');
        }
    });
  
 
    document.getElementById('krr-create-playlist').addEventListener('click', () => {
        modal.style.display = 'block';
    });
  
    const addSongToLeftBox = (song) => {
        const songItem = document.createElement('div');
        songItem.classList.add('krr-song-item');
        songItem.innerHTML = `
            <img src="${song.coverPath}" alt="${song.songName}">
            <div class="krr-song-details">
                <h3>${song.songName}</h3>
                <p>${song.artist}</p>
            </div>
            <button class="krr-add-to-playlist">Add to Playlist</button>
        `;
        playlistContainer.appendChild(songItem);
    };
  
    
    addSongToLeftBox(songs[0]);
  });
  
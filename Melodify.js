//Arnab
let loginbutton = document.querySelector(".login")
loginbutton.addEventListener("click", function () {
    window.location.href = "Login/Login.html"
})

//Om
let signupbutton = document.querySelector(".Signup")
signupbutton.addEventListener("click", function () {
    window.location.href = "Signup/Signup.html"
})
// Krushna

let searchbar = document.getElementById('searchh');

searchbar.addEventListener('click', function () {
    window.location.href = "searchbar_in_sidebar/sidebarsearchbar.html";
});
document.addEventListener('DOMContentLoaded', () => {
    const createPlaylistBtn = document.getElementById('krcr');
  
    
    createPlaylistBtn.addEventListener('click', () => {
      alert('Log in to create and share playlists.');
    });
  });
  
// Sagar

// Ritika
let container = document.querySelector(".playlist");
let loadData;

let getdata = async () => {
    // const url = 'https://spotify-scraper.p.rapidapi.com/v1/home/section?sectionId=0JQ5DAuChZYPe9iDhh2mJz';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': 'e9511bb0bbmsh56bfe3b24dca840p12de92jsne0ef745b5b8e',
    //         'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
    //     }
    // };

    try {
        const response = await fetch(`http://localhost:3000/playlist`);
        const result = await response.json();
        loadData = result;
        showData(loadData.contents.items);
    } catch (error) {
        console.error(error);
    }
}

let showData = async (arr) => {
    container.innerHTML = "";

    // Display only the first five items
    const firstFive = arr.slice(0, 5);

    firstFive.forEach((ele) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let name = document.createElement("h5");
        name.innerHTML = ele.name;
        name.classList.add("text-white")

        let description = document.createElement("p");
        description.innerHTML = ele.description;
        description.classList.add("text-white-50")
        description.classList.add("p-0")

        let images = document.createElement("img");
        images.src = ele.images[0][0].url;

        let playbtn = document.createElement("div");
        playbtn.classList.add("playBtn");

        let greenBtn = document.createElement("img");
        greenBtn.src = "https://freepngimg.com/download/icon/video/7410-play-button-green.png"

        playbtn.append(greenBtn)

        card.append(images, name, description, playbtn);
        card.addEventListener("click", () => redirectToPlaylist(ele.name));

        container.append(card);
    });

  
}

function   redirectToPlaylist (playlistName) {
    window.location.href = `MelodifyPlaylist/playlist.html?name=${encodeURIComponent(playlistName)}`;
}

// let showall = document.querySelector("#showall");
// showall.addEventListener("click", redirectToPlaylist)



// export { getdata };
getdata();
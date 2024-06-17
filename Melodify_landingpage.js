let createPlay=document.querySelector(".createplayar")
createPlay.addEventListener("click",function(){
    window.location.href="/pop up/popup.html"
})

//Arnab
let loginbutton = document.querySelector(".login")
loginbutton.addEventListener("click", function () {
    window.location.href = "/Login/Login.html"
})

//Om
let signupbutton=document.querySelector(".Signar")
signupbutton.addEventListener("click",function(){
    window.location.href="/Signup/Signup.html"
})

//ritika
let container = document.querySelector(".playlist");
let loadData;

let getdata = async () => {

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

        let name = document.createElement("h6");
        name.innerHTML = ele.name;
        name.classList.add("text-white")

        let description = document.createElement("p");
        description.innerHTML = ele.description;
        description.textContent = ele.description.slice(0, 40) + '...';
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
    window.location.href = `/pop up/popup.html`;
}

getdata();
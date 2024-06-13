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
        let name = document.createElement("h6");
        name.innerHTML = ele.name;
        let description = document.createElement("p");
        description.innerHTML = ele.description;
        let images = document.createElement("img");
        images.src = ele.images[0][0].url;

        let playbtn = document.createElement("div");
        playbtn.classList.add("playBtn");

        let greenBtn = document.createElement("img");
        greenBtn.src="https://freepngimg.com/download/icon/video/7410-play-button-green.png"
             
        playbtn.append(greenBtn)

        card.append(images, name, description, playbtn);
        container.append(card);
    });

}

getdata();

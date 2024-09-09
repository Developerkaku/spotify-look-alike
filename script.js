
//Random color accent to the play list

// const pickable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
// var aa = Math.round(Math.random() * 2);
// var color = "#";

// for (let i = 0; i < 6; i++) {
//     let bb = Math.round(Math.random() * 15);
//     color += (i == aa * 2) || (i == aa * 2 + 1) ? "f" : pickable[bb];
// }
// let root = document.querySelector(":root");
// root.style.setProperty('--accent', color);

//Missing functionality
function a() {
    alert("This functionality is yet to be configured !!")
}

//Revealing and closing the menu
function s(condition) {
    let menu = document.getElementsByClassName("main-left")[0];
    menu.style.left = (condition) ? "0" : "-76%";
}

//Event listners bolte !!!! 

document.getElementById("go-back").addEventListener("click", a);
document.getElementById("go-fwd").addEventListener("click", a);

document.getElementById("login").addEventListener("click", a);
document.getElementById("sign-up").addEventListener("click", a);

document.getElementById("previous").addEventListener("click", () => playMusic(currentSong.title, "previous"));
document.getElementById("play-pause").addEventListener("click", () => playMusic(currentSong.title, "play-pause"));
document.getElementById("next").addEventListener("click", () => playMusic(currentSong.title, "next"));

document.getElementById("play-list-play-btn").addEventListener("click", () => {
    playMusic((currentSong.title) ? currentSong.title : songsNames[0], "play-pause");
})
//Seek bar seeking Event listner
document.getElementsByClassName("seek-bar")[0].addEventListener("click", (e) => {
    updateSeek(e.clientX - e.target.getBoundingClientRect().left);
});

//Song Variables
let currentSong = new Audio();
let previuosSong = new Audio();
let songDuration;

//Event listener for the song so that the player looks alive !!
currentSong.addEventListener("timeupdate", () => {
    updateSeek();
});

function updateSeek(position = 0) {

    songDuration = currentSong.duration;

    let seekBarWidth = document.getElementsByClassName("seek-bar")[0].clientWidth;
    let seekCircle = document.getElementsByClassName("seek-circle")[0];

    if (position) {
        let ct = (position * songDuration) / seekBarWidth;
        currentSong.currentTime = ct;
    } else {
        position = (currentSong.currentTime * seekBarWidth) / songDuration;
    }

    seekCircle.style.left = position - seekCircle.clientWidth + "px";

    document.getElementById("seek-bar-progress").style.width = position + "px";
    document.getElementById("curr-time").innerHTML = Math.round(currentSong.currentTime / 60) + ":" + Math.round(currentSong.currentTime % 60);
    document.getElementById("duration").innerHTML = Math.round(currentSong.duration / 60) + ":" + Math.round(currentSong.duration % 60);

    if (currentSong.duration == currentSong.currentTime) {
        playMusic(currentSong.title, "next");
    }
}

//Function to play the music and perform all the other operations on the music 
const playMusic = (songName, string = "") => {
    const player = document.querySelector(".player");

    if (window.getComputedStyle(player).bottom != "0px") {
        player.style.bottom = "0";
        // const songCards = document.querySelectorAll(".song-card");
        // songCards[songCards.length - 1].style.borderBottom = "15vh";
        // document.querySelector(".container").style.marginBottom = "15%";
        let extDiv = document.createElement("div");
        extDiv.className = "song-card";
        extDiv.style.height = "6.75rem";
        document.querySelector(".songs-container").appendChild(extDiv);
    }

    let index = songsNames.indexOf(songName);
    let playPause = document.getElementById("play-pause");
    let playListBtn = document.getElementById("play-list-play-btn");
    let playBtns = document.getElementsByClassName("play");
    let pauseBtns = document.getElementsByClassName("pause");

    switch (string) {

        case "next": {
            index++;
            break;
        }

        case "previous": {
            index--;
            break;
        }

        case "forward": {
            currentSong.currentTime += 3;
            break;
        }

        case "backward": {
            currentSong.currentTime -= 3;
            break;
        }

        case "play-pause": {//change the image

            if (playPause.dataset.songState === "paused") {
                currentSong.play();
                playBtns[1].style.display = "none";
                pauseBtns[1].style.display = "block";

                playBtns[0].style.display = "none";
                pauseBtns[0].style.display = "block";
                playListBtn.title = "pause NCS";
                playPause.dataset.songState = "playing";
                break;
            }
            currentSong.pause();
            pauseBtns[1].style.display = "none";
            playBtns[1].style.display = "block";

            pauseBtns[0].style.display = "none";
            playBtns[0].style.display = "block";
            playListBtn.title = "play NCS";
            playPause.dataset.songState = "paused";
            break;
        }

        case "": {

        }
    }
    if (index >= 0 && index < songsNames.length) {
        newSong = new Audio(`songs/${songsNames[index]}/audio.mp3`);
    } else if (index < 0) {
        currentSong.currentTime = 0;
    } else if (index == songsNames.length) {
        currentSong.currentTime = songDuration
    }

    if (newSong.src === currentSong.src) {
        return;
    }


    playBtns[1].style.display = "none";
    pauseBtns[1].style.display = "block";

    playBtns[0].style.display = "none";
    pauseBtns[0].style.display = "block";
    playListBtn.title = "pause NCS";

    document.getElementById("player-img").src = `songs/${songsNames[index]}/img.jpg`
    document.getElementsByClassName("song-name")[0].innerHTML = songsNames[index].split("@")[0];

    currentSong.src = newSong.src;
    currentSong.title = songsNames[index];

    currentSong.play();
}

var songsNames = new Array();
const imgsIds = new Object();

// Not being used in this script but will update soon
var imgFileTypes = new Array(".png", ".jpg", ".jpeg");
var audioFileTypes = new Array(".ogg", "mp3");

const owner = 'Developerkaku';
const repo = 'spotify-lool-alike';
const folderPath = 'songs/';

//Kind of main function to  generate all the songs names form the database(github repo)
async function getSongsNames() {
    // let a = await fetch(`songs/`);
    // console.log(a)
    // let b = await a.text();

    //getting the songs list and copying it in the songsNames array
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Iterate through each item in the folder
            let iterator = 0;
            data.forEach(item => {
                if (item.type === 'file') {
                    console.log(`File: ${item.name} - URL: ${item.download_url}`);
                    // Optionally, fetch the content of the file
                    fetchFileContent(item.download_url);
                } else if (item.type === 'dir') {
                    songsNames[iterator] = item.name;
                    iterator++;
                    console.log(iterator)
                    // fetchDirectoryContent(item.path);
                }
            });
        })
        .catch(error => console.error('Error fetching file list:', error));
console.log(songsNames);
    // let div = document.createElement("div");
    // div.innerHTML = b;
    // let anchors = div.getElementsByTagName("a");
    // for (const iterator of anchors) {
    //     if (iterator.title != "" && iterator.title != "..") {
    //         songsNames.push(iterator.title);
    //     }
    // }

    displaySongs();
}
function fetchFileContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(fileContent => console.log('File Content:', fileContent))
        .catch(error => console.error('Error fetching file content:', error));
}

function fetchDirectoryContent(directoryPath) {
    const dirUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${directoryPath}`;
    fetch(dirUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the contents of the subdirectory
            console.log(`Contents of ${directoryPath}:`, data);
        })
        .catch(error => console.error('Error fetching directory content:', error));
}

//Function to handle image loading errors
// function loadImage(src, imgExtId){
//     // alert("asas" + src + imgExtId);
//     let image = new Image();
//     image.src = src+`img${imgFileTypes[imgExtId]}`;
//     image.addEventListener("error", ()=>{
//         // imgExtId++;
//         if(imgExtId < imgFileTypes.length-1) {
//             return loadImage(src, imgExtId++);
//         }
//         // alert("checkbro"+src);
//         return src+`img${imgFileTypes[imgExtId]}`;
//     });
// }

// Getting all the song files and images Dynamically
//POPULATING THE SONGS FROM THE PLAY LIST
async function displaySongs() {
    let container = document.querySelector(".songs-container");

    // let playListBtn = document.getEleme

    for (let iterator = 0; iterator < songsNames.length; iterator++) {

        let div = document.createElement("div");
        div.className = "song-card";
        div.id = iterator;
        div.addEventListener("click", (e) => {
            playMusic(songsNames[div.id])
        })

        //numbering div containing play button
        let numDiv = document.createElement("div");
        numDiv.className = "numDiv inside-txt";
        numDiv.innerHTML = iterator + 1;

        //cover-image
        let imgContainer = document.createElement("div");
        imgContainer.className = "cover-img";

        let img = document.createElement("img");
        img.src = `songs/${songsNames[iterator]}/img.jpg`;

        imgContainer.appendChild(img);

        //IF IMG NOT FOUND !!
        // let a = await fetch(`songs/${songsNames[iterator]}/img.png`);
        // let b = await a.text();
        // let info = document.createElement('div');
        // info.innerHTML = b;
        // let error = info.getElementsByTagName("pre");

        // if (error[0] && error[0].innerHTML.startsWith("Cannot")) {
        //     img.src = `songs/s1/img.png`
        // }

        //Title
        let title = document.createElement("div");
        title.className = "title";

        let songName = document.createElement("span");
        songName.innerHTML = songsNames[iterator].split("@")[0];
        let creator = document.createElement("span");
        creator.className = "inside-txt";

        // const creatorNames = songsNames[iterator].split("@")[1].split(",");
        // alert(creatorNames.length);
        // creatorNames.forEach(name => {
        //     let anchor = document.createElement("a");
        //     anchor.href = "";
        //     anchor.innerHTML = name;
        //     creator.appendChild(anchor);
        //     creator.innerHTML += ',';
        // });
        let anchor = document.createElement("a");
        anchor.href = "";
        anchor.innerHTML = (songsNames[iterator].split("@")[1] != undefined) ? songsNames[iterator].split("@")[1] : "";
        creator.appendChild(anchor);

        title.append(songName, creator);

        div.append(numDiv, imgContainer, title)
        container.appendChild(div);
    }
}

//CALLING THE KINDA main FUNCTION !!!
getSongsNames();

const title = document.querySelector('#title>h1');
const titleContainer = document.querySelector('#title');

function resize_to_fit() {
    // alert("as");
    let fontSize = window.getComputedStyle(title).fontSize;
    title.style.fontSize = (parseFloat(fontSize) - 1) + 'px';
    //   alert(titleContainer.clientHeight);
    //   alert(fontSize +" "+ titleContainer.clientHeight )
    if (title.clientHeight >= ((titleContainer.clientHeight) / 2)) {
        // alert("in");
        resize_to_fit();
    }
}
resize_to_fit();

console.log("Welcome to Spotify");
// Initialize the variables
let songIndex = 0;
let audioELement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Love Story - Taylor Swift", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "If I Lose Myself - One Republic", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Photograph - Ed Sheeran", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Like I'm Gonna Lose You - Meghan Trainor", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Dark Horse - Katy Perry", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Faded - Alan Walker", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "A Thousand Years - Christina Perri", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Paradise - Coldplay", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "Closer - The Chainsmokers", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
    { songName: "Twenty Two - Taylor Swift", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})
//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioELement.paused || audioELement.currentTime <= 0) {
        audioELement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioELement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioELement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioELement.currentTime / audioELement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioELement.currentTime = myProgressBar.value * audioELement.duration / 100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-pause-circle');

    })

}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{

        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioELement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

        audioELement.currentTime = 0;
        audioELement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioELement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioELement.currentTime = 0;
    audioELement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
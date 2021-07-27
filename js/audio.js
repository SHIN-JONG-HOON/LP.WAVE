$(function(){
   $(".img-container").click(function(){
   $(".navigation").toggleClass('play');
});
// --------------------------------------------------------------

const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const artist = document.querySelector('#artist')
   
   
// --------------------------------------------------------------
// --------------------------------------------------------------
//song titles
   
const songs = ['FLOWER','ASHES','KISS ME MORE']
let songIndex = 0
   
loadSong(songs[songIndex])
   
   //Update song details
function loadSong(song) {
   title.innerText = song
   audio.src = `music/${song}.mp3`
   cover.src = `img/${song}.jpg`
}

const artists = ['Johnny Stimson','Stellar','Doja Cat']
let nameIndex = 0

loadName(artists[nameIndex])

function loadName(name) {
   artist.innerText = name ;
}


function prevName(){
  nameIndex--

  if(nameIndex < 0 ){
    nameIndex = artists.length - 1
  }
  
  loadName(artists[nameIndex])
}

function nextName(){
   nameIndex++;

  if(nameIndex > artists.length -1) {
   nameIndex = 0
}
  
   loadName(artists[nameIndex])

}





function playSong() {
   musicContainer.classList.add('play')
   musicContainer.volume = 0.2;
   playBtn.querySelector('i.fas').classList.remove('fa-play')
   playBtn.querySelector('i.fas').classList.add('fa-pause')

   audio.play()

}

function pauseSong() {
   musicContainer.classList.remove('play')
   playBtn.querySelector('i.fas').classList.add('fa-play')
   playBtn.querySelector('i.fas').classList.remove('fa-pause')

   audio.pause()
}

function prevSong(){
   songIndex--;

   if(songIndex < 0 ){
       songIndex = songs.length - 1
   }
   
   loadSong(songs[songIndex])
   
   playSong()
}
function nextSong(){
    songIndex++

    if(songIndex > songs.length -1) {
        songIndex = 0
    }
    
    loadSong(songs[songIndex])

    playSong()
}

// Event Listeners
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
});


// Change song event 

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

prevBtn.addEventListener('click', prevName)
nextBtn.addEventListener('click', nextName)
// --------------------------------------------------------------
audio.addEventListener('ended', nextSong)

audio.play(); 

});


   
   
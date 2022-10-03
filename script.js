console.log("Welcome to Gaana")

//initializing the variables
let songIndex = 0;
let radioelement = new Audio('1.mp3');
let masterclass= document.getElementsById("masterclass");
let myprogressbar = document.getElementsById("myprogressbar");
let songs = [
    {songname:"nature" ,filepath:"1.mp3",coverpath:"1img.jpg"},
    {songname:"nature" ,filepath:"1.mp3",coverpath:"1img.jpg"},
    {songname:"nature" ,filepath:"1.mp3",coverpath:"1img.jpg"},
    {songname:"nature" ,filepath:"1.mp3",coverpath:"1img.jpg"},
    {songname:"nature" ,filepath:"1.mp3",coverpath:"1img.jpg"},
    {songname:"nature" ,filepath:"1.mp3",coverpath:"1img.jpg"},
]

//audioelement.play();

//handle play/pause click
masterclass.addEventListener('click',()=>{
    if(radioelement.paused || radioelement.currentTime<=0){
        radioelement.play();
        masterclass.classList.remove('fa-play-circle');
        masterclass.classList.add('fa-pause-circle');
    }
    else{
        radioelement.pause();
        masterclass.classList.remove('fa-play-circle');
        masterclass.classList.add('fa-pause-circle');
    }
})

//listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seeker
})
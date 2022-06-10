let previous = document.querySelector('span#pre')
let play = document.querySelector('span#play')
let next = document.querySelector('span#next')
let title = document.querySelector('p#title')
let slider = document.querySelector('input#duration_slider')
let recent_volume = document.querySelector('input#volume')
let volume_show = document.querySelector('p#volume_show');

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Billie Eilish - I Love you",
     path: "./audio/iloveu.mpeg",
     img: "./imagens/billie.jpg",
     singer: "1"
   },
   {
     name: "Arctic Monkeys - Do I Wanna Know",
     path: "./audio/doiwanna.mpeg",
     img: "./imagens/ac.jpg",
     singer: "2"
   },
   {
     name: "Arctic Monkeys - I Wanna Be Yours",
     path: "./audio/iwannabeyours.mpeg",
     img: "./imagens/ac.jpg",
     singer: "3"
   },
   {
     name: "Billie Eilish - Lovely",
     path: "./audio/lovely.mpeg",
     img: "./imagens/lovely.jpg",
     singer: "4"
   },
   {
     name: "Delacruz - Me Leva",
     path: "./audio/delacruz.mpeg",
     img: "./imagens/delacruz.jpg",
     singer: "5"
   },
   {
    name: "Metallica - Nothing Else Metters",
    path: "./audio/metallica.mpeg",
    img: "./imagens/metallica.jpg",
    singer: "6"
  },
  {
    name: "Natiruts - Sorri, Sou Rei",
    path: "./audio/sorri.mpeg",
    img: "./imagens/sorri.jpg",
    singer: "7"
  },
  {
    name: "Poesia Acústica 3",
    path: "./audio/poesia.mpeg",
    img: "./imagens/poesia.jpg",
    singer: "8"
  },
  {
    name: "Rubel - Partilhar",
    path: "./audio/partilhar.mpeg",
    img: "./imagens/rubel.jpg",
    singer: "9"
  },
  {
    name: "Tom Jobim - Pela Luz Dos Olhos Teus",
    path: "./audio/tomjobim.mpeg",
    img: "./imagens/tomjobim.jpg",
    singer: "10"
  },
  {
    name: "Tribalistas - Velha Infância",
    path: "./audio/tribalistas.mpeg",
    img: "./imagens/tribalistas.jpg",
    singer: "11"
  },
  {
    name: "Ali Gatie - It's You",
    path: "./audio/aligatie.mpeg",
    img: "./imagens/ali_gatie.webp",
    singer: "12"
  }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<span class="material-symbols">pause</span>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<span class="material-symbols">play_arrow</span>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

function clique() {
    index_no = 0
    load_track(index_no)
    playsong()
}

function clique2() {
    index_no = 1
    load_track(index_no)
    playsong()
}

function clique3() {
    index_no = 2
    load_track(index_no)
    playsong()
}

function clique4() {
    index_no = 3
    load_track(index_no)
    playsong()
}

function clique5() {
    index_no = 4
    load_track(index_no)
    playsong()
}

function clique6() {
    index_no = 5
    load_track(index_no)
    playsong()
}

function clique7() {
    index_no = 6
    load_track(index_no)
    playsong()
}

function clique8() {
    index_no = 7
    load_track(index_no)
    playsong()
}

function clique9() {
    index_no = 8
    load_track(index_no)
    playsong()
}

function clique10() {
    index_no = 9
    load_track(index_no)
    playsong()
}

function clique11() {
    index_no = 10
    load_track(index_no)
    playsong()
}

function clique12() {
    index_no = 11
    load_track(index_no)
    playsong()
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<span class="material-symbols-rounded">play_arrow</span>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

let navMobile = document.querySelector('nav');
let hamburger = document.querySelector('.menu_icon');
hamburger.addEventListener('click', function (e){
	if(hamburger.classList.contains('fa-bars')){
		hamburger.classList.remove('fa-bars')
		hamburger.classList.add('fa-times')
		navMobile.classList.add('scrolled')
	}
	else{
		hamburger.classList.remove('fa-times')
		hamburger.classList.add('fa-bars')
	}
})



var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#cac9c9',
	progressColor: '#5B4DBC',
	barWidth: '5',
	backend: 'MediaElement',
	mediaControls: false,
	cursorWidth: 0,
	
});
wavesurfer.load("/audio/Rockin' Robin Demo.mp3");
wavesurfer.on('ready', function () {
    wavesurfer.pause();
});

document.querySelector('[data-action="playPause"]')
.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));


let play_pause = document.querySelector('.audio-control');
play_pause.addEventListener('click', function (e){
	wavesurfer.playPause.bind(wavesurfer)
	if(play_pause.classList.contains('fa-play-circle')){
		play_pause.classList.remove('fa-play-circle')
		play_pause.classList.add('fa-pause-circle')
	}
	else{
		play_pause.classList.remove('fa-times')
		play_pause.classList.add('fa-play-circle')
	}
})



var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: '#cac9c9',
	progressColor: '#5B4DBC',
	barWidth: '5',
	backend: 'MediaElement',
	mediaControls: false,
	cursorWidth: 0,
	
});
wavesurfer2.load("/audio/Christmas Compilation.mp3");
wavesurfer2.on('ready', function () {
    wavesurfer2.pause();
});

document.querySelector('[data-action="playPause2"]')
.addEventListener('click', wavesurfer2.playPause.bind(wavesurfer2));


let play_pause2 = document.querySelector('.audio-control2');
play_pause2.addEventListener('click', function (e){
	wavesurfer2.playPause.bind(wavesurfer2)
	if(play_pause2.classList.contains('fa-play-circle')){
		play_pause2.classList.remove('fa-play-circle')
		play_pause2.classList.add('fa-pause-circle')
	}
	else{
		play_pause2.classList.remove('fa-times')
		play_pause2.classList.add('fa-play-circle')
	}
})

var wavesurfer3 = WaveSurfer.create({
    container: '#waveform3',
    waveColor: '#cac9c9',
	progressColor: '#5B4DBC',
	barWidth: '5',
	backend: 'MediaElement',
	mediaControls: false,
	cursorWidth: 0,
	
});
wavesurfer3.load("/audio/Orange Blossom Demo.mp3" );
wavesurfer3.on('ready', function () {
    wavesurfer3.pause();
});

document.querySelector('[data-action="playPause3"]')
.addEventListener('click', wavesurfer3.playPause.bind(wavesurfer3));


let play_pause3 = document.querySelector('.audio-control3');
play_pause3.addEventListener('click', function (e){
	wavesurfer3.playPause.bind(wavesurfer3)
	if(play_pause3.classList.contains('fa-play-circle')){
		play_pause3.classList.remove('fa-play-circle')
		play_pause3.classList.add('fa-pause-circle')
	}
	else{
		play_pause3.classList.remove('fa-times')
		play_pause3.classList.add('fa-play-circle')
	}
})


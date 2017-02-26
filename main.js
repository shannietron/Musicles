var Myo = require('Myo');
// var normalize = require('feature-scaling');
var abs = require( 'math-abs' );
var d3 = require('d3');
var Soundfont = require('soundfont-player');
console.log("banououououou");
// var path_sound= '/soundfont/'

console.log(Myo);
var ac = new AudioContext();
var avg= 0;
var velocity=0;
var volumeToggle = 1;
var instrIndx=0;
Myo.connect();
// console.log("HELLO")
Myo.on('connected', function(){
  console.log('connected!', this.id)
  this.streamEMG(true);
  

	});
//A0:21,A1:33,A2:45,A3:57,A4:69,A5:81,A6:93,A7:105,Ab1:32,Ab2:44,Ab3:56,Ab4:68,Ab5:80,Ab6:92,Ab7:104,
//B0:23,B1:35,B2:47,B3:59,B4:71,B5:83,B6:95,B7:107,Bb0:22,Bb1:34,Bb2:46,Bb3:58,Bb4:70,Bb5:82,Bb6:94,Bb7:106,
//C1:24,C2:36,C3:48,C4:60,C5:72,C6:84,C7:96,C8:108,
//D1:26,D2:38,D3:50,D4:62,D5:74,D6:86,D7:98,Db1:25,Db2:37,Db3:49,Db4:61,Db5:73,Db6:85,Db7:97,
//E1:28,E2:40,E3:52,E4:64,E5:76,E6:88,E7:100,Eb1:27,Eb2:39,Eb3:51,Eb4:63,Eb5:75,Eb6:87,Eb7:99,
//F1:29,F2:41,F3:53,F4:65,F5:77,F6:89,F7:101,
//G1:31,G2:43,G3:55,G4:67,G5:79,G6:91,G7:103,Gb1:30,Gb2:42,Gb3:54,Gb4:66,Gb5:78,Gb6:90,Gb7:102,

function song(){
	// console.log(Math.ceil(avg))
	console.log(velocity)
	var path= Soundfont.nameToUrl('acoustic_grand_piano',null,'ogg')
	var opts= {gain: velocity}
	Soundfont.instrument(ac, path).then(function(grand){
		grand.play(Math.ceil(avg));
	})
	// MIDI.noteOn(0, Math.ceil(avg), velocity, 0.001);
}

Myo.on('emg', function(data){
	var absolute = Math.abs(data);
	var linearScale = d3.scaleLinear()
                           .domain([0,15])
                           .range([41,76]);
	var total= 0;
    //var normalized = normalize(absolute);
    for (var i = 0, len = data.length; i < 8; i++) {
  		data[i]=Math.abs(data[i]);
  		data[i]= linearScale(data[i]);
  		total += data[i];

	}
	avg= data[2]

});
var id = setInterval(song, 200);


Myo.on('imu', function(data){
	var last= this.lastIMU.accelerometer;
	// console.log(last)
	var linearScale = d3.scaleLinear()
	                           .domain([-2,2])
	                           .range([0,120]);


  		last.x= Math.ceil(linearScale(last.x));
  		velocity= 120-last.x;
  		var linearScale2 = d3.scaleLinear()
	                           .domain([0,120])
	                           .range([0,1]);
       	velocity=linearScale2(velocity)

});

console.log("boop")



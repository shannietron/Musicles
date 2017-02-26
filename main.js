var Myo = require('Myo');
// var normalize = require('feature-scaling');
var abs = require( 'math-abs' );
var d3 = require('d3');

console.log(Myo);
var chord= [0, 0, 0, 0, 0, 0, 0 ]

var avg= 150;
var min= 300; 
var max=0;
var velocity=0;
var volumeToggle = 1;
var instrIndx=0;
Myo.connect();
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
		// console.log(velocity)
		
		MIDI.noteOn(0, Math.ceil(avg),velocity, 0.1);
		// MIDI.noteOn(0, chord[Math.ceil(avg)],velocity, 0.1)

		// console.log(chord[Math.ceil(avg)]);


	}


	
	//Flex was picked to allow the user to control the pitch of the sound they want to hear by flexing
	Myo.on('flex_strength', function(val){

				avg=Math.ceil(val*500);
				min= avg<min?avg:min;

				max= avg>max?avg:max;
				var linearScale = d3.scaleLinear()
	                           .domain([min,max])
	                           .range([48,107]);
               	avg= linearScale(avg)
               	// console.log("Min "+ min + "Max "+ max +"Avg "+ avg)
				console.log(Math.ceil(avg));
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
		
	});

console.log("boop")

var chords = [48, 52, 55, 60, 64, 67, 72,50, 53, 57, 62, 65, 69, 74,52, 55, 59, 64, 67, 71, 76,41, 45, 48, 53, 57, 60, 65,43, 47, 50, 55, 59, 62, 67,45, 48, 52, 57, 60, 64, 69,47, 50, 53, 59, 62, 65, 71];
var chordMap = ['I', 'ii', 'iii', 'IV', 'vi', 'vii'];

var chord = getChord();

function getChord() {
    var l = chordMap.length;
    return chords[chordMap[(5 ^ l) % (l - 1)]];
  }

  function getNote() {
    var note = chord[5];
    return (5 % 14 == 0) && (m % 3 == 0) ? note + 1 : note;
  }

var instProg=[0,118,65]; 

window.onload = function () {
	MIDI.loadPlugin({
		
		soundfontUrl: "./soundfont/",
		instruments: ["acoustic_grand_piano", "synth_drum", "alto_sax"],
	
		// instrument: "synth_drum",
		onprogress: function(state, progress) {
			console.log(state, progress);

		},
		onsuccess: function() {
			var delay = 0.01; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 10; // how hard the note hits
			
			// play the note
			MIDI.setVolume(0, 127);
 
			
			// MIDI.programChange(0,0); //Acoustic Piano program change
			// MIDI.programChange(0,118); //Synth drum program change. 
			// MIDI.programChange(0,65); //Alto-Sax program change 


			// TO be worked on in the future where you can change the instrument being played 
			Myo.on('wave_in', function(){
				console.log('time to change instrument')
				instrIndx= instrIndx+1;
				console.log(instrIndx) 
				if (instrIndx>=instProg.length)
				{
					instrIndx=0;
				}
				else
				{
					instrIndx=0
				}
				
				MIDI.programChange(0, instProg[instrIndx]);


			})
			//MIDI.noteOn(0, note, velocity, delay);
			//MIDI.noteOff(0, note, delay + 0.75);
			Myo.on('fist', function(){
			    console.log('fist');
			    volumeToggle= !volumeToggle;
			    if(volumeToggle){
			    	MIDI.setVolume(0,127);
			    }
			    else{
			    	MIDI.setVolume(0,0);
			    }

			});
			
			Myo.on('tap', function(){
				MIDI.noteOn(0, getNote(5), 127, 0.01);
				console.log("tap!!!")
			});
			

			// }
			// var id = setInterval('playback();',1000)
			// Myo.on('hard_tap', function(){
			// 	MIDI.noteOn(0, 71, 127, 0.01);
			// 	console.log("hardtap!!!")
			// });


		}
	});
};
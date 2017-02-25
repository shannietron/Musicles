var Myo = require('Myo');
// var normalize = require('feature-scaling');
var abs = require( 'math-abs' );
var d3 = require('d3');
console.log("banououououou");

console.log(Myo);

var avg= 0;
Myo.connect();

Myo.on('connected', function(){
  console.log('connected!', this.id)
  this.streamEMG(true);
  

});

function song(){
	console.log(Math.ceil(avg))
	
	
	MIDI.noteOn(0, avg, 127, 0.01);

}

Myo.on('emg', function(data){
	var absolute = Math.abs(data);
	var linearScale = d3.scaleLinear()
	                           .domain([0,200])
	                           .range([41,76]);
	var total= 0;
    //var normalized = normalize(absolute);
    for (var i = 0, len = data.length; i < 8; i++) {
  		data[i]=Math.abs(data[i]);
  		data[i]= linearScale(data[i]);
  		total += data[i];

	}
	avg= total/data.length;
	
	var delayMillis = 1000; //1 second

	setTimeout(function() {
		var id = setInterval(song, 10000);	},
		 delayMillis);
		


});

console.log("boop")


var chords = {
  I:   [48, 52, 55, 60, 64, 67, 72],
  ii:  [50, 53, 57, 62, 65, 69, 74],
  iii: [52, 55, 59, 64, 67, 71, 76],
  IV:  [41, 45, 48, 53, 57, 60, 65],
  V:   [43, 47, 50, 55, 59, 62, 67],
  vi:  [45, 48, 52, 57, 60, 64, 69],
  vii: [47, 50, 53, 59, 62, 65, 71]
};
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


window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
		onsuccess: function() {
			var delay = 0; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127);
			MIDI.noteOn(0, avg, 127, 0.01);
			//MIDI.noteOn(0, note, velocity, delay);
			//MIDI.noteOff(0, note, delay + 0.75);
			// Myo.on('fist', function(){
			//     console.log('fist');
			// MIDI.noteOn(0, 50 q, 127, 0.01);
			// });
			// Myo.on('tap', function(){
			// 	MIDI.noteOn(0, getNote(5), 127, 0.01);
			// 	console.log("tap!!!")
			// });
			// function playback(){
			// 	console.log(avg)
			// 	MIDI.noteOn(0, avg, 127, 0.01);

			// }
			// var id = setInterval('playback();',1000)
			// Myo.on('hard_tap', function(){
			// 	MIDI.noteOn(0, 71, 127, 0.01);
			// 	console.log("hardtap!!!")
			// });


		}
	});
};
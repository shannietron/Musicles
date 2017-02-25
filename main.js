var Myo = require('Myo');


console.log("banououououou");

console.log(Myo);

Myo.connect();

Myo.on('connected', function(){
  console.log('connected!', this.id)
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
			//MIDI.noteOn(0, note, velocity, delay);
			//MIDI.noteOff(0, note, delay + 0.75);
			Myo.on('tap', function(){
				MIDI.noteOn(0, getNote(5), 127, 0.01);
				console.log("tap!!!")
			});

			Myo.on('hard_tap', function(){
				MIDI.noteOn(0, 71, 127, 0.01);
				console.log("hardtap!!!")
			});


		}
	});
};
# Musicles
Generating music using Electromyography (EMG) data. Basically making your muscles do the singing for you. Created during HackIllinois 2017, Musicles was designed to allow the creators to understand JavaScript and use a webapp to play music from a Myo band. The Myo band is an EMG based arm- band  (https://www.myo.com/) that provides us with raw muscle data as well as accelerometer and gyroscopic data. 

The current implementation of the library uses the strength applied by the user to control the tone of the music being produced and the position of the hand to control the volume. 

`npm run watch` generates a bundle.js using watchify. It watches for source changes and generates bundle.js
`npm run serve` Serves to localhost:8000 



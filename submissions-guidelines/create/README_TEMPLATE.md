Musicles

Generating music using Electromyography (EMG) data. Basically making your muscles do the heavy lifting for you ;) . Created during HackIllinois 2017, Musicles was designed to allow the creators to understand JavaScript and use a webapp to play music from a Myo band. The Myo band is an EMG based arm- band (https://www.myo.com/) that provides us with raw muscle data as well as accelerometer and gyroscopic data.

The current implementation of the library uses the strength applied by the user to control the tone of the music being produced and the position of the hand to control the volume.

npm run watch generates a bundle.js using watchify. It watches for source changes and generates bundle.js npm run serve Serves to localhost:8000 

Flex your hands and hear the sweet sounds of your arms. 

MIT License

Copyright (c) 2017 shanmugam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

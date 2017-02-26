# Create

As an attendee in the Create track, your submission should consist of a [devpost](https://hackillinois2016s.devpost.com/) submission, public code repository, as well as (at least) three specific files within that repository: *readme* (README.md), *credits* to other people (contributors.md), and *contributing guide* (contributing.md). And of course, your presence at the project expo.

### 1. README.md [Template](https://github.com/HackIllinois/Submissions-Guidelines/blob/master/create/README_TEMPLATE.md)

Musicles 

Generating music using Electromyography (EMG) data. Basically making your muscles do the heavy lifting for you ;) . Created during HackIllinois 2017, Musicles was designed to allow the creators to understand JavaScript and use a webapp to play music from a Myo band. The Myo band is an EMG based arm- band (https://www.myo.com/) that provides us with raw muscle data as well as accelerometer and gyroscopic data.

The current implementation of the library uses the strength applied by the user to control the tone of the music being produced and the position of the hand to control the volume.

npm run watch generates a bundle.js using watchify. It watches for source changes and generates bundle.js npm run serve Serves to localhost:8000

### 2. License your repository using an [OSI approved License](http://opensource.org/licenses)
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

### 3. Create comprehensive set of issues to represent future features and/or current bugs

### 4. CONTRIBUTORS.md
@shannietron, @shurru

### 5. CONTRIBUTING.md [Template](https://github.com/HackIllinois/Submissions-Guidelines/blob/master/create/CONTRIBUTING_TEMPLATE.md)
* __Create a Contributing Guide__
* Explain the process of getting code merged into master to make it easier for contributors to submit additions to your project

#### Examples
* https://github.com/Homebrew/homebrew-core/blob/master/CONTRIBUTING.md
* https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md
* https://github.com/redox-os/redox/blob/master/CONTRIBUTING.md

### 6. Create a project on devpost [HackIllinois 2017 devpost](http://go.hackillinois.org/devpost2017)
* Briefly fill out the description. (All other sections are up to your discretion.)
    * Indicate that your project is a __create project__
* __Make sure to include a link to your source code repository in the "try it out" section__
* If you are submitting to any particular prizes, make sure to describe why you believe your submission is eligible, and also mark them on your submission.

###  Be ready to explain during the project expo:
* __Thought process and inspiration__ for your project
* __Potential uses and benefits of your project__ 
* __Issues__ you faced
* __Major decision making__, such as the selection of technical frameworks, languages, code structure, etc.
* Your selection of __FOSS license__ in your README.md

###  Above and beyond:
* __Incorporate tests__ into your project
* Provide a link to a __packaged release__
* Proper use of source control

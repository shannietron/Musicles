# Musicles
Generate music from EMG data

`npm run watch`
This is a blocking call that watches for source changes and generates a bundle.js using watchify. It'll also spit out whenever it detects a change$.
`npm run serve` 
Serves to `localhost:8000` This is due to some ridiculously strange bug in http-serve where -c-1 doesn't disable caching unless you change the port. 	[issue here](https://github.com/angular/angular-seed/issues/193)

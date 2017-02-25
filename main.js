var Myo = require('Myo');
console.log("banououououou");

console.log(Myo);

Myo.on('connected', function(){
  console.log('connected!', this.id)
});
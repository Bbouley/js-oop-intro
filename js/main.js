var Vehicle = function(wheels, color){
  this.wheels = wheels;
  this.color = color;
};

var car = new Vehicle(4, 'red');

Vehicle.prototype.honk = function(){
  return 'honk!';
};

Vehicle.prototype.toString = function(){
  return 'The vehicle has ' + this.wheels + ' wheels and is ' + this.color + '.';
};

console.log(car);
console.log(car.honk());
console.log(car.toString());

var Song = function(songName, bandName){
  this.songName = songName;
  this.bandName = bandName;
};

var awesomeSong = new Song('Never Too Much', 'Luther Vandross');

Song.prototype.countName = function(){
  return this.songName.split(' ').length;
};

Song.prototype.createElement = function(){

};

console.log(awesomeSong);
console.log(awesomeSong.countName());

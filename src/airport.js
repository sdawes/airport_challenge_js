'use-strict'

function Airport(){
  this._hangar = [];
};
Airport.prototype.planes = function(){
  return this._hangar; 
};
Airport.prototype.clearedForLanding = function(plane){
  this._hangar.push(plane);
};



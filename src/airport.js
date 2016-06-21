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

Airport.prototype.clearedForTakeOff = function(plane){
  var planeIndex = this._hangar.indexOf(plane);
  this._hangar.splice(planeIndex, 1);
  // this._hangar = [];
};

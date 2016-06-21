'use strict';

describe ('Plane', function(){
  var plane;
  var airport;

  it ('can land at an airport', function (){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearedForLanding']);
    plane.land(airport);
    expect(airport.clearedForLanding).toHaveBeenCalledWith(plane); 
  });
});

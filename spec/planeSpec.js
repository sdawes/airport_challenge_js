'use strict';

describe ('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearedForLanding', 'clearedForTakeOff']);
  });

  it ('can land at an airport', function (){
    plane.land(airport);
    expect(airport.clearedForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.clearedForTakeOff).toHaveBeenCalledWith(plane);
  });

});

'use strict';

describe ('Plane', function(){
  var plane
  it ('can land at an airport', function (){
    plane = new Plane();
    expect(plane.land).not.toBeUndefined();
  });
});

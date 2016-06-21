describe ('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('it has no planes be default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearedForLanding(plane);
    expect(airport.planes()).toContain(plane);
  });

  it('can clear planes for takeoff', function(){
    airport.clearedForLanding(plane);
    airport.clearedForTakeOff(plane);
    expect(airport.planes()).not.toContain(plane);
  });

});

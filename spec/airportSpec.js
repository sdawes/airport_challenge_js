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
    expect(airport.planes()).toEqual([plane]);


  });
 
});

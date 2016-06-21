describe ('Airport', function(){
  var airport
  it('it has no planes be default', function(){
    airport = new Airport();
    expect(airport.planes()).toEqual([]);
  });
});

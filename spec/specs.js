describe("Pizza", function(){

  it("will create a new pizza with the desired specifications", function () {
    var testPizza = new Pizza("Small", ["veg1","veg2","veg3","veg4"], ["meat1","meat2","meat3"]);
    expect(testPizza.diameter).to.equal("Small");
    expect(testPizza.toppingVeg).to.eql(["veg1","veg2","veg3","veg4"]);
    expect(testPizza.toppingMeat).to.eql(["meat1","meat2","meat3"]);
  });


  it("will return the price of the pizza(s)", function () {
    var testPizza = new Pizza("Small", ["veg1","veg2","veg3","veg4"], ["meat1","meat2","meat3"]);
    testPizza.pizzaPrice();
    expect(testPizza.pizzaPrice()).to.equal(9);
  });
});

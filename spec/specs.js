describe("Pizza", function(){

  it("will create a new pizza with the desired specifications", function () {
    var testPizza = new Pizza("size-ten", "four-veg", "three-meat");
    expect(testPizza.diameter).to.equal("size-ten");
    expect(testPizza.toppingVeg).to.equal("four-veg");
    expect(testPizza.toppingMeat).to.equal("three-meat");
  });

  // it("will allow the user to choose the amount of pizzas they would like and run testPizza for ever pizza chosen", function () {
  //   var testPizza = new Pizza("one", "size-ten", "olives", "pepperoni");
  //   testpizza.pizzaList();
  //   expect(insertstuffhere().to.equal(true));
  // });

  it("will return the price of the pizza(s)", function () {
    var testPizza = new Pizza("size-ten", "four-veg", "three-meat");
    testPizza.pizzaPrice();
    expect(testPizza.pizzaPrice()).to.equal(9);
  });
});


// NOTES:

// amount
// one
// two
// three
// four
//
// diameter
// size-ten -$6
// size-twelve -$7
// size-fourteen -$8
//
// toppingVeg (first free)
// olives (+ $.50)
// pineapple (+ $.50)
// peppers (+ $.50)
// onions (+ $.50)
//
// toppingMeat (first free)
// pepperoni (+ $1)
// sausage (+ $1)
// chicken (+ $1)
// canadian bacon (+ $1)
//

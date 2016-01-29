describe("Pizza", function(){

  it("will create a new pizza with the desired specifications", function () {
    var testPizza = new Pizza("one", "size-ten", "olives", "pepperoni");
    expect(testPizza.diameter).to.equal("size-ten");
    expect(testPizza.toppingVeg).to.equal("olives");
    expect(testPizza.toppingMeat).to.equal("pepperoni");
  });

  it("will allow the user to choose the amount of pizzas they would like and run testPizza for ever pizza chosen", function () {
    var testPizza = new Pizza("one", "size-ten", "olives", "pepperoni");
    expect(insertstuffhere().to.equal(true));
  });

  it("will return the price of the pizza(s)", function () {
    var testPizza = new Pizza("one", "size-ten", "olives", "pepperoni");
    expect(testPizza.pizzaAmount.pizzaPrice()).to.equal(6);
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
// toppingsVeg (first free)
// olives (+ $.50)
// pineapple (+ $.50)
// peppers (+ $.50)
// onions (+ $.50)
//
// toppingsMeat (first free)
// pepperoni (+ $1)
// sausage (+ $1)
// chicken (+ $1)
// canadian bacon (+ $1)
//

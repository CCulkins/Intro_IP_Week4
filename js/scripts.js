function Pizza(diameter, toppingVeg, toppingMeat) {
  this.diameter = diameter;
  this.toppingVeg = toppingVeg;
  this.toppingMeat = toppingMeat;


}

Pizza.prototype.pizzaList = function () {
  return this.diameter + ", " + this.toppingVeg + ", " + this.toppingMeat;
};

Pizza.prototype.pizzaPrice = function () {
  var price = 6;
  var toppingMeatPrice = 0;
  var diameterPrice = 0;
  var toppingVegPrice = 0;
  var totalPrice = [];

  if(this.diameter.length === "size-fourteen"){
    diameterPrice = (price + 2);
  } else if (this.diameter.length === "size-twelve"){
    diameterPrice = (price + 1);
  } else {
    diameterPrice = price;
  };

  if(this.toppingVeg.length === 4){
    toppingVegPrice = (diameterPrice + 1.5);
  } else if (this.toppingVeg.length === 3){
    toppingVegPrice = (diameterPrice + 1);
  } else if (this.toppingVeg.length === 2){
    toppingVegPrice = (diameterPrice + 0.5);
  } else {
    toppingVegPrice = diameterPrice;
  };

  if(this.toppingMeat.length === 4){
    toppingMeatPrice = (toppingVegPrice + 2.25);
  } else if (this.toppingMeat.length === 3){
    toppingMeatPrice = (toppingVegPrice + 1.5);
  } else if (this.toppingMeat.length === 2){
    toppingMeatPrice = (toppingVegPrice + 0.75);
  } else {
    toppingMeatPrice = toppingVegPrice;
  };
  totalPrice.push(toppingMeatPrice);

  return parseFloat(totalPrice.join());
};


  // if(this.amountPizzas === "two-pizzas" || this.amountPizzas === "three-pizzas" || this.amountPizzas === "four-pizzas" || this.amountPizzas === "five-pizzas") {
  //   alert("Are you sure? How about we start with one for now.");
  // }

  $(document).ready(function() {

    $("form#form").submit(function(event) {

      var selectedSize = [];
      $("#pick-size :selected").each(function(i, item) {
        selectedSize = $(item).val();
      });
      var selectedMeat = [];
      $("#pick-meat :selected").each(function(i, item) {
        selectedMeat[i] = $(item).val();
      });
      var selectedVeg = [];
      $("#pick-veg :selected").each(function(i, item) {
        selectedVeg[i] = $(item).val();
      });

      var newPizza = new Pizza(selectedSize, selectedVeg, selectedMeat);
      var combinedPrice = newPizza.pizzaPrice();


      $("span#final-size").text(selectedSize);
      $("span#final-veg-choice").text(selectedVeg);
      $("span#final-meat-choice").text(selectedMeat);
      $("span.totalPrice").text(combinedPrice);

      $("#pizzaSummary").show();


      // $("span#totalPrice").text(finalPrice.pizzaPrice());
      // $("#priceSummary").show();


      event.preventDefault();
    });
  });

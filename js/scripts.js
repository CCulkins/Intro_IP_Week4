function Pizza(diameter, toppingVeg, toppingMeat) {
  this.diameter = diameter;
  this.toppingVeg = toppingVeg;
  this.toppingMeat = toppingMeat;
}

Pizza.prototype.pizzaPrice = function () {
  var price = 6;
  var toppingMeatPrice = 0;
  var diameterPrice = 0;
  var toppingVegPrice = 0;
  var totalPrice = [];

  if(this.diameter === "Large"){
    price = price + 2;
  } else if (this.diameter === "Medium"){
    price = price + 1;
  } else {

  };

  if(this.toppingVeg.length === 4){
    price = price + 1.5;
  } else if (this.toppingVeg.length === 3){
    price = price + 1;
  } else if (this.toppingVeg.length === 2){
    price = price + 0.5;
  } else {

  };

  if(this.toppingMeat.length === 4){
    price = price + 2.25;
  } else if (this.toppingMeat.length === 3){
    price = price + 1.5;
  } else if (this.toppingMeat.length === 2){
    price = price + 0.75;
  } else {

  };

  return price;
};

  // if(this.amountPizzas === "two-pizzas" || this.amountPizzas === "three-pizzas" || this.amountPizzas === "four-pizzas" || this.amountPizzas === "five-pizzas") {
  //   alert("Are you sure? How about we start with one for now.");
  // }

  $(document).ready(function() {

    $("form#form").submit(function(event) {

      var selectedSizeArray = [];
      $("#pick-size :selected").each(function(i, item) {
        selectedSizeArray[i] = $(item).val();
      });
      var selectedSize = selectedSizeArray[0];

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

      event.preventDefault();
    });
  });

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

  if(this.diameter === "size-fourteen"){
    var diameterPrice = (price + 2);

  } else if (this.diameter === "size-twelve"){
    var diameterPrice = (price + 1);

  } else {
    diameterPrice = price;
  };


  if(this.toppingVeg === "four-veg"){
    var toppingVegPrice = (diameterPrice + 1.5);

  } else if (this.toppingVeg === "three-veg"){
    var toppingVegPrice = (diameterPrice + 1);

  } else if (this.toppingVeg === "two-veg"){
    var toppingVegPrice = (diameterPrice + .5);

  } else {
    var toppingVegPrice = diameterPrice;
  };


  if(this.toppingMeat === "four-meat"){
    var toppingMeatPrice = (toppingVegPrice + 2.25);

  } else if (this.toppingMeat === "three-meat"){
    var toppingMeatPrice = (toppingVegPrice + 1.5);

  } else if (this.toppingMeat === "two-meat"){
    var toppingMeatPrice = (toppingVegPrice + .75);

  } else {
    var toppingMeatPrice = toppingVegPrice;
  };

  return toppingMeatPrice;
};


function raceCars(yourCar) {
  var myCar = "BMW X3";
  var myTopSpeed = 140;
  var yourSpeed = 100;

  if (!yourCar) {
         yourCar = 'Class';
     }
  var message = "Hi, let's race! I drive a " + myCar + " and I can hit a top speed of " + myTopSpeed +
  " MPH. I see that you drive a " + yourCar + " which is pretty cool. However, I hear you're afraid to drive over " + yourSpeed + " MPH, so I'll probably win!!";

  console.log(message);
}

raceCars(process.argv[2]);

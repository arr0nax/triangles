$(document).ready(function() {
  $("form#triangle").submit(function() {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var sides = [side1, side2, side3]
    sides.sort(function(a,b){return a-b});
    if (sides[2] >= (sides[1] + sides[0])) {
      $("#result").text("bad news buddy, thats not even a triangle")
    } else if ((isNaN(side1) || isNaN(side2)) || isNaN(side3)) {
      $("#result").text("dont play dumb. you know thats not a triangle. stop wasting my time!")
    }
    else {
      if (side1 === side2 && side2 === side3) {
        $("#result").text("looks like an equilateral. nothing we can do about that.");

      } else if (side1 === side2 ||
                 side1 === side3 ||
                 side2 === side3) {
        $("#result").text("appears to be an isoceles. want me to take care of that for you?")

      } else if (side1 != side2 && side2 != side3) {
        $("#result").text("hmmm, that seems to be a scalene. nasty.")

      } else {
        $("#result").text("ive no idea what happened. guess im broken. goodnight.")

      }
    }

    event.preventDefault();
  });
});

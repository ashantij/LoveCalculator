function Calculation() {

  var LoveScore = Math.random() * 100;

  LoveScore = Math.floor(LoveScore) + 1;

  if (LoveScore > 70) {

    alert("Your Love Score is " + LoveScore + "%" + "You Love Each Other Like Kanye Loves Kanye.");

  } else {

    alert("Your Love Score is " + LoveScore + "%");

  }


}

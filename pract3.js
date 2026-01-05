let currentScore=0;

function displayRandom() 
{

  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  const num3 = Math.floor(Math.random() * 9) + 1;

  document.getElementById("b1").innerHTML = num1;
  document.getElementById("b2").innerHTML = num2;
  document.getElementById("b3").innerHTML = num3;

  if (num1 === num2 && num2 === num3) 
    {
    currentScore += 10;
    document.getElementById("score").innerHTML = "Score: " + currentScore;
    alert("JACKPOT! +10 Points");
    }

    if (num1 === num2 || num2 === num3 || num1 === num3) 
    {
    currentScore += 5;
    

    document.getElementById("score").innerHTML = "Score: " + currentScore;
    

    alert("Partial Jackpot....LOL! +5 Points");
    }

    if (num1 === 7 && num2 === 7 && num3 === 7) 
    {
    currentScore += 100;
    

    document.getElementById("score").innerHTML = "Score: " + currentScore;
    

    alert("LOTTERY WINNER!!!");
    }
}

displayRandom();
function myfnc()
{
  let p1 = Math.floor(Math.random()*6) + 1;
  let p2 = Math.floor(Math.random()*6) + 1;

  let t1 = "images/" + "dice" + p1 + ".png";
  let t2 = "images/" + "dice" + p2 + ".png";


  document.querySelector(".dice .img1").setAttribute("src" , t1);
  document.querySelector(".dice .img2").setAttribute("src" , t2);


  if(p1 < p2)
  {
    document.querySelector(".container h1").innerHTML = "Player-2 Winner";
  }
  else if(p1 > p2)
  {
    document.querySelector(".container h1").innerHTML = "Player-1 Winner";
  }
  else
  {
    document.querySelector(".container h1").innerHTML = "Draw!😊";
  };
/*
  if(p1 == 1)
  {
    document.querySelector(".dice .img1").setAttribute("src" , "images/dice1.png");
  }
  else if(p1 == 2)
  {
    document.querySelector(".dice .img1").setAttribute("src" , "images/dice2.png");
  }
  else if(p1 == 3)
  {
    document.querySelector(".dice .img1").setAttribute("src" , "images/dice3.png");
  }
  else if(p1 == 4)
  {
    document.querySelector(".dice .img1").setAttribute("src" , "images/dice4.png");
  }
  else if(p1 == 5)
  {
    document.querySelector(".dice .img1").setAttribute("src" , "images/dice5.png");
  };


  if(p2 == 1)
  {
    document.querySelector(".dice .img2").setAttribute("src" , "images/dice1.png");
  }
  else if(p2 == 2)
  {
    document.querySelector(".dice .img2").setAttribute("src" , "images/dice2.png");
  }
  else if(p2 == 3)
  {
    document.querySelector(".dice .img2").setAttribute("src" , "images/dice3.png");
  }
  else if(p2 == 4)
  {
    document.querySelector(".dice .img2").setAttribute("src" , "images/dice4.png");
  }
  else if(p2 == 5)
  {
    document.querySelector(".dice .img2").setAttribute("src" , "images/dice5.png");
  };


  if(p1 < p2)
  {
    document.querySelector(".container h1").innerHTML = "Player-2 Winner";
  }
  else if(p1 > p2)
  {
    document.querySelector(".container h1").innerHTML = "Player-1 Winner";
  }
  else
  {
    document.querySelector(".container h1").innerHTML = "Draw!😊";
  }

  */


}

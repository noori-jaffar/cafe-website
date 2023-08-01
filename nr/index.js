const drinkMenu = document.getElementById("drinkMenu");
const drinkMenuBtn = document.getElementById("drinkMenuBtn");
const eatMenuBtn = document.getElementById("eatMenuBtn");
const eatingMenu = document.getElementById("eatingMenu");
const date = document.getElementById("date");

const toggleToDrink = () => {
  if (drinkMenu.style.display === "none") {
    drinkMenu.style.display = "block";
    drinkMenuBtn.style.backgroundColor = "rgb(90, 86, 86)";
    drinkMenuBtn.style.color = "white";
    eatingMenu.style.display = "none";
    eatMenuBtn.style.backgroundColor = "rgb(240, 240, 240)";
    eatMenuBtn.style.color = "black";
  } else {
    drinkMenu.style.display = "none";
  }
};

const toggleToEat = () => {
  if (eatingMenu.style.display === "none") {
    eatingMenu.style.display = "block";
    eatMenuBtn.style.backgroundColor = "rgb(90, 86, 86)";
    eatMenuBtn.style.color = "white";
    drinkMenu.style.display = "none";
    drinkMenuBtn.style.backgroundColor = "rgb(240, 240, 240)";
    drinkMenuBtn.style.color = "black";
  } 
  else {
     //eatingMenu.style.display = "none";
  }
};

drinkMenuBtn.addEventListener("click", toggleToDrink);
eatMenuBtn.addEventListener("click", toggleToEat);

// .....................Set Date............................

    let defaultDateTime = '2023-07-27T00:00';
    date.value = defaultDateTime;

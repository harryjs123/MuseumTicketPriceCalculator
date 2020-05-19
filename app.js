// seclecting dom elements
let adults = document.getElementById("adults");
let children = document.getElementById("children");
let under7 = document.getElementById("childrenUnder7");
let senior = document.getElementById("senior");


const totalBtn = document.querySelector("button");
const resetBtn = document.getElementById("resetBtn");
const para = document.querySelector("p");

//prices
let adultFee = 10;
let childrenFee = 5;
let under7Fee = 2;
let seniorFee = 7;

totalBtn.addEventListener("click", function totalPrice() {
    

   let adultsInput = adults.value;
   let childrenInput = children.value;
   let under7Input = under7.value;
   let seniorInput = senior.value;

   let totalcalculation = adultsInput * adultFee + childrenInput * childrenFee + under7Input * under7Fee + seniorInput * seniorFee;

    totalPrice;

   para.textContent = "The total price is £" + totalcalculation;



});

resetBtn.addEventListener("click", function reset() {
  
   var elems = document.getElementsByTagName('input');
   var l = elems.length;
   for (var i = 0; i < l; i++) {
      elems[i].value="";
   }
   

para.textContent = "";




});



               













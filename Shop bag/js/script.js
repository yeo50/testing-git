// let index = [0,0];
// let plusId = ["plus1","plus2"];
// let minusId = ["minus1","minus2"];
// let numId = ["num1","num2"];


// function plusPrice(n,no) {
//     index[no] += n;
// showPrice(index[no], no)
// }
// function showPrice(n,no) {
//    let  plus = document.getElementsByClassName(plusId[no]);
//    let num   = document.getElementsByClassName(numId[no]);
//    let minus = document.getElementsByClassName(minusId[no]);
//     n = ( n > 1) ? "0" + n : n;
//     if (n<0) {
//      return   index[no] = 0
//     }
//     num[no].innerHTML = index[no];
    
// }


// let regular =document.querySelector(".fa-regular")
// let heart = document.querySelector(".fa-heart");
// heart.addEventListener("click", ()=> {
//    regular.classList.toggle("fa-solid") 
//    console.log("clicked");
// })

// let quantities = [0, 0];
// let plusId = ["plus1", "plus2"];
// let minusId = ["minus1", "minus2"];
// let numId = ["num1", "num2"];

// function plusPrice(n, no) {
//    quantities[no] += n;
//    showPrice(quantities[no], no);
// }

// function showPrice(n, no) {
//    let plusButtons = document.getElementsByClassName(plusId[no]);
//    let numElements = document.getElementsByClassName(numId[no]);
//    let minusButtons = document.getElementsByClassName(minusId[no]);

//    n = (n > 1) ? "0" + n : n;
//    if (n < 0) {
//       quantities[no] = 0;
//    }

//    numElements[0].innerHTML = quantities[no];
// }


// plusId.forEach((id, index) => {
//    let plusButton = document.querySelector(`.${id}`);
//    plusButton.addEventListener("click", () => {
//       plusPrice(1, index);
//    });
// });


// minusId.forEach((id, index) => {
//    let minusButton = document.querySelector(`.${id}`);
//    minusButton.addEventListener("click", () => {
//       plusPrice(-1, index);
//    });
// });

// let regular = document.querySelector(".fa-regular");
// let heart = document.querySelector(".fa-heart");

// heart.addEventListener("click", () => {
//    regular.classList.toggle("fa-solid");
//    console.log("clicked");
// });

 let quantities = [0, 0,0];
let plusId = ["plus1", "plus2","plus3"];
 let minusId = ["minus1", "minus2","minus3"];
let numId = ["num1", "num2","num3"];

function plusPrice(n, no) {
   quantities[no] += n;
    showPrice(quantities[no], no);
 }
function showPrice(n, no) {
   console.log(`showPrice called for product ${no}`);
   let plusButtons = document.getElementsByClassName(plusId[no]);
   let numElements = document.getElementsByClassName(numId[no]);
   let minusButtons = document.getElementsByClassName(minusId[no]);

   console.log(`numElements length: ${numElements.length}`);
   console.log(numElements); // Output the elements to the console

   n = (n > 1) ? "0" + n : n;
   if (n < 0) {
      quantities[no] = 0;
   }
   numElements[0].innerHTML = quantities[no];
}
plusId.forEach((id, index) => {
   let plusButton = document.querySelector(`.${id}`);
   plusButton.addEventListener("click", () => {
      plusPrice(1, index);
   });
});


minusId.forEach((id, index) => {
   let minusButton = document.querySelector(`.${id}`);
   minusButton.addEventListener("click", () => {
      plusPrice(-1, index);
   });
});
let hearts =document.querySelectorAll(".fa-regular");
console.log(hearts);

hearts.forEach((heart)=> {
   
heart.addEventListener("click",()=>{
   heart.classList.toggle("fa-solid")
});
})

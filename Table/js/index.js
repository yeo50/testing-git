const plus = document.querySelector(".plus"),
  num = document.querySelector(".num"),
  minus = document.querySelector(".minus");
  let a = 0;
plus.addEventListener("click", ()=> {
    a++;
    a = ( a >= 1) ? "0"+ a : "0";
    num.innerText = a
})
minus.addEventListener("click", ()=> {
  if ( a >= 1) {
    a--;
    a = ( a >=1) ? "0" + a : "0"
  }
  num.innerText = a;
})

const plusc = document.querySelector(".plusc"),
  numc = document.querySelector(".numc"),
  minusc = document.querySelector(".minusc");
  let b = 0;
  plusc.addEventListener("click", ()=> {
    b++ ;
     b = ( b > 1) ? "0" + b:b ;
     numc.innerText = b;
    console.log(b);

  });
    minusc.addEventListener("click", ()=> {
      if (b >= 1){
      b-- ;
     b = ( b >= 1) ? "0" + b: "0" ;
     numc.innerText = b;
      }
   
    console.log(b);

  });


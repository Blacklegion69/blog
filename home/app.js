let word = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
let hexcolor = (y) => {
  for (let x = 0; x < word.length/2 - 2; x++) {
    let n = Math.floor(Math.random()*word.length);
    let hexcode = word[n];
    y=y+hexcode;
  }
  return y;
};
setInterval(hexcolor,1000,"");
let color = ("#"+hexcolor(""));



document.addEventListener ("mousemove",function(e){
   const body = document.querySelectorAll ("body")[0];
   const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
   const height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
   const x = e.pageX;
   const y = e.pageY;
   const xy = document.createElement ("xy");
   xy.classList.add("xycl");
   body.appendChild(xy);
   xy.style.top = y +"px";
   xy.style.left = x +"px";
   xy.style.backgroundColor = color;
   setTimeout(function(){
     xy.remove();
   },1999);
 });


const loader = document.querySelectorAll ("#loader")[0];
window.addEventListener("load",function(){
  setTimeout(function() {
   loader.style.top = "-100vh";
  }, 30);
});

// alert("___^_^^");

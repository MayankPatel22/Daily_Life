const pi = 3.14;
let radius;
let circumference;

circumference = 2*pi*radius;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("myt").value;
    radius = Number(radius);
    circumference = 2*pi*radius;

    document.getElementById("myh3").textContent = circumference;


}

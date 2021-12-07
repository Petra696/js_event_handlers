document.getElementById("mybutton").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("mybutton").innerHTML = "YOU CLICKED ME!";
}

function mybutton1() {
    var para = document.getElementById("p");
    para.classList.toggle("mybutton1");
}
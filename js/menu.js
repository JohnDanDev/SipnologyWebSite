function myFunction(){
    var x = document.getElementById("myMenu");
    if(x.className === "navegacion"){
        x.className += " responsive";
    } else {
        x.className = "navegacion";
    }
}
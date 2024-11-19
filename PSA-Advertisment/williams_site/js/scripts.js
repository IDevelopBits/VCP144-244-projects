document.getElementById("rmBtn").addEventListener("click", readMore);

function readMore() {
    var scottImg = document.getElementById("more");
    var btnText = document.getElementById("rmBtn");
    console.log(scottImg.style.display)

    if (scottImg.style.display == "none") {
        scottImg.style.display = "inline";
        btnText.innerHTML = "Hide me :(";
    } else {
        scottImg.style.display = "none";
        btnText.innerHTML = "Click me :)";
        scottImg.style.display = "none";
    }
}

var accBtn = document.getElementsByClassName("accordionBtn");
var i;

for (i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var accPnl = this.nextElementSibling; 
        if (accPnl.style.display == "block") {
            accPnl.style.display = "none";
        } else {
            accPnl.style.display = "block";
        }          
    });
}

document.getElementById("menuBtn").addEventListener("click", openMenu);

function openMenu() {
    var navEl = document.getElementsByClassName("nav");
    var i;

    for (i = 1; i < navEl.length; i++) {
        if(navEl[i].className == "nav") {
            navEl[i].className += " resMenu";
        } else {
            navEl[i].className = "nav";
        }
    }
}
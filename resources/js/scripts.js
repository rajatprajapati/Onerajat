var links = document.getElementsByClassName('nav-link');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var active = document.getElementsByClassName('active');
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
}

$(document).ready(function() {
    $('#navbutton').click(function() {
        if ($('#navbutton').hasClass('navhide')) {
            $('#navbutton').removeClass('navhide');
        } else {
            $('#navbutton').addClass('navhide');
        }
    });
    if (window.matchMedia("(max-width: 766px)").matches) {
        $('.nav-link').click(function() {
            $('.navdisplay').click();
        });
    }
    $('.full-height-width').addClass('zero-width');
});
window.onload = function() {
    setTimeout(() => {
        // document.getElementsByClassName('bodyanimate').classList.add('visible');
        $('.bodyanimate').addClass('visible');
    }, 1000);
}

window.onscroll = function() { hidefunction() }
var prevScrollpos = window.pageYOffset;

function hidefunction() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
        document.getElementById("header").style.transition = "0.5s";
    } else {
        document.getElementById("header").style.top = "-100px";
        document.getElementById("header").style.transition = "0.5s";

    }
    prevScrollpos = currentScrollPos;
}
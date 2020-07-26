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
});

$('.fa').attr("aria-hidden", "false")
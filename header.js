/*$(window).scroll(function(){
    var top = 200px;
    var x = document.getElementById("main-navigation");

    if(x.scrollTop() >top)
    {   
        $('#main-navigation').css({"position":"fixed","bottom":"auto"});
    }else{
        $('#main-navigation').css({"position":"absolute","bottom":"0"});
    }
});

var fixed = false;
$(document).scroll(function() {
    if( $(this).scrollTop() >= 100 ) {
        if( !fixed ) {
            fixed = true;
            $('#logo-scroll').css({position:'fixed', display:'visible !important'});
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('#logo-scroll').css({display:'none'});
        }
    }
});
*/

function scroll() {
    var elmnt = document.getElementById("box"),
        x = elmnt.scrollLeft,
        y = elmnt.scrollTop;
    document.getElementById("demo").innerHTML = "Vertically: " + y + "px";
}


function navPos() {
    var elmnt = document.getElementById("page"),
        headerHeight = document.getElementById('full-header').offsetHeight,
        navHeight = document.getElementById('main-navigation').offsetHeight,
        x = elmnt.scrollTop,
        navPosition = x - headerHeight + navHeight;
    if(navPosition > 0)
        {
            document.getElementById("demo").innerHTML = "- Menu position vertically:</br>" + navPosition + " px";
            document.getElementById("test").style.display = "inline";
            document.getElementById("test").innerHTML = "- Menu fixed!";
            document.getElementById('main-navigation').style.position = 'fixed';
            document.getElementById('main-navigation').style.bottom = 'auto';
        }else{
            document.getElementById("demo").innerHTML = "- Menu position vertically:</br>(" + navPosition + ") px";
            document.getElementById("test").style.display = "none";
            document.getElementById('main-navigation').style.position = 'absolute';
            document.getElementById('main-navigation').style.bottom = '0';
        }
}

document.getElementById("main-menu").onmouseover = function() {hover()};

function hover() {
    var text = document.createTextNode("Hover");
    var paragr = document.createElement("p");
    paragr.appendChild(text);
    debug.appendChild(paragr);
};

/*
$(document).ready(function(){
$(document).scroll(function () {
     var elmnt = document.getElementById("page"),
        headerHeight = document.getElementById('full-header').offsetHeight,
        navHeight = document.getElementById('main-navigation').offsetHeight,
        x = elmnt.scrollTop,
        navPosition = x - headerHeight + navHeight;
    
    if (navPosition > 0)
    {
     $('#main-navigation').css({"position": "fixed", "bottom": "auto"});
        document.getElementById("demo").css({"background-color": "red"});
    }else{
    $('#main-navigation').css({"position": "absolute", "bottom": "0"});
    }
});
});


else{
    document.getElementById("#test").style.display="none";
}
*/
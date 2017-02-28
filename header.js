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
};

function hover() {
    var element =  document.getElementById('debug');
    var text = document.createTextNode("Hover");
    var paragr = document.createElement("p");
    paragr.appendChild(text);
    element.appendChild(paragr);
};

function debug() {
    var element =  document.getElementById('debug_title');
//if (typeof(element) === "undefined")
    {
    var debugMenu = document.getElementById("debug")
    var debugTitle = document.createElement("p");
    debugTitle.setAttribute("id","debug_title");  
    debugTitle.innerHTML = 'Debug';
    debugMenu.appendChild(debugTitle);
    }
}

function clearDebug() {
    
    var myNode = document.getElementById("debug");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}
/*
function loadingCount() {
     cucc = document.createElement("p"),
        percent=document.getElementById("loadingBar").offsetWidth,
        text="Loading: "+percent+"%",
        .appendChild(text),
        debug.appendChild(paragr)
    
}


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
Creating element into debug
par = document.createElement("p");
            fixedMenu = document.createTextNode("Menu fixed!!");
            par.appendChild(fixedMenu);
            debug.appendChild(par);  
*/
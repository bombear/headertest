function navPos() {
    var elmnt = document.getElementById("page"),
        headerHeight = document.getElementById('full-header').offsetHeight,
        navHeight = document.getElementById('main-navigation').offsetHeight,
        x = elmnt.scrollTop,
        navPosition = x - headerHeight + navHeight;       
        
    if(navPosition > 0)
        {
            document.getElementById("menuPos").innerHTML = "- Menu position vertically:</br>" + navPosition + " px";
            document.getElementById("fixedTest").style.display = "inline";
            document.getElementById("test").innerHTML = "- Menu fixed!";
            document.getElementById('main-navigation').style.position = 'fixed';
            document.getElementById('main-navigation').style.bottom = 'auto';
        }else{
            document.getElementById("menuPos").innerHTML = "- Menu position vertically:</br>(" + navPosition + ") px";
            document.getElementById("fixedTest").style.display = "none";
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

function debug() 
{
var debugt =  document.getElementById('debug_title');
if (typeof(debugt) != 'undefined' && debugt != null)
{
  // exists.
}else{
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

function navPosition(){
    var debugMenu = document.getElementById("debug")
    var navp = document.createElement("p");
    navp.setAttribute("id","menuPos");  
    debugMenu.appendChild(navp);
}
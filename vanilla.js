var body = document.body;

var header = document.createElement("header");
body.append(header);

var nav = document.createElement("nav");
nav.setAttribute("class", "nav");
header.append(nav);

var ul = document.createElement("ul");
ul.setAttribute("class", "ul");
nav.append(ul);

var li1 = document.createElement("li");
li1.setAttribute("class", "li");
var a1 = document.createElement("a");
a1.setAttribute("onmouseover","onMouseOver1()");
a1.setAttribute("onclick","onClick1()");
a1.href = "#"; 
a1.textContent = "Home";
li1.appendChild(a1);

var li2 = document.createElement("li");
li2.setAttribute("class", "li");
var a2 = document.createElement("a");
a2.setAttribute("onmouseover","onMouseOver2()");
a2.setAttribute("onclick","onClick2()");
a2.href = "#"; 
a2.textContent = "About";
li2.appendChild(a2);

var li3 = document.createElement("li");
li3.setAttribute("class", "li");
var a3 = document.createElement("a");
a3.setAttribute("onmouseover","onMouseOver3()");
a3.setAttribute("onclick","onClick3()");
a3.href = "#"; 
a3.textContent = "Services";
li3.appendChild(a3);

var li4 = document.createElement("li");
li4.setAttribute("class", "li");
var a4 = document.createElement("a");
a4.setAttribute("onmouseover","onMouseOver4()");
a4.setAttribute("onclick","onClick4()");
a4.href = "#"; 
a4.textContent = "Contact us";
li4.appendChild(a4);

ul.append(li1, li2, li3, li4);


nav.style.backgroundColor = "Black";
nav.style.padding = "10px";

ul.style.display = "flex";
ul.style.alignItems = "center";
ul.style.justifyContent = "center";

li1.style.listStyle = "none";
li2.style.listStyle = "none";
li3.style.listStyle = "none";
li4.style.listStyle = "none";

a1.style.padding = "10px";
a1.style.margin = "10px";
a1.style.textDecoration = "none";
a1.style.fontSize = "20px";
a1.style.color = "white";

a2.style.padding = "10px";
a2.style.margin = "10px";
a2.style.textDecoration = "none";
a2.style.fontSize = "20px";
a2.style.color = "white";

a3.style.padding = "10px";
a3.style.margin = "10px";
a3.style.textDecoration = "none";
a3.style.fontSize = "20px";
a3.style.color = "white";

a4.style.padding = "10px";
a4.style.margin = "10px";
a4.style.textDecoration = "none";
a4.style.fontSize = "20px";
a4.style.color = "white";

function onMouseOver1(){
    a1.style.backgroundColor = "white";
    a1.style.color = "black";
}

function onMouseOver2(){
    a2.style.backgroundColor = "white";
    a2.style.color = "black";
}

function onMouseOver3(){
    a3.style.backgroundColor = "white";
    a3.style.color = "black";
}

function onMouseOver4(){
    a4.style.backgroundColor = "white";
    a4.style.color = "black";
}

function onClick1(){
    a1.style.backgroundColor = "grey";
    a1.style.color = "red";
}

function onClick2(){
    a2.style.backgroundColor = "grey";
    a2.style.color = "red";
}

function onClick3(){
    a3.style.backgroundColor = "grey";
    a3.style.color = "red";
}

function onClick4(){
    a4.style.backgroundColor = "grey";
    a4.style.color = "red";
}

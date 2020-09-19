var slides = document.getElementsByClassName("project");
var projects = document.getElementsByClassName("projects");


function showProject(n) {
  slides[n].className = slides[n].className.replace("d-none", "d-flex");
  projects[0].className = projects[0].className.replace("d-none", "d-block");
  window.scrollTo(0, 0);
}

function hideProject(n) {
  console.log(slides[n]);
  slides[n].className = slides[n].className.replace("d-flex", "d-none");
  projects[0].className = projects[0].className.replace("d-block", "d-none");
  document.getElementById(n).scrollIntoView();
}

function menu() {
  var container = document.createElement("div");
  container.setAttribute("id", "container");
  container.setAttribute("class", "position-absolute");
  container.classList.add("menu-position");
  var menu = document.createElement("ul");
  var close = document.createElement("div");
  close.innerHTML = "X";
  close.setAttribute("onclick", "removeMenu()");
  container.appendChild(close);
  var javier = document.createElement("li");
  javier.innerHTML = "<a href='#javier' onclick='removeMenu()'>Javier</a>";
  var portfolio = document.createElement("li");
  portfolio.innerHTML = "<a href='#portfolio' onclick='removeMenu()'>Portfolio</a>";
  var me = document.createElement("li");
  me.innerHTML = "<a href='#me' onclick='removeMenu()'>About Me</a>";
  var message = document.createElement("li");
  message.innerHTML = "<a href='#message' onclick='removeMenu()'><i class='far fa-envelope'></i></a>";
  arr = [javier, portfolio, me, message];
  for(i = 0; i < arr.length; i++) {
    menu.appendChild(arr[i]);
  }
  container.appendChild(menu);
  console.log(menu);
  document.body.appendChild(container);
}

function removeMenu() {
  var container = document.getElementById("container");
  if(container) {
    document.body.removeChild(container);
  }
}
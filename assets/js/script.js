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
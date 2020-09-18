var slide = document.getElementsByClassName("project");


function showProject(n) {
  slide[n].className = slide[n].className.replace("d-none", "d-flex");
}

function hideProject(n) {
  slide[n].className = slide[n].className.replace("d-flex", "d-none");
}
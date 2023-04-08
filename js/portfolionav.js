var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

document.getElementById('websitebtn').addEventListener('click', function () {

  document.querySelector('.portfoliowebsite-container-two').style.display = 'none';
  document.querySelector('.portfoliowebsite-container-three').style.display = 'none';
  document.querySelector('.portfoliowebsite-container-one').style.display = 'flex';
  
 
});

document.getElementById('webdesbtn').addEventListener('click', function () {
  
  document.querySelector('.portfoliowebsite-container-one').style.display = 'none';
  document.querySelector('.portfoliowebsite-container-three').style.display = 'none';
  document.querySelector('.portfoliowebsite-container-two').style.display = 'flex';
 
});

document.getElementById('posterdesbtn').addEventListener('click', function () {
  
  document.querySelector('.portfoliowebsite-container-one').style.display = 'none';
  document.querySelector('.portfoliowebsite-container-two').style.display = 'none';
  document.querySelector('.portfoliowebsite-container-three').style.display = 'flex';
 
});
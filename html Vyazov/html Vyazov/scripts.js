var btn =document.getElementById('hello_world');

var flag=false;

function playAudio(url) {
 
if (!flag){
  var audio = new Audio(url);

  
  audio.loop=true;
  audio.play();
  flag=true;}
}

document.getElementById("hello_image").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello world!!!";
  });



  function toggleMusic() {
    var audio = document.getElementById('music');
    var img = document.getElementById('music-toggle');
    var container = document.getElementById('hello_image');

    if (audio.paused) {
        audio.play();
        img.src = 'images/mars.png';
        container.style.backgroundColor = 'orange';
    } else {
        audio.pause();
        img.src = 'images/planet.png';
        container.style.backgroundColor = '#00ff1e';
    }
}


const box = document.getElementById("enlargeBox");

box.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
  this.style.transition = 'transform 0.4s ease';
});

box.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
  this.style.transition = 'transform 1s ease';
});


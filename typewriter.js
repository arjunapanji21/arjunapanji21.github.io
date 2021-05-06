var i = 0;
var txt = 'I can do everything about programming because i love to, i can fix your network, and even fix your printer too :D'
var speed = 25; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

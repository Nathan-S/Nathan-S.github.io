function moveBody(event) {
    // Get the mouse position.
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    // Get the title element.
    var body = document.getElementById("body");
  
    // Calculate the new position of the title.
    var newX = mouseX - body.offsetWidth / 2;
    var newY = mouseY - body.offsetHeight / 2;
  
    // Move the title to the new position.
    body.style.left = newX + "px";
    body.style.top = newY + "px";
  }
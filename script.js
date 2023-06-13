function moveH1(event) {
    // Get the mouse position.
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    // Get the title element.
    var h1 = document.getElementById("h1");
  
    // Calculate the new position of the title.
    var newX = mouseX - h1.offsetWidth / 2;
    var newY = mouseY - h1.offsetHeight / 2;
  
    // Move the title to the new position.
    h1.style.left = newX + "px";
    h1.style.top = newY + "px";
  }
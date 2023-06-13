function moveTitle(event) {
    // Get the mouse position.
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    // Get the title element.
    var title = document.getElementById("title");
  
    // Calculate the new position of the title.
    var newX = mouseX - title.offsetWidth / 2;
    var newY = mouseY - title.offsetHeight / 2;
  
    // Move the title to the new position.
    title.style.left = newX + "px";
    title.style.top = newY + "px";
  }
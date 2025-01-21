function setup() {
  createCanvas(400, 400);
  background(240); // Light background

  drawPerson(200, 200); // Draw the person in the center
}

function drawPerson(x, y) {
  fill(0); // Black for the silhouette
  noStroke();

  // Head
  ellipse(x, y - 70, 40, 40);

  // Body
  rect(x - 15, y - 50, 30, 70, 5); // Slightly rounded rectangle

  // Left Arm
  rect(x - 35, y - 50, 10, 50, 5);
  rect(166, 150, 28, 15, 15, 10, 5, 1)

  // Right Arm
  rect(x + 25, y - 50, 10, 50, 5);

  // Left Leg
  rect(x - 15, y + 20, 10, 50, 5);

  // Right Leg
  rect(x + 5, y + 19, 10, 50, 5);
}

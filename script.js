var snake = [
    { x: 10, y: 10 },
    { x: 20, y: 10 },
    { x: 30, y: 10 }
  ];
  
  var food = { x: 200, y: 200 };
  
  var direction = "up";
  
  var gameBoard = document.getElementById("game-board");
  
  var snakeElement = document.getElementById("snake");
  
  var foodElement = document.getElementById("food");
  
  function updateSnake() {
    var newHead = {
      x: snake[snake.length - 1].x,
      y: snake[snake.length - 1].y
    };
  
    switch (direction) {
      case "up":
        newHead.y -= 10;
        break;
      case "down":
        newHead.y += 10;
        break;
      case "left":
        newHead.x -= 10;
        break;
      case "right":
        newHead.x += 10;
        break;
    }
  
    snake.push(newHead);
  
    snakeElement.innerHTML = "";
  
    for (var i = 0; i < snake.length; i++) {
      var square = document.createElement("div");
      square.className = "square";
      square.style.left = snake[i].x + "px";
      square.style.top = snake[i].y + "px";
      snakeElement.appendChild(square);
    }
  
    if (snake[0].x === food.x && snake[0].y === food.y) {
      food.x = Math.floor(Math.random() * gameBoard.width) + 10;
      food.y = Math.floor(Math.random() * gameBoard.height) + 10;
      foodElement.style.left = food.x + "px";
      foodElement.style.top = food.y + "px";
    }
  
    for (var i = 1; i < snake.length - 1; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        gameOver();
      }
    }
  
    if (snake[0].x < 0 || snake[0].x >= gameBoard.width || snake[0].y < 0 || snake[0].y >= gameBoard.height) {
      gameOver();
    }
  }
  
  function gameOver() {
    alert("Game Over!");
  }
  
  window.onload = function() {
    setInterval(updateSnake, 100);
  };
  
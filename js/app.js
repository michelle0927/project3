// Enemies our player must avoid
var Enemy = function() {
    this.x = -100;
    this.row = Math.floor(Math.random() * 3) + 1;
    if (this.row == 1)
        this.y = 60;
    else if (this.row ==2)
        this.y = 145;
    else if (this.row == 3)
        this.y = 230;
    this.speed = Math.floor(Math.random()*300) + 100;
    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505)
        this.x = -100;
    // if a collision happens
    if (player.row == this.row && (player.x + 71) >= this.x && (player.x + 30) <= (this.x + 101))
        player.collision = true;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function() {
    this.x = 202;
    this.y = 380;
    this.row = 5;
    this.collision = false;
    this.score = 0;
    this.sprite = "images/char-boy.png";
};

// Update player to starting position if a collision happens
Player.prototype.update = function() {
    if (this.collision === true)
        this.reset();
};

// Draw the player and score on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // draw the score
    ctx.fillStyle = "black";
    ctx.fillRect(8, 560, 75, 20);
    ctx.font = "17px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + this.score, 12, 575);
};

// Respond to arrow inputs from user. Player cannot move off the screen.
Player.prototype.handleInput = function(key) {
    if (key == 'left' && this.x > 0)
        this.x -= 101;
    else if (key == 'right' && this.x < 404)
        this.x += 101;
    else if (key == 'up' && this.y > 48) {
        this.y -= 83;
        this.row -= 1;
    } else if (key == 'up' && this.y <= 48) { // made it to the water
        this.reset();
        this.increaseScore();
    } else if (key == 'down' && this.y < 380) {
        this.y += 83;
        this.row += 1;
    }
};

// Reset player to starting position
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 380;
    this.row = 5;
    this.collision = false;
};

// Increase the score on the screen if the player makes it to the water.
Player.prototype.increaseScore = function() {
    this.score += 1;
    ctx.fillStyle = "black";
    ctx.fillRect(8, 560, 75, 20);
    ctx.font = "17px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + this.score, 12, 575);
};

// Create enemies and player

var allEnemies = [];
for (var i = 0; i < 4; i++) {
    var e = new Enemy();
    allEnemies.push(e);
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

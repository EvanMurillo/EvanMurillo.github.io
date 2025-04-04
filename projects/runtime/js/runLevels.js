var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles(x, y, hitSize, damage, image) {
      var hitZoneSize = hitSize; // define the size of hitzone and assign it to a  variable
      var damageFromObstacle = damage; // defines the amount of damage obstacle causes and assigns to variable
      var obstacleHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      ); // creates the obstacle hitzone using the size and damage as parameters  and assigns it to a variable
      obstacleHitZone.x = x; // sets x coordinate of the obstacle
      obstacleHitZone.y = y; // sets the y coordinate of the obstacle
      game.addGameItem(obstacleHitZone); // adds thes obstacle hitzone to the game
      var obstacleImage = draw.bitmap(image); // draws the image bitmap and sote it in obstaclesimage
      obstacleHitZone.addChild(obstacleImage); // attaches the image to the obstacle hitzone
      obstacleImage.x = -80; //position the image on the hitzone by moving it left 25 pixels
      obstacleImage.y = -100; //position the image on the hitzones y value by moving it up 25 pixels
      obstacleHitZone.rotationalVelocity = 0;
    }

    function createEnemy(x, y, speed, health, image) {
      var enemy = game.createGameItem("enemy", 25); //  creates enemy game item and adds it to the game
      var scorpion = draw.bitmap("img/scorpion.png"); // creates a red sqaure and sotres it in the var redSquare
      scorpion.x = -25; // offsets the image from the hitzone by -25
      scorpion.y = -60; // offsets the image from the hitzone by -25
      enemy.addChild(scorpion); // add red square as a child to our enemy variable
      enemy.x = x; // x pos of enemy
      enemy.y = y; // y pos of enemy
      game.addGameItem(enemy); // add enemy to the game
      enemy.velocityX -= speed; // controlling how fast the menmy moves on x axis
      enemy.rotationalVelocity = 0; // sets the roation velocity of the enemy
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(health); // subtracts 10 health from  hallebots HUD
      };

      enemy.onProjectileCollision = function () {
        game.increaseScore(100); // increase your score when halle shoots the enemy

        enemy.fadeOut(); // enemey fades out when halle shoots enemy
      };
    }

    function createReward(x, y, speed, health) {
      var reward = game.createGameItem("reward", 25); //  creates reward game item and adds it to the game
      var blueSquare = draw.rect(50, 50, "blue"); // creates a blue sqaure and sotres it in the var blueSquare
      blueSquare.x = -25; // offsets the image from the hitzone by -25
      blueSquare.y = -25; // offsets the image from the hitzone by -25
      reward.addChild(blueSquare); // add blue square as a child to our reward variable
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // add reward to the game
      reward.velocityX -= speed; // controlling how fast the menmy moves on x axis
      reward.rotationalVelocity = 10; // sets the roation velocity of the reward
      reward.onPlayerCollision = function () {
        game.increaseScore(50); //
        game.changeIntegrity(health); // subtracts 10 health from  hallebots HUD
        reward.shrink();
      };
    }

    function createLevel(x, y, speed) {
      var level = game.createGameItem("level", 25); //  creates reward game item and adds it to the game
      var yellowSquare = draw.rect(50, 50, "yellow"); // creates a yellow sqaure and sotres it in the var yellowSquare
      yellowSquare.x = -25; // offsets the image from the hitzone by -25
      yellowSquare.y = -25; // offsets the image from the hitzone by -25
      level.addChild(yellowSquare); // add yellow square as a child to our level variable
      level.x = x; // x pos of level
      level.y = y; // y pos of level
      game.addGameItem(level); // add level to the game
      level.velocityX -= speed; // controlling how fast the menmy moves on x axis
      level.rotationalVelocity = 10; // sets the roation velocity of the level
      level.onPlayerCollision = function () {
        level.shrink();
        startLevel();
      };
    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; // fetches the currentLevel from the level data array and stores it in our level
      var levelObjects = level.gameItems; // retreve teh array of gameItems and store it in levelObjects

      for (var i = 0; i < levelObjects.length; i++) {
        var element = levelObjects[i];

        if (element.type === "sawblade") {
          //checks the type key:value of the gameItems objects to determine which objects to manifest
          createObstacles(
            element.x,
            element.y,
            element.hitSize,
            element.damage,
            element.image
          ); // if the condition is true it wil call the relevant function
        }
        if (element.type === "enemy") {
          //checks the type key:value of the gameItems objects to determine which objects to manifest
          createEnemy(
            element.x,
            element.y,
            element.speed,
            element.health,
            element.image
          ); // if the condition is true it wil call the relevant function
        }

        if (element.type === "reward") {
          //checks the type key:value of the gameItems objects to determine which objects to manifest
          createReward(element.x, element.y, element.speed, element.health); // if the condition is true it wil call the relevant function
        }

        if (element.type === "level") {
          //checks the type key:value of the gameItems objects to determine which objects to manifest
          createLevel(element.x, element.y, element.speed); // if the condition is true it wil call the relevant function
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}

var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 50, hitSize: 25, damage: 10, image: "img/cactus.png"},
          { type: "sawblade", x: 800, y: groundY - 50, hitSize: 25, damage: 5, image: "img/tumbleweed.png" },
          { type: "sawblade", x: 1000, y: groundY - 50, hitSize: 50, damage: 30, image: "img/sawblade.png"},
         
          { type: "enemy", x: 400, y: groundY - 50,  speed: 3, health: -10, image: "img/scorpion.png"},
          { type: "enemy", x: 1000, y: groundY - 50 , speed: 10, health: -20, image: "img/scorpion.png"},
          { type: "enemy", x: 1500, y: groundY - 50, speed: 15, health: -30, image: "img/scorpion.png"},
          
          { type: "reward", x: 500, y: groundY - 50, speed: 3, health: 10},
         
          { type: "level", x: 1500, y: groundY - 50, speed: 3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 50, hitSize: 25, damage: 10, image: "img/sawblade.png"},
          { type: "sawblade", x: 800, y: groundY - 50, hitSize: 25, damage: 20, image: "img/sawblade.png" },
          { type: "sawblade", x: 1000, y: groundY - 50, hitSize: 25, damage: 30, image: "img/sawblade.png"},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}

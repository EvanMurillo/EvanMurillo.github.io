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
          { type: "sawblade", x: 500, y: groundY , hitSize: 25, damage: 15, image: "img/cactus.png", offset:-80, offsetY: -150},
          { type: "sawblade", x: 800, y: groundY , hitSize: 25, damage: 5, image: "img/tumbleweed.png", offset:-120, offsetY: -155 },
          { type: "sawblade", x: 1700, y: groundY , hitSize: 25, damage: 30, image: "img/trap.png", offset:-70, offsetY: -50},
         
          { type: "enemy", x: 400, y: groundY ,  speed: 3, health: -10, image: "img/scorpion.png", offset:-90, offsetY: -120,},
          { type: "enemy", x: 1000, y: groundY  , speed: 10, health: -20, image: "img/mouse.png", offset:-70, offsetY: -50},
          { type: "enemy", x: 1500, y: groundY , speed: 15, health: -30, image: "img/snake.png", offset:-70, offsetY: -100},
          
          { type: "reward", x: 1800, y: groundY - 50, speed: 3, health: 10, image: "img/health.png"},
          { type: "reward", x: 1200, y: groundY - 50, speed: 3, health: 10, image: "img/gold coin.png"},
         
          { type: "level", x: 2000, y: groundY - 50, speed: 2, image: "img/diamond.png"},
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

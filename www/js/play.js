//State: DogeDodge

'use strict'

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {
  init: function () {
    console.log("%c~~~ Booting the Game ~~~\n Made by Jake S","color:#00ff00;");
  },

  preload: function () {
    this.load.image('background','assets/background.jpg');
    this.load.image('player','assets/player.png');  
  },

  create: function () {
    // background
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(50,-50);
    this.background.scale.set(1);

    // player
    this.player = this.add.sprite(160,500,'player',5);
    this.player.anchor.setTo(0.5, 0.5);
    
    // movement keys
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
    if (this.cursors.left.isDown) {
      this.player.x -= 10;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 10;
    }
  }
};

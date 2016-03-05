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
    this.load.spritesheet('falling','assets/enemy.png')
  },

  create: function () {
    // background
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(50,-50);
    this.background.scale.set(1);

    // player
    this.player = this.add.sprite(160,500,'player',5);
    this.player.anchor.setTo(0.5, 0.5);
    this.player.smoothed = false;

    // movement keys
    this.cursors = game.input.keyboard.createCursorKeys();
    
    // falling
    this.falling = this.add.sprite(100,100,'falling',5);
    this.falling.anchor.set(0.5,0.5);
    this.falling.smoothed = false;
    this.falling.animations.add('tail');
    this.falling.animations.play('tail',2,true);
  },

  update: function () {
    if (this.cursors.left.isDown) {
      this.player.x -= 5;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 5;
    }
  }
};

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
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(50,-50);
    this.background.scale.set(1);
  },

  update: function () {
  }
};

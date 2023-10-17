import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import C4C from "c4c-lib";


function enterButtonHoverState(btn) {
  btn.setStyle({ fill: "#ff0" });
}

function enterButtonRestState(btn) {
  btn.setStyle({ fill: "#fff" });
}

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super("Example");
  }

  preload() {
    this.load.image("logo", logoImg);
    this.load.image("smiley", smileyImg);
    this.load.image('court', court);
    this.load.image('playa', derrick);
  }

  create() {

    this.add.image(0, 0, 'court').setOrigin(0,0);
    var player = this.physics.add.sprite(0, 0, 'playa').setOrigin(0,0);
    player.setScale(0.1);

  }
}

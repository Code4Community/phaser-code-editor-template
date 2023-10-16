import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
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
    //this.load.image('playa', 'assets/derrick_rose.png');;
  }

  create() {

    this.add.image(0, 0, 'court').setOrigin(0,0);
    // player = this.physics.add.sprite(100, 450, 'playa');

  }
}

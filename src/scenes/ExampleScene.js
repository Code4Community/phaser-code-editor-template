import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import C4C from "c4c-editor-and-interpreter";
export default class ExampleScene extends Phaser.Scene {
  constructor() {
    super("Example");
  }
  preload() {
    this.load.image("logo", logoImg);
    this.load.image("smiley", smileyImg);
  }

  create() {
    this.smiley = this.add.sprite(100, 100, "smiley");
    //this.physics.enable(smiley, Phaser.Physics.ARCADE);
    // Create the C4C editor, inside the given element.

    // This is the text for a program which calls the function stored in the
    // symbol "alert-hello". It starts with a line comment, and then a function
    // call.
    C4C.editor.setText(`// Some testing
not = function (a)
if a
false
end`);

    // Define new function and store it in the symbol "alert-hello". This
    // function can now be called from our little language.
    C4C.interpreter.define("alert-hello", () => {
      alert("hello");
    });

    C4C.interpreter.define("move-right", (x_dist) => {
      this.smiley.x += x_dist;
    });

    C4C.interpreter.define("move-left", (x_dist) => {
      this.smiley.x -= x_dist;
    });

    // Create some interface to running the interpreter.
    const logo = this.add.image(400, 150, "logo");

    logo.setInteractive();
    logo.on("pointerdown", () => {
      const programText = C4C.editor.getText();
      // HERE'S THE IMPORTANT PART!!
      C4C.interpreter.run(programText);
    });

    const tutorialLabel = this.add.text(
      20,
      20,
      "Click the Logo to Evaluate the Program.",
      {
        fontSize: 32,
      }
    );

    // Other Stuff
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }
}

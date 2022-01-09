import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import C4C from "c4c-editor-and-interpreter";

function enterButtonHoverState(btn) {
  btn.setStyle({ fill: "#ff0" });
}

function enterButtonRestState(btn) {
  btn.setStyle({ fill: "#fff" });
}

export default class ExampleScene extends Phaser.Scene {
  constructor() {
    super("Example");
  }

  preload() {
    this.load.image("logo", logoImg);
    this.load.image("smiley", smileyImg);
  }

  create() {
    // This is the text for a program which calls the function stored in the
    // symbol "alert-hello". It starts with a line comment, and then a function
    // call.
    C4C.editor.window.init(this);
    C4C.editor.window.open();
    C4C.editor.setText(`moveRight(20)`);

    this.smiley = this.add.sprite(400, 300, "smiley");

    // Define new function and store it in the symbol "alert-hello". This
    // function can now be called from our little language.
    C4C.interpreter.define("alertHello", () => {
      alert("hello");
    });

    C4C.interpreter.define("moveRight", (x_dist) => {
      this.smiley.x += x_dist;
    });

    C4C.interpreter.define("moveLeft", (x_dist) => {
      this.smiley.x -= x_dist;
    });

    // Create some interface to running the interpreter:

    // Run Button
    const runButton = this.add
      .text(550, 100, "Evaluate", { fill: "#fff", fontSize: "30px" })
      .setInteractive()
      .on("pointerdown", () => {
        const programText = C4C.editor.getText();
        // HERE'S THE IMPORTANT PART!!
        C4C.interpreter.run(programText);
      })
      .on("pointerover", () => enterButtonHoverState(runButton))
      .on("pointerout", () => enterButtonRestState(runButton));

    // Editor Button
    const editorButton = this.add
      .text(500, 200, "Toggle Editor", { fill: "#fff", fontSize: "30px" })
      .setInteractive()
      .on("pointerdown", () => {
        C4C.editor.window.toggle();
      })
      .on("pointerover", () => enterButtonHoverState(editorButton))
      .on("pointerout", () => enterButtonRestState(editorButton));
  }
}

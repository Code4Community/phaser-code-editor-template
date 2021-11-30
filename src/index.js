import Phaser from 'phaser';
import C4C from 'c4c-editor-and-interpreter';
import ExampleScene from './scenes/ExampleScene'

C4C.editor.create(document.body);

var config =  {
    type: Phaser.AUTO,
    width: 800,
    height:600,
    scene: [ExampleScene]
};
const game = new Phaser.Game(config);


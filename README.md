# Phaser 3 + Code4Community Language Example Project

This project uses the [Phaser 3 Project Template](https://github.com/photonstorm/phaser3-project-template). Read more about everything not related to our language library there.

## Using the Language Library

1.  Install this library in your project. You can do that from github or from a local directory. For local development, the directory is best. These exact commands may not work.

        npm install --save code4community/code-editor-and-interpreter
        
    OR
    
        npm install --save file://$HOME/school/c4c-club/code-editor-and-interpreter/

2.  Create the editor.

    ```javascript
    // Create the C4C editor, inside the given element.
    C4C.editor.create(document.body);
    ```
    
    You can also pass in a theme for the editor and a flag which initially sets the editor to be invisible.
    
3.  Create some javascript functions you would like to expose to the this library's language. For our example, the javascript function just creates an alert.

    ```javascript
    // Define new function and store it in the symbol "alert-hello". This
    // function can now be called from our little language.
    C4C.interpreter.define("alert-hello", () => {
      alert("hello");
    });
    ```

4.  Expose some way for your user to run the interpreter. For our example, the user can just on click a sprite.

    ```javascript
    // Create some interface to running the interpreter.
    const logo = this.add.image(400, 150, 'logo');

    logo.setInteractive();
    logo.on("pointerdown", () => {
      const programText = C4C.editor.getText();
      // HERE'S THE IMPORTANT PART!!
      C4C.interpreter.run(programText);
    });
    ```

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

[Our Language and Editor Library](https://github.com/Code4Community/code-editor-and-interpreter) may not be easily installed through npm. This will be fixed soon.

## Available Commands

| Command         | Description                                                                     |
|-----------------|---------------------------------------------------------------------------------|
| `npm install`   | Install project dependencies                                                    |
| `npm start`     | Build project and open web server running project                               |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

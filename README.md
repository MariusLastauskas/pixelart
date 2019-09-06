# pixelart

## [DEMO](https://marius-lastauskas.000webhostapp.com/pixel-art/)

## Used tools:
Less preprocessor

Grunt

Vue.js

npm manager

Babel

sanitize-html library (https://github.com/apostrophecms/sanitize-html)

## Features:
BEM file structure, each component has _include.less file, that imports all files inside folder
and _include.less inside src/style directory includes all other _include.less files.

All .less files are compiled with grunt js helper to single minimised file src/style/main.css, 
avoiding multiple .css files.

Login inputs are validated and sanitized to add a leyer of protection from XSS attacks.

Inside main.js I have left commented code, that roughtly represents how login should be handled if there would be api prepaired for it. I would have used axios with Vue.js, script injection would also be required in index.html.

Babel was used to adapt js to work with IE11 and two last versions of other browsers.
src/js/dev/main.js holds code before, and src/js/prod/main.js holds code after babel transformed it.

Remember me button works.
Vue.js was used.

Working credentials are: 
### your@email.here
### password
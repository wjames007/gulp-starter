This project contains the bare necessities to launch a project with gulp using browser-sync and SASS which will
auto reload page on save.

Prerequisites: node and npm

Start the project with the following npm commands:
npm init -y
npm install gulp browser-sync gulp-sass --save-dev
npm install bootstrap jquery popper.js --save
npm install -g gulp-cli

Adjust all the following paths in the gulpfile.js to match your project if you modify the existing template.
Location of your source .scss files:
./src/scss/\*_/_.scss"

Location of bootstrap:
"node_modules/bootstrap/scss/bootstrap.scss

Location to output the css files:
"./src/css

Location of the bootstrap js files:
"node_modules/bootstrap/dist/js/bootstrap.min.js",

Location of your source js files:
./src/js""

var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder();

builder
    .bundle('js/*', 'bundle.js')
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });
import { Calculator } from 'js/calculator.js';
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        var latestVersion = JSON.parse(httpRequest.response)
            .pop()
            .ref.split('/')
            .pop();
            SystemJS.import('https://ajax.googleapis.com/ajax/libs/jquery/' + latestVersion + '/jquery.min.js').then(function () {
                start();
            })
    }
};
httpRequest.open('GET', 'https://api.github.com/repos/jquery/jquery/git/refs/tags');
httpRequest.send();

function start() {
    var input = $('#input');
    var form = $('#form');
    var resultDiv = $('#result');
    var calculator = Calculator();
    form.on('submit', function(event) {
        event.preventDefault();
        var numbers = input.val()
            .split('+')
            .map(function(number) {
                return parseFloat(number)
            });
        resultDiv.html(calculator.sum(numbers));
    });
}
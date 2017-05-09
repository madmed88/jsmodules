var input = document.querySelector('#input');
var form = document.querySelector('#form');
var resultDiv = document.querySelector('#result');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    var numbers = input.value
        .split('+')
        .map(function(number) {
            return parseFloat(number)
        });
    resultDiv.innerHTML = sum(numbers);
});
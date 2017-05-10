define(["js/reduce"], function (reduce){
    return function Calculator() {
        var counter = 0,

        add = function (x, y) {
            return x + y;
        },

        sum = function (list) {
            counter++;
            return counter < 3 ? reduce(list, add, 0) : 'sorry';
        }

        return {
            add: add,
            sum: sum
        };
    } ();
});
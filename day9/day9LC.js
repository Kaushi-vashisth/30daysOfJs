// problem 1
// 2667. Create Hello World Function

var createHelWold = function() {
    
    return function(...args) {
        return `Hello World`;
    }
};


// problem 2
//   2620. Counter

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};
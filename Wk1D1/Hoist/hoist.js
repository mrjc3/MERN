// 1
// Given
console.log(hello);                                   
var hello = 'world';                                 

// Hoist
var hello;
console.log(hello);   // undefinded                                
var hello = 'world';  


// 2
// Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// Hoist
var needle




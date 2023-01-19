input = "RamIsGoodBoy";
function test(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i] == input[i].toUpperCase()) {
        output += " " + input[i];
        } else {
        output += input[i];
        }
    }
    return output;
}
console.log(test(input));
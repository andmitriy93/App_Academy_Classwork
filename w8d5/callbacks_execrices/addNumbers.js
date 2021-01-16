const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let addNumbers = function(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Enter a number", function(num) {
            const num1 = parseInt(num);
            sum += num1;
            console.log(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    } else if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    };
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

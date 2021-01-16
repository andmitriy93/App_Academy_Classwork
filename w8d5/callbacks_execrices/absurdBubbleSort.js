const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const absurbBubbleSort = function (arr, sortCompletionCallback) {
    const askIfGreaterThan = function (el1, el2, callback) {
        reader.question("Is element_1 > element_2", function (str) {
            (str === 'yes') ? callback(true) : callback(false);
        });
        reader.close();
        // let sorted = false;
        // while (sorted === false) {
        //     sorted = true;
            // reader.question("Is element_1 > element_2", function (str) {
            //     (str === 'yes') ? callback.call(true) : callback.call(false);
            // });
        // }
    }

    askIfGreaterThan(1,2, (bool) => {
        console.log(bool ? "true" : "false")
    })
}



// absurbBubbleSort([5,1,10,2], () => {
//     console.log(`${callback.call}`)
// })
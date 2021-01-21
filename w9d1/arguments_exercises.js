// function sum() {
//     let total = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }

//     return total;
// }

// function sum(...args) {
//     let total = 0;

//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }    

//     return total;
// }

// console.log(sum(1, 2, 3, 4));

``
Function.prototype.myBind = function() {
  //     arguments is a built-in variable which contains all the 
  //     arguments passed to a function. 
  //     we send our desired context as first argument when calling bind 
  //     for a function, therefore, here we store that first argument in 
  //     context for later use
      
  //     We store this here as we don't want to call this.apply in the 
  //     returned function below. That is because, this can refer to say 
  //     a global context if this function is called on a variable 
  //     defined in global scope
  let self = this; 
  //     arguments built-in variable is not really an array so here we 
  //     convert it into an array using spread operator (...). We can 
  //     instead use Array.from(arguments) as well
  const first_args = Array.from(arguments)
  //const third_args = [...arguments]
  //console.log("third", third_args instanceof Array)

  // bind has to return a function so that's what we are doing here
  return function() {
    const second_args = Array.from(arguments)
  //  Finally, we use apply function on our stored this with first 
  //  argument as our desired context and our arguments (except the 
  //  first one which was actually a context). This is how apply 
  //  works. 
    const total_args = first_args.concat(second_args)
      return self.apply(total_args[0], total_args.slice(1));
      }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
 markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


function curriedSum(numArgs) {
    const numbers = [];

    function _curriedSum(num) {
        console.log("num:", num);
        numbers.push(num);
        if (numbers.length === numArgs) {
            let total = 0;
            for (let i = 0; i < numbers.length; i++) {
                total += numbers[i];
            }
            return total;
        } else {
            console.log("function", _curriedSum);
            return _curriedSum;
        }
    }

    return _curriedSum;
}

const summed = curriedSum(4);
 console.log(summed(5)(30)(20)(1)); // => 56




// Function.prototype.curry = function(numArgs) {

//   const numbers = []; 

//  const that = this;

//  function _curriedSum(num) {
//       numbers.push(num);
//   if (numbers.length === numArgs) {
//       return that(...numbers);
//   } else {
//       return _curriedSum;
//   }
// }
//     return _curriedSum;

// }
// let sums = function(...args){
//   let sum = 0 
//   args.forEach(ele => sum += ele) 
//   return sum;
// }

//  const sum = (4);
// console.log(sums.curry(4)(3)(6)(8)(1)); // => 18

Function.prototype.curry = function(numArgs) {

  const numbers = []; 

 const that = this;

 function _curriedSum(num) {
      numbers.push(num);
  if (numbers.length === numArgs) {
      return that.apply(null, numbers);
  } else {
      return _curriedSum;
  }
}
    return _curriedSum;

}

let sums = function(...args){
    let sum = 0 
    args.forEach(ele => sum += ele) 
    return sum;
  }

// const sum = (4);
// console.log(sums.curry(4)(3)(6)(8)(1));

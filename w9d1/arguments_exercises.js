// function sum() {
//     let total = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }

//     return total;
// }

function sum(...args) {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }    

    return total;
}

// console.log(sum(1, 2, 3, 4));


Function.prototype.myBind = function(ctx) {
    let bind = this
    let boundArgs = Array.prototype.slice.call(arguments, 1);

    return function() {
        let args = Array.prototype.slice.call(arguments) // args || arguments
        return bind.apply(new This, boundArgs.concat(args));
    }
}

// GitHub
// Function.prototype.myBind = function(_this, _args){
//     var that = this
//     var args = Array.prototype.slice.call(arguments)
//     return function(){
//       //console.log(arguments)
//       var args1 = Array.prototype.slice.call(arguments)
//       var args2 = args.slice(1, args.length).concat(args1)
//       that.apply(_this, args2)
//     }
//   }
//   var a = function(){
//     console.log(this, arguments)
//   }
//   a.prototype.haha = function(){
//     console.log('haha')
//   }
//   var b = function(){
//     var happy = true
//   }
//   b.prototype.lol = function(){
//     console.log('lol')
//   }
//   var c = a.myBind(b, 1, 2, 3)
//   c(4, 5)
  //Object {happy: true} [1, 2, 3, 4, 5]



// Monkey Patching
Function.prototype.myBind = function() {
    // arguments is a built-in variable which contains all the 
    // arguments passed to a function. As we already know from Part I, 
    // we send our desired context as first argument when calling bind 
    // for a function, therefore, here we store that first argument in 
    // context for later use
    let context = arguments[0],
    
    // We store this here as we don't want to call this.apply in the 
    // returned function below. That is because, this can refer to say 
    // a global context if this function is called on a variable 
    // defined in global scope
    self = this,
    
    // arguments built-in variable is not really an array so here we 
    // convert it into an array using spread operator (...). We can 
    // instead use Array.from(arguments) as well
    args = [...arguments];
    // bind has to return a function so that's what we are doing here
    return function() {
      // Finally, we use apply function on our stored this with first 
      // argument as our desired context and our arguments (except the 
      // first one which was actually a context). This is how apply 
      // works. See details of apply function if you like to 
      // understand it's working. 
      self.apply(context, args.slice(1));
    }
  }

function outerFunction() {
    let invocations = 0;
    let instances = 0;

    function innerFunction() {
        invocations++;
        return `This function has been invoked ${invocations} times. There are ${instances} instances.`;
    }

    instances++;
    return innerFunction;
}

// Create instances of the function
const func1 = outerFunction();
const func2 = outerFunction();

// Invoking the functions
console.log(func1()); // Output: This function has been invoked 1 times. There are 1 instances.
console.log(func1()); // Output: This function has been invoked 2 times. There are 1 instances.
console.log(func2()); // Output: This function has been invoked 1 times. There are 2 instances.
console.log(func2()); // Output: This function has been invoked 2 times. There are 2 instances.

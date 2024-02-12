function createCounter() {
    let count = 0; // This variable is within the scope of the createCounter function

    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function getCount() {
        return count;
    }

    return {
        increment: increment,
        decrement: decrement,
        getCount: getCount
    };
}

const counter = createCounter();

// Increment the counter
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2

// Decrement the counter
console.log(counter.decrement()); // Output: 1

// Get the current count
console.log(counter.getCount()); // Output: 1

class Queue {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }
    
    enqueue(item) {
        this.#list.push(item);
    }
    
    dequeue(item) {
        return this.#list.shift(item);
    }
    
    hasNext() {
        return (this.#list.length > 0);
    }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null

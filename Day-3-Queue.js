// Enqueue, Dequeue, Peek, isEmpty, size
class Stack {
    #data = [];

    push(params) {
        this.#data.push(params);
    }

    peek(){
        if(this.isEmpty() == true) return;
        return this.#data[this.size()-1];
    }
    
    pop(){
        if(this.isEmpty() == true) return;
        const lastElement = this.#data[this.size()-1];
        this.#data.length = this.size() - 1;
        return lastElement;
    }

    isEmpty(){
        if(this.size() == 0) return true;
        return false;
    }

    size() {
        return this.#data.length;
    }
}


class Queue {
    #data = [];
    
    isEmpty() {
        return this.size() == 0;
    }

    size() {
        return this.#data.length
    }

    peek() {
        if(this.isEmpty() == true) return false;
        return this.#data[0];
    }

    enqueue(param) {
        this.#data.push(param);
    }

    dequeue(){
        if(this.isEmpty() == true) return false;
        return this.#data.shift();
    }
}

// function reverse(array){
//     const stack = new Stack;
//     let result = [];
//     let counter = 0;
//     while(array.length > counter) {
//         stack.push(array[counter]);
//         counter++;
//     }
//     counter = 0;
//     const stackSize = stack.size();
//     while(stackSize > counter) {
//         const data = stack.pop();
//         result.push(data);
//         counter++;
//     }
//     return result;
// }

// const data = [1, 2, 3, 4, 5];
// reverse(data);

class StackFifo {
    #stack = new Stack();

    add(param){
        this.#stack.push(param);
    }
    remove(){
        let reversed = [];
        let normal = [];
        let counter = 0;
        const stackSize = this.#stack.size();
        while(stackSize > counter) {
            reversed.push(this.#stack.pop());
            counter++;
        }
        counter = 0;
        while(reversed.length > counter) {
            this.#stack.push(reversed[counter]);
            counter++;
        }
        counter = 0;
        const data = this.#stack.pop();
        const updatedStackSize = this.#stack.size();
        while(updatedStackSize > counter) {
            normal.push(this.#stack.pop());
            counter++;
        }
        counter = 0;
        while(normal.length > counter) {
            this.#stack.push(normal[counter]);
            counter++;
        }
        return data;
    }

    peek(){
        if(this.#stack.isEmpty() == true) return;
        return this.#stack.peek();
    }
}

const stackFifo = new StackFifo();
stackFifo.add(1);
stackFifo.add(2);
stackFifo.add(3);
stackFifo.add(4);
stackFifo.remove();
console.log(stackFifo.peek());




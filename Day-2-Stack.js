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

function removeAdjacentDuplicates(str) {
    const stack = new Stack();
    for(i = 0; i < str.length; i++){
        const ch = str[i];
        if(stack.isEmpty()){
            stack.push(ch);
        } else {
            const top = stack.peek();
            if(ch == top){
                stack.pop();
            } else {
                stack.push(ch);
            }
        }
    }
    let normalString = "";
    // FIX: use while instead of for
    while (!stack.isEmpty()) {
        normalString = stack.pop() + normalString; // reverse fix
    }
    return normalString;
}

const str = "abbaca";
// const str = "abbacabasdd11opp";
console.log(removeAdjacentDuplicates(str));

// function isValidString(str){
//     const stack = new Stack();
//     for(i = 0; i < str.length; i++){
//         const ch = str[i];
//         if(ch == '[' || ch == '(' || ch == '{'){
//             stack.push(ch);
//         } else {
//             if(stack.isEmpty()) return false;
//             const top = stack.peek();
//             if(
//                 (ch == ']' && top == '[') ||
//                 (ch == '}' && top == '{') ||
//                 (ch == ')' && top == '(') 
//             ) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.isEmpty();
// }

// const str = "(){}[]";
// // const str = "[({})]";

// console.log(isValidString(str));

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

function nextWarmingDay(temps) {
    const stack = []; // will store indices
    const result = new Array(temps.length).fill(0);
    for (let i = 0; i < temps.length; i++) {
        // while current temp is greater than stack top temp
        while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return result;
}

const data = [73,74,75,71,69,72,76,73];
console.log(nextWarmingDay(data)); // [1,1,4,2,1,1,0,0]


// // 3. Next Greater Element
// function nextGreaterElement(array) {
//     const stack = new Stack();
//     let stop = false; 
//     let currentElement = null;
//     let arrayCount = count = 0;

//     while(stop == false){
//         if(currentElement == null){
//             currentElement = array[count];
//         }
//         const arrayVal = array[arrayCount];
//         // console.log(currentElement, arrayCount, array, stack.size(), array.length);
//         if(currentElement < arrayVal){
//             // console.log(arrayVal);
//             stack.push(arrayVal);
//             currentElement = null;
//             count++;
//             arrayCount = 0;
//         } else if (array.length == arrayCount) {
//             stack.push(-1);
//             arrayCount = 0;
//         }
//         arrayCount++;
//         if(stack.size() == array.length) stop = true;
//     }
//     let result = [];
//     const size = stack.size();
//     for(i = 0; i < size; i++){
//         result.unshift(stack.pop());
//     }
//     return result
// }

// // Input: [2,1,2,4,3]
// // Output: [4,2,4,-1,-1]
// const data = [2,1,2,4,3];
// console.log(nextGreaterElement(data));


// function removeAdjacentDuplicates(str) {
//     const stack = new Stack();
//     for(i = 0; i < str.length; i++){
//         const ch = str[i];
//         if(stack.isEmpty()){
//             stack.push(ch);
//         } else {
//             const top = stack.peek();
//             if(ch == top){
//                 stack.pop();
//             } else {
//                 stack.push(ch);
//             }
//         }
//     }
//     let normalString = "";
//     // FIX: use while instead of for
//     while (!stack.isEmpty()) {
//         normalString = stack.pop() + normalString; // reverse fix
//     }
//     return normalString;
// }

// const str = "abbaca";
// // const str = "abbacabasdd11opp";
// console.log(removeAdjacentDuplicates(str));

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

// 1. Find maximum
// let input = [3, 7, 2, 9, 5];
// let maxValue = 0;

// for(let i = 0; i < input.length; i++){
//     if(maxValue < input[i]){
//         maxValue = input[i];
//     }
// }
// console.log(maxValue); // 9

// 2. Find Minimum Element
// let input = [1, 2, -11, 3, 0, 4, -9];
// let minValue = null;

// for(let i = 0; i < input.length; i++){
//     if(minValue == null || minValue > input[i]){
//         minValue = input[i];
//     }
// }
// console.log(minValue); // -11

// 3. Sum of Array
// let input = [1, 2, 3, 4];
// let sum = 0;

// for(let i = 0; i < input.length; i++){
//     sum += input[i];
// }
// console.log(sum); // 10

// 4. Count Even Numbers
// let input = [1, 2, 3, 4, 6, 7, 8];
// let evenCount = 0;
// for(let i = 0; i < input.length; i++){
//     if((input[i] % 2) == 0){
//         evenCount++;
//     }
// }
// console.log(evenCount); // 4

// 5. Reverse an Array (NO .reverse())
// let input = [1, 2, 3, 4, 6, 7, 8];
// let reversed = [];
// let count = 0;
// for(let i = 0; i < input.length; i++){
//     const reversedVal = input[input.length - count++];
//     if(reversedVal !== undefined) {
//         reversed.push(reversedVal);
//     } 
// }
// console.log(reversed);

// 6. Check if Array is Sorted
// function isSorted(input){
//     let result = true;
//     let prevValue = null;
//     for(let i = 0; i < input.length; i++){
//         if(prevValue == null){
//             prevValue = input[i];
//             continue;
//         } 
//         if(prevValue > input[i]){
//             result = false;
//         }
//     }
//     return result;
// }
// console.log(isSorted([1 , 2, 3])); // true
// console.log(isSorted([8, 1 , 2, 3])); // false

// 7. Find Second Largest Element
// let count = 0;
// let input = [1, 10, 300, 5, 800, 8, 100, 20, 200, 350];
// let updatedArray = [];
// for(let i = 0; i < input.length; i++){
//     if(updatedArray.length === 0) {
//         updatedArray.push(input[i]);
//     } else {
//         for(let x = 0; x <= updatedArray.length; x++){
//             if(updatedArray[0] > input[i]){
//                 if(updatedArray[1] < input[i]){
//                     updatedArray.splice(1, 0, input[i]);
//                     break
//                 } else {
//                     updatedArray.splice(2, 0, input[i]);
//                     break;
//                 }
//             } else {
//                 updatedArray.unshift(input[i]);
//                 break;
//             }
//         }
//     }
// }

// console.log(updatedArray[1]); // 20

// 8. Remove Duplicates (return new array)
// function isValueExistInArray(value, array){
//     let result = false
//     for (let index = 0; index < array.length; index++) {
//         if(value === array[index]){
//             result = true;
//         }
//     }
//     return result;
// }

// let input = [1, 2, 2, 3, 4, 4];
// let uniqueArray = [];
// for(let i = 0; i < input.length; i++){
//     if(uniqueArray.length === 0) {
//         uniqueArray.push(input[i]);
//     } else {
//         for(let x = 0; x <= uniqueArray.length; x++){
//             if(!isValueExistInArray(input[i], uniqueArray)){
//                 uniqueArray.push(input[i]);
//                 break;
//             } else {
//                 break
//             }

//         }
//     }
// }
// console.log(uniqueArray);

// 9. Move All Zeros to End
// let input = [0, 1, 0, 3, 12];
// let notZeroArray = [];
// let zeroArray = [];

// for(let i = 0; i < input.length; i++){
//     if(input[i] != 0){
//         notZeroArray.push(input[i]);
//     } else {
//         zeroArray.push(input[i]);
//     }
// }

// for(let x = 0; x < zeroArray.length; x++){
//     notZeroArray.push(zeroArray[x]);
// }

// console.log(notZeroArray);

// 10. Rotate Array by 1 (Right)
// let input = [1, 2, 3, 4];
// let otherValues = [];
// let updatedArray = [];
// for(let i = 0; i < input.length; i++){
//     if(i < input.length - 1){
//         otherValues.push(input[i]);
//     }
// }
// updatedArray.push(input[input.length-1]);
// for(let i = 0; i < otherValues.length; i++){
//     updatedArray.push(otherValues[i]);
// }

// console.log(updatedArray);

// 11. Find Missing Number (0 to n)
// function doesValueExistInArray(value, array){
//     let result = false;
//     for(let i = 0; i < array.length; i++){
//         if(value == array[i]){
//             result = true;
//         }
//     }
//     return result;
// }
// let input = [0,1,3,10];
// let lastNumberOfArray = input[input.length-1];
// let missingNumbers = [];
// for(let i = 0; i < lastNumberOfArray; i++){
//     if(doesValueExistInArray(i, input) == false){
//         missingNumbers.push(i)
//     }
// }
// console.log(missingNumbers);


// 12. Find Duplicate Number
// function doesValueExistInArray(value, array){
//     let result = false;
//     for(let i = 0; i < array.length; i++){
//         if(value == array[i]){
//             result = true;
//         }
//     }
//     return result;
// }

// let input = [1, 3, 4, 2, 2];
// let duplicates = [];
// let uniqueArray = [];
// for(let i = 0; i < input.length; i++){
//     if(uniqueArray.length == 0){
//         uniqueArray.push(input[i]);
//     } else {
//         for(let x = 0; x < uniqueArray.length; x++){
//             // console.log(input[i], uniqueArray, doesValueExistInArray(input[i], uniqueArray))
//             if(doesValueExistInArray(input[i], uniqueArray) == true){
//                 duplicates.push(input[i]);
//                 break;
//             } else {
//                 uniqueArray.push(input[i]);
//                 break;
//             }
//         }
//     }
// }
// console.log(duplicates);


// 14. Two Sum (VERY IMPORTANT)
// let input = [2,7,11,15];
// let target = 9;
// let outPut = [];
// for(let i = 0; i < input.length; i++){
//     for(let x = 0; x < input.length; x++){
//         if((input[i] + input[x]) == target && outPut.length == 0){
//             outPut = [i, x];
//         }
//     }
// }
// console.log(outPut); // [0, 1]
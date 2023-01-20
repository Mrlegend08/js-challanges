// let arr1 = [1, 2, 3]
// let result = [];
// function rotateleft3(nums) {
//     for (var i = 1; i < nums.length; i++) {
//         result.push(nums[i]);
//     }
//     result.push(nums[0])
//     return result;
// }
// console.log(rotateleft3(arr1))



// var arr1 = [6, 5, 4]
// function firstlastsix(arr) {
//     if (arr[0] === 6 || arr[arr.length - 1] === 6) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(firstlastsix(arr1))



// var arr = [2, 4, 1]
// if (arr[0] === arr[arr.length - 1]) {
//     console.log(true)
// }else{
//     console.log(false)
// }

// function commonEnd(a, b){
//     if(a[0] === b[0] || a[a.length-1] === b[b.length-1]){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(commonEnd([1, 2,function qow(a) {
//     let sum = 0;
//     for (let i = 0; i <= a.length - 1; i++) {
//         sum += a[i];
//     }
//     return sum;
// }

// console.log(qow([1, 3, 4])) 3], [7, 3]))




// function qow(a) {
//     let sum = 0;
//     for (let i = 0; i <= a.length - 1; i++) {
//         sum += a[i];
//     }
//     return sum;
// }

// console.log(qow([1, 3, 4]))




// let result = [];
// function nmadur2(a) {
//     for (let i = a.length - 1; i >= 0; i--) {
//         result.push(a[i])
//     }
//     return result;
// }

// console.log(nmadur2([1, 2, 3]))



// var arr = [9, 2, 3]
// let max = 0;
// function maxEnd(arr) {
//     let max = 0
//     for (var i = 0; i < arr.length; i++) {
//         if (i == 0 || i == arr.length - 1) {
//             if (arr[i] > max) {
//                 max = arr[i]
//             }
//         }
//     }
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = max
//     }
//     return arr;
// }

// console.log(maxEnd(arr))



// function sum2(arr) {

//     return arr[0] + arr[1];
// }

// console.log(sum2([1, 2, 3]));



// function middleway(a, b) {
//     let arr = [];
//     if (a.length % 2 == 0) {
//         arr.push(a[a.length / 2 - 1], a[a.length / 2]);
//     } else {
//         arr.push(a[Math.floor(a.length / 2)])
//     }

//     if (b.length % 2 == 0) {
//         arr.push(b[b.length / 2 - 1], b[b.length / 2]);
//     } else {
//         arr.push(b[Math.floor(b.length / 2)])
//     }

//     return arr;
// }


// console.log(middleway([1, 2, 3], [4, 5, 6, 7]))


// function makeend(a){
//     return [a[0] , a[a.length - 1]]
// }

// console.log(makeend([1,2,5,4]))

// var arr1 = [1, 5]
// function dif(arr) {
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j] === 2 || arr[j] === 3) {
//             return true;
//         }
//     }
//     return false;

// }
// console.log(dif(arr1))



// var arr1 = [1, 5]
// function dif(arr) {
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j] !== 2 || arr[j] !== 3) {
//             return true;
//         }
//     }
//     return false;

// }
// console.log(dif(arr1))



// var arr = [1, 2, 6]

// function makelast(a) {
//     let arr2 = [];
//     for (let i = 0; i < a.length * 2; i++) {
//         if (i === a.length * 2 - 1) {
//             arr2.push(a[a.length - 1])
//         } else {
//             arr2.push(0)
//         }
//     }
//     return arr2;
// }

// console.log(makelast(arr))


// var arr = [2, 5]

// function double23(a) {
//     let number = a[0]
//     let front = null;
//     for (let i = 0; i < a.length; i++) {
//         if (number === a[i]) {
//             front = true
//         } else {
//             front = false
//         }
//     }
//     return front;
// }

// console.log(double23(arr))



// var arr = [2, 3, 1]

// function twothree(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 2 && a[i + 1] === 3) {
//             a[i + 1] = 0
//         }
//     }
//     return a;
// }

// console.log(twothree(arr))




// function start1(a, b) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 1) {
//             count += 1;
//         }
//     }
//     for (let i = 0; i < b.length; i++) {
//         if (b[i] === 1) {
//             count += 1;
//         }
//     }
//     return count;
// }

// console.log(start1([1, 2, 3], [5, 1, 1]))




// function biggerTwo(a, b) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum1 += a[i];
//     }
//     for (let i = 0; i < b.length; i++) {
//         sum2 += b[i];
//     }
//     if (sum1 >= sum2) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(biggerTwo([1, 2], [3, 4]))


// function pulsTwo(a, b) {
//     return console.log([...a, ...b])
// }
// pulsTwo([1, 2], [3, 4])



// function swapEnds(a) {
//     let first = a[0];
//     a[0] = a[a.length - 1]
//     a[a.length - 1] = first;
//     return console.log(a);
// }
// swapEnds([1, 5, 4, 9, 5])


// function middleThree(a) {
//     let arr = [];
//     arr.push(a[Math.floor(a.length / 2 - 1)], a[Math.floor(a.length / 2)], a[Math.floor(a.length / 2 + 1)])
//     return console.log(arr)
// }

// middleThree([1, 5, 6, 4, 7, 9, 10])



// var arr = [1, 4, 54]

// console.log(Math.max(...arr))




// function frontPiece(a) {
//     let arr = []
//     if (a.length > 1) {
//         for (let i = 0; i < 2; i++) {
//             arr.push(a[i])
//         }
//     } else {
//         arr.push(a[0])
//     }
//     return console.log(arr)
// }

// frontPiece([1, 5, 8])


// function unluccky(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 1 && a[i + 1] === 3){
//             return true;
//         }
//     }
//     return false
// }

// console.log(unluccky([5,4,1,3,5]))



// function front11(a, b){
//     let arr = [];
//     arr.push(a[0],b[0])
//     return console.log(arr)
// }

// front11([1,2,3],[5,4,5])



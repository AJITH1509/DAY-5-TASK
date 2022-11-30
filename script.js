
//1. print odd numbers using anonymous function

// var arr = [12,13,14,15,17,19,21]
// var result =[];
// var odd = function(arr){
//      for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//            result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(odd(arr));

// output : [13, 15, 17, 19, 21]

//1. print even numbers using IIFE
// ( function odd(arr){
//     var result =[];
//           for(var i=0;i<arr.length;i++){
//               if(arr[i]%2!=0){
//                  result.push(arr[i]);
//               }
//           }
//         console.log (result);
//       }
//      )([12,13,14,15,17,19,21])

//  // output : [13, 15, 17, 19, 21]


///2.Convert all the strings to title caps in a string array
// var str="guvi geeks"
// var u=function(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// console.log(u(str));

// OUTPUT : Guvi Geeks

//Convert all the strings to title caps in a string array(IIFE)
// ( function(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++){
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     console.log(str.join(' '));
// }
//   )("guvi geeks")

//   // OUTPUT : Guvi Geeks

//////3.Sum of all numbers in an array using anonymous function

//   var arr = [1,9,9,7]
//   var sum =0;
//   var add = function(arr){
//        for(var i=0;i<arr.length;i++){
//            sum = sum +(+arr[i]);
//       }
//       return sum;
//   }

//   OUTPUT : 26
  
//   console.log(add(arr));
//   //3.Sum of all numbers in an array using IIFE

// (function(arr){
//    var sum =0;
//        for(var i=0;i<arr.length;i++){
//            sum = sum +(+arr[i]);
//       }
//       console.log(sum);
//   })([1,9,9,7])

//   OUTPUT : 26

//4. Return all prime numbers in a array using anonymous function

// var arr = [3,4,6,7,9,11,14];
// var result = [];
// var dummy = [];
// var prime = function(arr){
//  for(i=0; i<arr.length; i++)
// {
//      if(arr[i]===2 || arr[i]===3 || arr[i]===5 ||arr[i]===7)
//      {
//          result.push(arr[i]);
//      }
//      else if (arr[i]%2 === 0 || arr[i]%3 === 0 ||arr[i] === 0 ||arr[i]%7 === 0)
//      {
//          dummy.push(arr[i]);
//      }
//      else
//      {
//          result.push(arr[i]);
//      }
// }
// return result.join(" ") ;
// }
// console.log(prime(arr));

// OUTPUT : 3 7 11

// 4.Return all prime numbers in a array using IIFE

// (function(arr){
//     var result = [];
// var dummy = [];

//     for(i=0; i<arr.length; i++)
//    {
//         if(arr[i]===2 || arr[i]===3 || arr[i]===5 ||arr[i]===7)
//         {
//             result.push(arr[i]);
//         }
//         else if (arr[i]%2 === 0 || arr[i]%3 === 0 ||arr[i] === 0 ||arr[i]%7 === 0)
//         {
//             dummy.push(arr[i]);
//         }
//         else
//         {
//             result.push(arr[i]);
//         }
//    }
//    console.log (result.join(" ")) ;
// }
// )([3,4,6,7,9,11,14])

// OUTPUT : 3 7 11

//5.Return all the palindromes in an array using anonyomus function

//  let arr1 = [ "abc", "car", "dad", "racecar", "cool" ];
//  let N = arr1.length;
  
//  // Print required answer
//  let s = function (arr1,N)
//  {
//      let ans = [];
  
//      // Loop to find palindrome string
//      for (let i = 0; i < N; i++) {
  
//          // Checking if given string is
//          // palindrome or not
//          if (isPalindrome(arr1[i])) {
  
//              // Update answer variable
//              ans.push(arr1[i]);
//          }
//      }
//      return ans;
//  }
//  if(s.length == 0)
//      console.log("-1");
//  for(let st of s(arr1,N))
//      console.log(st," ");
//  // Function to check if given string
//  // is Palindrome or not
//  function isPalindrome(s)
//  {
//      // Copy string s char into string a
//      let a = s;
//      s = s.split('').reverse().join('');
  
//      // Check if two string are equal or not
//      return s == a;
//  }
 
//      OUTPUT: dad  
//              racecar

//  //  5.Return all the palindromes in an array using IIFE      

//              ( function (arr)
//  {
//     let n=arr.length;
//      let ans = [];
  
//      // Loop to find palindrome string
//      for (let i = 0; i < n; i++) {
  
//          // Checking if given string is
//          // palindrome or not
//          if (isPalindrome(arr[i])) {
  
//              // Update answer variable
//              ans.push(arr[i]);
//          }
//      }

//      console.log(ans);
//  }) ([ "abc", "car", "ada", "racecar", "cool" ])

//  // Function to check if given string
//  // is Palindrome or not
//  function isPalindrome(s)
//  {
//      // Copy string s char into string a
//      let a = s;
//      s = s.split('').reverse().join('');
  
//      // Check if two string are equal or not
//      return s == a;
//  }

//  //      OUTPUT: dad  

// //              racecar

// ----------------------------------ARROW FUNCTIONS----------------------------

//1.print all the odd numbers in the arrays

// var odd = (arr)=>{
//     var result =[];
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]%2!=0){
//                result.push(arr[i]);
//             }
//         }
//         return result;
// }
// console.log(odd([12,13,14,15,17,19,21]))


// ///2.Convert all the strings to title caps in a string array



// var u=(str)=>{
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
//   }
//   console.log(u("guvi geeks"));

// //   3.Sum of all numbers in an array
 
//   var add = (arr)=>{
//     var sum =0;
//        for(var i=0;i<arr.length;i++){
//            sum = sum +(+arr[i]);
//       }
//       return sum;
//   }
  
//   console.log(add([12,13,14,15,17,19,21]));


// //4.Return all the prime numbers in an array


// var prime = (arr)=>{
//     var result = [];
// var dummy = [];
//  for(i=0; i<arr.length; i++)
// {
//      if(arr[i]===2 || arr[i]===3 || arr[i]===5 ||arr[i]===7)
//      {
//          result.push(arr[i]);
//      }
//      else if (arr[i]%2 === 0 || arr[i]%3 === 0 ||arr[i] === 0 ||arr[i]%7 === 0)
//      {
//          dummy.push(arr[i]);
//      }
//      else
//      {
//          result.push(arr[i]);
//      }
// }
// return result.join(" ") ;
// }
// console.log(prime([3,4,6,7,9,11,14]));

// 5.Return all the palindromes in an array


// const arr5 = ['carecar', 1344, 12321, 'did', 'cannot'];
// const IisPalindrome =(el)=> {
//    const str = String(el);
//    let i = 0;
//    let j = str.length - 1;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;                                                
// };
// const findPalindrome = arr5 => {
//    return arr5.filter(el => IisPalindrome(el));
// };
// console.log(findPalindrome(arr5));

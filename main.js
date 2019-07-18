// task1

function printTimeout(n) {
    setTimeout(function() {
        console.log('str') 
    }, n*1000);
}
printTimeout(4)

// task2

function sumAll(n) {
  if (n == 1) return 1;
    return n + sumall(n - 1);
  }
sumAll(2); // 3
sumAll(4); // 10


// task4
    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
      }
factorial(3); // 6
factorial(5); // 120

//task6
function filterNumbers(arr, maxNumber) {  
  return arr.filter(arr => arr < maxNumber);
  
   }
filterNumbers([1, 4, 8, 1, 20], 5)

// task7
function minMax(arr) {
    console.log( 
        'max:',Math.max.apply(null, arr),
        'min',Math.min.apply(null, arr));
  }
   
  minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }


// task8
function average (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum / arr.length;
}
average([1,4,2]) // 2.33
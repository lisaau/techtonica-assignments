// Solutions for hash table code challenges. Each may contain more than one solution.

// ---------- TWO SUM ---------- //
// Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. 
const twoSum = function(nums, target) {
    // store previous values we encountered in hash table
    const previousValues = {}
    // iterate over given array
    for (let i = 0; i < nums.length; i++) {
        // set up the variables we'll need to work with
        const currentNumber = nums[i];
        // the needed value + currentNumber adds up to the target
        const neededValue = target - currentNumber;
        // the index of the needed value
        const previousValuesIndex = previousValues[neededValue];

        // if the index is in the previous values hash table, we can return that index along with the current index, otherwise save the current index in the hash table with the currentNumber as they key
        if (previousValuesIndex != null) {
            return [previousValuesIndex, i]
        } else {
            previousValues[currentNumber] = i
        }
    }
}

// let twoSumArray = [2, 7, 11, 15];
// let twoSumTarget = 9;
// console.log(twoSum(twoSumArray, twoSumTarget))

var twoSum = function(nums, target) {
    let hashTable = new Map();
     for (let i = 0; i < nums.length; i++) {
         //check to see if the key already exist if not set the key-val pair
         if(hashTable.has(target - nums[i])) {
             // console.log(numsMap.get(target - nums[i], i))
             return [hashTable.get(target - nums[i]), i];
         } else {
             hashTable.set(nums[i], i);
         }
     }
 };
 

 

// ---------- SINGLE NUMBER ---------- //
const singleNumber = function(numArr) {
    let hashTable = new Map();

    // iterate over the array and add each element into the hashTable.
    // if it already exists, increment the count by one
    for (let num of numArr) {
        if (!hashTable.has(num)) {
            hashTable.set(num, 1)
        } else {
            hashTable.set(num, hashTable.get(num) + 1)
        }
    }

    // iterate over the key 
    for (let [key, val] of hashTable) {
        if (val === 1) {
            return key
        }
    }
}

// let singleNumberArray = [2,2,1];
// console.log(singleNumber(singleNumberArray));

var singleNumber = function(nums) {
    let hashTable = new Map();
    for (let i = 0; i < nums.length; i++){
        if(hashTable.has(nums[i])){
            hashTable.set(nums[i], hashTable.get(nums[i]) + 1)
        } else {
            hashTable.set(nums[i], 1)
            console.log('hashtable', hashTable)
        }
    }
    for (let i = 0; i < nums.length; i++){
        if(hashTable.get((nums[i])) === 1){
            return nums[i]
        }
    }
};

// ---------- UNIQUE NUMBER OF OCCURENCES ---------- //
// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
const uniqueNumber = function(numArr) {
    let hashTable = new Map();

    for (let num of numArr) {
        if (!hashTable.has(num)) {
            hashTable.set(num, 1)
        } else {
            hashTable.set(num, hashTable.get(num) + 1)
        }
    }

    let valueSet = new Set();
    for (let val of hashTable.values()) {
        valueSet.add(val)
    }

    if (valueSet.size === hashTable.size) {
        return true;
    } else {
        return false;
    }
}

// console.log(uniqueNumber([1,2,2,1,1,3]));
// console.log(uniqueNumber([1,2]));
// console.log(uniqueNumber([-3,0,1,-3,1,1,1,-3,10,0]));

var uniqueOccurrences = function(arr) {
    let mapArr = new Map()
    for (let i = 0; i < arr.length; i++){
        if (mapArr.has(arr[i])){
            mapArr.set(arr[i], (mapArr.get(arr[i]) + 1))
        } else {
         mapArr.set(arr[i], 1)
        }
    }
    let setArr = new Set();
    for (let j = 0; j < arr.length; j++){
        setArr.add(arr[j])
    }
    return mapArr.values().length === setArr.length
}; 



// ---------- Code walkthrough extension problems ---------- //
// (1) What if we wanted the movie lengths to sum to something close to the flight length (say, within 20 minutes)?

// this soluton assumes the range is plus or minus a given range that is input as a parameter
function canTwoMoviesWithinTwentyFillFlight(movieLengths, flightLength, range) {
    /// create a set for Movie lengths we've seen so far
    const movieLengthsSeen = new Set();
    // loop through movies
    for (let i = 0; i < movieLengths.length; i++) {
        // treat each item as the firstMovieLength.
        const firstMovieLength = movieLengths[i];
        // See if there's a matchingSecondMovieLength
        const matchingSecondMovieLength = flightLength - firstMovieLength; 
        //  Iterate over movieLengthsSeen to see if there's a value within the 20 min range
        for (let val of movieLengthsSeen.values()) {
            if (val <= matchingSecondMovieLength + range && val >= matchingSecondMovieLength - range) {
                return true;
            }
        }
     // Keep our movieLengthsSeen set up to date by adding in the current firstMovieLength.
     movieLengthsSeen.add(firstMovieLength);
    }
    // We never found a match, so return false
    return false;
  }
  
const movieLengths = [ 120, 40, 45, 108, 203];
const flightTime = 260;
console.log(canTwoMoviesWithinTwentyFillFlight(movieLengths, flightTime, 20));


// another solution, the two lengths add up to less than or equal to the flight length within 20 mins
function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const totalMovieTimes = new Set()
    const buffer = 20;
    const minLengthOfMovies = flightLength - buffer;
    // loop through movies
      //create a set of all movie lengths within the buffer
    for (let j = minLengthOfMovies; j <= flightLength; j++){
        totalMovieTimes.add(j)
    }
    for (let i = 0; i < movieLengths.length - 1; i++) {
      const firstMovieLength = movieLengths[i];
      for(let j = i + 1; j < movieLengths.length; j++){
          const secondMovieLength = movieLengths[j];
          const combinedLength = firstMovieLength + secondMovieLength;
          if(totalMovieTimes.has(combinedLength)) return true;
      }
    }
    // We never found a match, so return false
    return false;
  }
  function whichMoviesFillFlight(movieLengths, flightLength){
  }

/*
RESOURCES
Hash Tables | Data Structures in JavaScript — https://www.youtube.com/watch?v=QuFPIZj55hU by Beiatrix on Youtube
Hash Table Implementation  — https://repl.it/@beiatrix/OldlacePreciousInterface
How to Implement a Hash Table in JavaScript —  https://www.youtube.com/watch?v=UOxTMOCTEZk by Ben Award
Javascript in Plain English — https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b
Hash Table Problems: https://www.interviewcake.com/question/javascript
https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/
*/
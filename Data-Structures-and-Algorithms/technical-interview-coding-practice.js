// reverse a string (ie. given 'abc', we want 'cba')
// if we didn't want commas (ie. given 'a,b,c', we want 'cba')
// if exclude was an array of characters we want to exclude

function reverseString(str, exclude) {
    if (str === null) {
        return "";
    }
    // initialize result variable that we'll return at the end
    let result = "";
    // iterate over input string starting from the end
    for (let i = str.length - 1; i >= 0; i-- ) {
        // console.log("str[i]: ", str[i]);
        
        let notFound = true;
        for (let j = 0; j < exclude.length; j++) {
            // console.log("exclude[j]: ", exclude[j]);
            if (str[i] === exclude[j]) {
                notFound = false;
            }
        }
        if (notFound) {
            result = result + str[i];
        }

        // if (!exclude.includes(str[i])) {
        //     result = result + str[i]
        // }
    }
    
    // return reversedString
    return result;
}

let testString = "abc";
let emptyString = "";
let notString = 123;
let testString2 = null;
let testString3 = "a,b,c";

// console.log(reverseString(testString));
// console.log(reverseString(emptyString));
// console.log(reverseString(notString));
// console.log(reverseString(testString2));

// console.log(reverseString(testString3, ','));
console.log(reverseString(testString3, [',', 'b']));


let tree =  {
    name: 'lisa',
    
    children: [{name: 'dog', children: null}, {name: 'cat', children: null}]
}

addChild: () => {}
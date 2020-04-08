// --------------- STACK, QUEUES, LINKED LIST --------------- //
// Coding Challenge 1 - implementing stack methods
class Stack{
    constructor(){
        this.array=[],
        this.top = 0; //this.top refers to the index of an array. I assigned the value to 0 to allow to you to push the first value to the array.Then you can increment it after it pushed to the array.
    }
    
    // add push method here 
     push(element){
     // put your code here 
        this.array.push(element)
        this.top++
     }
     
    // add isEmpty method here
     isEmpty(){
       if (this.array.length === 0) {
           return true
       }
       return false
     }
     
     // add pop method here and return the word "underflow" is the array empty
     pop(){
        this.array.pop();
     }
}
    
    let stack= new Stack();


// Code Challenge 2 - implementing circle queue methods
class CircleQueue{
    constructor(arraySize){
        this.data = Array(arraySize);
        this.head = 0;
        this.rear = 0;
    }
    
    //add data to queue
    enqueue(data){
        if (!this.isFull()) {
            this.data.push(data);
            this.rear = indexOf(this.data[this.data.length - 1])
        } else {
            return 'Queue is full. Cannot add more'
        }
    }
    
    //delete data from queue
    dequeue(){
        if (!this.isEmpty()) {
            this.data.shift();
            this.head = indexOf(this.data[ this.head + 1])
        } else {
            return 'Queue is empty already'
        }
    }
    
    //find out if queue is full
    //should return boolean
    isFull(){
        if (this.data.length.includes(undefined)) {
            return false
        }
        return true
    }
    
    //find out if queue is empty
    //should return boolean
    isEmpty(){
        if (this.data.length === 0) {
            return true
        }
        return false
    }
}

// Code Challenge 3 - implementing linked list
class NodeLL {
    constructor (value) {
        this.data = value,
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    add(value) {
        let node = new NodeLL(value);
        let current;

        // if list is empty, add the element and make it the head
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++
    }
}


// --------------- SORTING AND SEARCHING ALGORITHMS --------------- //
// Code Challenge 1
// The Merge Sort method is too complex to fully implement as a code challenge, but as it's something you're likely to be asked about in interviews, we want you to get familiar with how you might go about implementing it.

// Using what you've learned about Merge Sort (divide and conquer, recursion), write some pseudocode outlining the steps it would take to implement on the following array. Then use the remaining half-hour to get as much of the code in place as you can.
// 
// Hint: you might want to break it up into two functions.
// Assume there will be no repeating elements in the array.

function mergeSort(arr) {
    // your pseudocode here
    // if the array has length 0 or 1 it's already sorted. return that array
    // if array has more than one element, split array into two sub-arrays and sort each sub-array
    // merge sorted sub-arrays by
        // looking at the first element of each sub-array, move the smaller one to the end of the result
        // when one array is empty, copy the rest of the other array onto result
}

let numSort = [9, 3, 1, 5, 8, 0, 6, 2];
mergeSort(numSort);



// Code Challenge 2
/*
There are two string arrays; capitals and countries.

'capitals' is a sorted array with names of capital cities.
'countries' is an unordered array with names of countries corresponding to the capitals.

Write a function which takes two array of strings - capitals and countries  
 -and a city-name string as parameters. 
 The city-name is present in the capitals array.
 Find the country name corresponding to the city-name.
 
 The search should be efficient and with complexity < O(n)
 Hints - binary search
*/

function findCountry(capitals, countries, city) {
    // find the index of capital
    // the index of the country is same as that of the capital, which we found
    let capitalIndex = findCapital(capitals, 0, capitals.length, city);
  
    // Using the index, find the country
    let country = countries[capitalIndex];
  
    // return the country name
    return country;
  }
  
  function findCapital(capitals, start, end, city) {
    if (start < end) {
        let mid = Math.floor( (start + end) / 2 );

        if (capitals[mid] === city) {
            return mid
        }

        else if (capitals[mid] > city) {
            return findCapital(capitals, start, mid - 1, city)
        }

        else {
            return findCapital(capitals, mid + 1, end, city)
        }
    }
    return -1
  }
  const capitals = ["Aden", "Algiers", "Baghdad", "Baku",
      "Berlin", "Rabat", "Tehran", "Tripoli", "Tunis"];
  const countries = ["Yemen", "Algeria", "Iraq", "Azerbaijan",
      "Germany", "Morocco", "Iran", "Libya", "Tunisia"];
  const country = findCountry(capitals, countries, "Rabat");
  console.log(country);
  
  
// Code Challenge 3
// Implement Selection Sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[min] > arr[j]) {
            min = j;
          }
        }
        // swap
        if (min != i) {
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
        }
      }
      return arr;
  }
  
  console.log(selectionSort([1, 8, 2, 4, 5]));

// Code Challenge 4
// Implement Insertion Sort
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let prevIndex = i - 1;
        while (prevIndex >= 0 && arr[prevIndex] > temp) {
            arr[prevIndex + 1] = arr[prevIndex];
            prevIndex--
        }
        arr[prevIndex + 1] = temp
    }    
    return arr
}
  
  console.log(insertionSort([8, 7, 6, 9, 5])); //Output: [5, 6, 7, 8, 9]
  



// --------------- TREES --------------- //
// Code Challenge 1
// BST's are just a collection of nodes that are linked together
// let's start by making the 'atom' of a binary search tree, a Node
class Node {
    constructor(data, left, right) {
      this.data = data;
      this.left = left || null;
      this.right = right || null;
    }
  }
  
  class BinarySearchTree {
    constructor(root) {
      this.root = root || null;
    }
    
    
    insert(data) {
      let newNode = new Node(data);
      
      // if BST is empty, we want to make the new node the root
      if (this.root === null) {
        this.root = newNode;
      } else { // if BST is not empty, we want to find the right place to insert the node
        this.recursiveInsert(newNode, this.root);
      }
    }
    
    recursiveInsert(newNode, currentNode) {
      if (currentNode === null || newNode.data === currentNode.data) return; // BST's don't have duplicates
        if (newNode.data < currentNode.data) { // if newNode is smaller than current node we want to go to the left
          if (currentNode.left === null) {
            currentNode.left = newNode;
          } else {
            this.recursiveInsert(newNode, currentNode.left);
          }
        }
        if (newNode.data > currentNode.data) { // if newNode is larger than current node we want to go to the right
          if (currentNode.right === null) {
            currentNode.right = newNode;
          } else {
            this.recursiveInsert(newNode, currentNode.right);
          }
        }
    }
    
    search(data, node) { 
      // write a function that searches the binary tree and returns the node containing data
      // *HINT*: recursion is your friend here
      
      // if node is null, data was not found, return null
      if (node === null) {
        return null;
      }
      
      // continue code here, check left or right based on whether data is more or less than current node's data
      else if (data < node.data) {
          // search left
          this.search(data, node.left)
      } else if (data > node.data) {
          // search right
          this.search(data, node.right)
      }
      else {
          return node;
      }
    }
    
    getSortedArrayFromBST(node) { // OPTIONAL CHALLENGE
        // write a function that converts our BST into a sorted array
        // return the array
        // example: if our bst looks like this:
        //         5
        //       /   \
        //     3       7
        //   /   \
        //  1     4
        // this.getSortedArrayFromBST() will return
        // [1, 3, 4, 5, 7];

        // in order traversal
        // if(node) {
            // this.getSortedArrayFromBST(node.left);
            // console.log(node.data);
            // this.getSortedArrayFromBST(node.right)
        // }
    }

    // helper function that calls removeNode with given data and updates the root of the tree with the value returned by the function
    remove(data) {
      this.root = this.removeNode(this.root, data)
    }


    //  finds the minimum node in tree 
    // searching starts from given node 
    findMinNode(node) { 
        // if left of a node is null then it must be minimum node 
        if(node.left === null) 
            return node; 
        else
            return this.findMinNode(node.left); 
    } 

    // method to remove node with given data. finds data and removes it recursively
    removeNode(node, key) {
      // if root is null, tree is empty
      if (node.data === null) {
        return null
      }

      // if data to be deleted is less than root's data, move to left subtree
      else if (key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
      }

      // if data to be deleted is greater than root's data, move to right subtree
      else if (key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
      }

      // if data in node is the same as data, delete this node
      else {
        // deleting node with no children
        // As leaf node do not have any children hence they can be easily removed and null is returned to the parent node
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        // deleting node with one children
        //  If a node have a left child then we update the pointer of the parent node to the left child of the node to be deleted and similarly if a node have a right child then we update the pointer of the parent node to the right child of the node to be deleted
        if (node.left === null) {
          node = node.right;
          return node;
        }
        // deleting node with two children. minimum node of the right subtree is stored in temp
        //  In order to delete a node with two children we find the node with minimum value in its right subtree and replace this node with the minimum valued node and remove the minimum valued node from the tree
        let temp = this.findMinNode(node.right);
        node.data = temp.data;
        node.right = this.removeNode(node.right, temp.data)
        return node;
      }
    }
  }
  
  let root = new Node(5);
  let bst = new BinarySearchTree(root);
  
  bst.insert(3);
  bst.insert(7);
  bst.insert(1);
  bst.insert(4);
  console.log(bst);
  
  // The above code makes the following tree
  //         5
  //       /   \
  //     3       7
  //   /   \
  //  1     4


// Coding Challenge 2
class TrieNode {
  constructor(letter = '') {
    this.value = letter;
    this.children = [];
    this.completesString = false;
  }
}
class Trie {
  constructor () {
    this.root = new TrieNode();
  }


  //insert a word into the trie
  insert (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];
      if (node.children[currentLetter]) {
        node = node.children[currentLetter]
      } else {
        let newNode = new TrieNode(currentLetter);
        node.children[currentLetter] = newNode;
        node = newNode
    }

    node.completesString = true;
  }
}

  
  //returns the word if its in the trie
  search (word) {
    let node = this.root;
      
      for (let i = 0; i < word.length; i++) {
        // iterate through word; map 'word's characters to a path in the tree
        let currentLetter = word[i];
        // if a full path exists, the trie constains the word, otherwise it doesn't
        if (node.children[currentLetter]) {
          node = node.children[currentLetter]
        } else {
          return false;
        }
        return true;
      }
  }


  // Returns if there is any word in the trie that starts with the given prefix
  startsWith (prefix) {
    let node = this.root;
      
    for (let i = 0; i < prefix.length; i++) {
      // iterate through word; map 'word's characters to a path in the tree
      let currentLetter = prefix[i];
      // if a full path exists, the trie constains the word, otherwise it doesn't
      if (node.children[currentLetter]) {
        node = node.children[currentLetter]
      } else {
        return false;
      }
      return true;
    }
  }
}
  

var selectElementsStartingWithA = function(array) {
  aArray = array.filter(function(word) {
    return word.startsWith('a');
  });
  return aArray;
}

var selectElementsStartingWithVowel = function(array) {
  vowelArray = array.filter(function(word) {
    return /^[aeiou]/.test(word);
  });
  return vowelArray;
}

var removeNullElements = function(array) {
  deletedArray = array.filter(function(v){
    return v != null;
  });
  return deletedArray;
}

var removeNullAndFalseElements = function(array) {
  deletedArray = array.filter(function(v){
    return (v !== false && v !== null);
  });
  return deletedArray;
}

var reverseWordsInArray = function(array) {
  revArray = [];
  array.forEach(function(word){
    w = word.split("").reverse().join("");
    revArray.push(w);
  });
  return revArray;
}

var everyPossiblePair = function(array) {
  return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  v = Math.ceil(string.length / 2);
  return string.slice(0,v)
}

var makeNegative = function(number) {
  return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
  palArray = [];
  array.forEach(function(word){
    if (word === word.split("").reverse().join("")) {
      palArray.push(word);
    }
  });
  return palArray.length;
}

var shortestWord = function(array) {
  shortest = array.reduce(function(a,b){
    return a.length < b.length ? a : b
  });
  return shortest;
}

var longestWord = function(array) {
  longest = array.reduce(function(a,b){
    return a.length > b.length ? a : b
  });
  return longest;
}

var sumNumbers = function(array) {
  function add(a,b) {
    return a + b
  }
  return array.reduce(add, 0);
}

var repeatElements = function(array) {
  return (array.join('') + array.join('')).split('');
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  function add(a,b) {
    return a + b
  };
  sum = array.reduce(add, 0);
  count = array.length;
  return sum / count;
}

var getElementsUntilGreaterThanFive = function(array) {
  lowArray = [];
  for (i = 0; i < array.length; i+=1) {
    if (array[i] > 5) { break; }
    lowArray.push(array[i]);
  }
  return lowArray;
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  sorted = array.join('').split('').sort('');
  sorted = sorted.filter(function(value,pos){
    return sorted.indexOf(value) == pos;
  });
  return sorted;
}

var swapKeysAndValues = function(object) {
  var swappedObj = {};
  for (var value in object) {
    swappedObj[object[value]] = value;
  }
  return swappedObj;
}

var sumKeysAndValues = function(object) {
  array = [];
  for (var key in object) {
    array.push(parseInt(key));
    array.push(parseInt(object[key]));
  };
  function add(a,b) {
    return a + b
  }
  return array.reduce(add, 0);
}

var removeCapitals = function(string) {
  string = string.replace(/[A-Z]/g, "");
  return string;
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  (date.getDate() < 10) ? day = '0' + date.getDate() : day = date.getDate();
  (date.getMonth() < 10) ? month = '0' + (date.getMonth() + 1) : month = (date.getMonth() + 1);
  return day + '/' + month +  '/' + date.getFullYear();
}

var getDomainName = function(string) {
  afterAt = string.split('@')[1];
  domain = afterAt.split('.').slice(0, -1).join('.');
  return domain;
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  array = []
  for (i = 1; i <= number; i += 1) {
    array.push(i)
  };
  array = array.reverse();
  console.log(array);
  function multiply(a,b) {
    return a * b
  }
  return array.reduce(multiply);
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}

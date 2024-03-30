const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
const tagCounts = {};
for (let tag of tags) {
    if (tagCounts[tag]) {
        tagCounts[tag]++;
    } else {
        tagCounts[tag] = 1;
    }
}
console.log(tagCounts);

//

const array1 = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
const array2 = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];
const commonElements = [];
for (let i = 0; i < array1.length; i++) {
    const currentElement = array1[i];
    if (array2.includes(currentElement)) {
        commonElements.push(currentElement);
    }
}
console.log(commonElements);


//

function positiveNumbers(numbers) {
    let sum = 0;
    let positiveCount = 0;
    for (let number of numbers) {
        if (number > 0) {
            sum += number;
            positiveCount++;
        }
    }
    if (positiveCount > 0) {
        const num = sum / positiveCount;
        return num;
    } else {
        return null;
    }
}
const numbers = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8];
const result = positiveNumbers(numbers);
console.log(result);

//

function wordsWithLetters(strings) {
    const letters = [];
    for (let word of strings) {
        const lowercaseWord = word.toLowerCase();
        if (lowercaseWord.includes('t') && lowercaseWord.includes('a')) {
            letters.push(word);
        }
    }

    return letters;
}

const strings = ['text', 'frontend', 'apple', 'Task', 'banana', 'Ant'];
const letters = wordsWithLetters(strings);
console.log(letters);
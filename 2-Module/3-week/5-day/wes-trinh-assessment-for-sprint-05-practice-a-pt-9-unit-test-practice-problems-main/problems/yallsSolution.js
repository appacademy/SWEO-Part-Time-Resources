// ricky's solution
function binaryToString(binaryBlob, arr = []) {
    let newBlob = binaryBlob
    if (newBlob.length > 0) {
        let section = newBlob.slice(0, 8);
        arr.push(section);
        newBlob = newBlob.slice(8);
        binaryToString(newBlob, arr);
    }
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        string += (String.fromCharCode(parseInt(ele, 2)))
    }
    return string;
}


//chris's solution
function binaryToString(binaryBlob) {
    let array = [];
    let string = binaryBlob.split('');
    for (let i = 8; i <= string.length; i++) {
        if (i % 8 === 0) {
            let batch = string.slice(i - 8, i);
            array.push(String.fromCharCode(parseInt(batch.join(''), 2)));
        }
    }
    return array.join('');
}

//minh
function binaryToString(binaryBlob) {
    // Your code here
    if (binaryBlob.length === 0) return '';

    let firstEight;
    if (binaryBlob.length > 8) {
        firstEight = eightSplitString(binaryBlob);
    } else {
        firstEight = binaryBlob;
    }

    const decTranslate = translateToDec(firstEight);
    const eightBitTranslate = binaryToAscii(decTranslate);

    return eightBitTranslate + binaryToString(binaryBlob.slice(8));
}

function eightSplitString(str) {
    let eightBit = ''
    for (let i = 0; i < 8; i++) {
        let currentVal = str[i];
        eightBit += currentVal;
    }
    return eightBit;
}

function translateToDec(str) {
    const dec = parseInt(str, 2);
    return dec;
}

function binaryToAscii(num) {
    return String.fromCharCode(num);
}



//robert williams solution
function binaryToString(binaryBlob) {
    if (typeof (binaryBlob) !== 'string') {
        throw new Error("input must be of type string");
    } else if (binaryBlob.length === 0) {
        return binaryBlob;
    }

    const words = decomposeIntoWords(binaryBlob);

    for (let i = 0; i < words.length; i++) {
        words[i] = "0b" + words[i];
    }

    return String.fromCharCode(...words);
}

function decomposeIntoWords(inputString, wordLength = 8) {
    const words = [];
    const originalInput = inputString;
    if ((inputString.length % wordLength) !== 0) {
        throw new Error("inputString length must be multiple of wordLength");
    } else if (inputString.length === 0) {
        throw new Error("inputString length must be greater than zero");
    } else if (wordLength <= 0) {
        throw new Error("wordLength must be greater than zero");
    }

    while (inputString.length > 0) {
        const nextWord = inputString.slice(0, wordLength);
        inputString = inputString.slice(wordLength);
        words.push(nextWord);
    }
    return words;
}


//aman's solution
function binaryToString(binaryBlob) {
    let arrayBinary = chunkMaker(binaryBlob)
    let word = "";


    for (let i = 0; i < arrayBinary.length; i++) {
        const binaryStr = arrayBinary[i];
        const asciiValue = String.fromCharCode(binaryStr);
        word += asciiValue;
    }
    return word;
};

const chunkMaker = (str, chunkSize = 8) => {
    let chunks = [];
    let chunk = '0b'
    let j = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (j === chunkSize) {
            chunks.push(chunk);
            chunk = "0b"
            j = 0
        }
        chunk += char
        j++
    }
    return chunks
}

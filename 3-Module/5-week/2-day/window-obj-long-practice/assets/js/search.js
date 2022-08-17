/***************************** HELPER FUNCTIONS *****************************/

// depth-first search for first matching element
function findFirstMatchingElement(parentEle, cb) {
    // do a depth-first search to recursively find the first element in the tree
    // that will return true when passed into the cb function
    if (cb(parentEle)) {
        return parentEle;
    }

    for (let i = 0; i < parentEle.children.length; i++) {
        const result = findFirstMatchingElement(parentEle.children[i], cb);
        if (result) return result;
    }

    return null;
}


function findAllMatchingElements(parentEle, cb) {
    // recursively find all elements in the tree that will return true when
    // passed into the cb function (depth-first search)
    let results = [];
    if (cb(parentEle)) {
        results.push(parentEle);
    }

    for (let i = 0; i < parentEle.children.length; i++) {
        const childResults = findAllMatchingElements(parentEle.children[i], cb);
        if (childResults.length) results = results.concat(childResults);;
    }

    return results;
}

/**************************** EXPORTED FUNCTIONS *****************************/


export function findElementById(id) {

    // Return the element in the DOM with corresponding `id`
    return findFirstMatchingElement(document.body, function(ele) {
        return ele.id === id;
    });

}


export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    return findFirstMatchingElement(document.body, function(ele) {
        return ele.tagName === tag;
    });
}

export function findFirstElementOfClass(cls) {

    // Return the first occurence of an element of class `cls`
    return findFirstMatchingElement(document.body, function(ele) {
        return ele.classList.contains(cls);
    });

}

export function findElementsOfTag(tag) {

    // Return an array of elements that have a tag name of `tag`
    return findAllMatchingElements(document.body, function(ele) {
        return ele.tagName === tag;
    });
}


export function findElementsOfClass(cls) {

    // Return an array of elements that have are of class `cls`
    return findAllMatchingElements(document.body, function(ele) {
        return ele.classList.contains(cls);
    });
}
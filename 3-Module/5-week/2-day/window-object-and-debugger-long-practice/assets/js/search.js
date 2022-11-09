const findOne = (parentEle, callBack) => {
    const queue = [parentEle]

    while(queue.length){
        const curr = queue.shift()

        if(callBack(curr)){
            return curr
        }

        for(let i = 0; i <curr.children.length; i++){
            queue.push(curr.children[i])
        }

    }

    return null

}


const findAll = (parentEle, callBack) => {
    let res = []
    const queue = [parentEle]

    while(queue.length){
        const curr = queue.shift()
        if(callBack(curr)){
            res.push(curr)
        }

        for(let i = 0; i < curr.children.length; i++){
            queue.push(curr.children[i])
        }

    }

    return res
}



export function findElementById(id) {
  // Return the element in the DOM with corresponding `id`
  // Your code here
    return findOne(document.body, ele => {
        return ele.id === id
    })

}

export function findFirstElementOfTag(tag) {
  // Return the first occurence of an element of tag name `tag`
  // Your code here
  return  findOne(document.body, ele => ele.tagName === tag)
}

export function findFirstElementOfClass(cls) {
  // Return the first occurence of an element of class `cls`
  // Your code here

  return findOne(document.body, ele => ele.className === cls)
}

export function findElementsOfTag(tag) {
  // Return an array of elements that have a tag name of `tag`
  // Your code here
  return findAll(document.body, ele => ele.tagName === tag)
}

export function findElementsOfClass(cls) {
  // Return an array of elements that have are of class `cls`
  // Your code here
  return findAll(document.body, ele => ele.className === cls)
}

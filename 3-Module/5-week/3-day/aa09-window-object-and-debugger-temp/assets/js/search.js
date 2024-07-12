const findFirstMatchingEl = (parentNode, cb) => {

    let children = parentNode.children

    if (cb(parentNode)) {
        return parentNode
    }

    for (let i = 0; i < children.length; i++) {
        let node = children[i]

        let res = findFirstMatchingEl(node, cb)

        if (res) return res

    }
    return null
}

const findAllMatchingElements = (parentNode, cb) => {
    let res = []

    if (cb(parentNode)) {
        res.push(parentNode)
    }

    for (let i = 0; i < parentNode.children.length; i++) {
        const childNodes = findAllMatchingElements(parentNode.children[i], cb)
        if (childNodes) res = res.concat(childNodes)
    }

    return res

}


export function findElementById(id) {

    return findFirstMatchingEl(document.body, (ele) => {
        return ele.id === id
    })


}

export function findFirstElementOfTag(tag) {

    return findFirstMatchingEl(document.body, (ele) => {
        return ele.tagName === tag
    })


}

export function findFirstElementOfClass(cls) {
    return findFirstMatchingEl(document.body, (ele) => {
        return ele.classList.contains(cls)
    })


}

export function findElementsOfTag(tag) {
    return findAllMatchingElements(document.body, (ele) => {
        return ele.tagName === tag
    })


}

export function findElementsOfClass(cls) {
    return findAllMatchingElements(document.body, (ele) => {
        return ele.classList.contains(cls)
    })


}

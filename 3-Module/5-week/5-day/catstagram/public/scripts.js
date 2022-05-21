export const createH1 =() => {
    let h1 = document.createElement('h1')
    h1.innerText = 'Kitten Pic'
    return h1
}


export const fetchCatPic = () => {
    return new Promise(async (resolve, reject) => {
        let apiCall = await fetch('https://api.thecatapi.com/v1/images/search')
        let catInfo  = await apiCall.json()
        resolve(catInfo[0].url)
    })
}

export const addCatToBody = (url) => {
    let catImg = document.createElement('img')
    catImg.setAttribute('src', url)
    document.body.appendChild(catImg)
}
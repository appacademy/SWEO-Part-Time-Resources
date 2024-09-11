
const handleSpotSubmit = async () => {
    dispatch(createSpot({object}))
    .then(spot => {
        dispatch(createImage(spot.id, imageUrlOne))
        return spot.id
    })
    .then((id) => {
        dispatch(createImage(id, imageUrlTwo))
        return id
    })
    .then((id) => {
        dispatch(createImage(id, imageUrlTwo))
        return id
    })
}




const [images, setImages] = useState([])

onChange={e => setImages([...images, e.target.value])}

const handleSpotSubmitTwo = async () => {



    const newSpot = {
        aBunchOfStuff,
        images // images array
    }

    dispatch(createSpot(newSpot))
}


const createSpot = (spot) => async dispatch => {
    const {name, address, lat, lng, images} = spot

   let res = fetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify({name, address,lat,lng})
    })
    res = await res.json()
    for await (let image of images){
        fetch(`/spots/${res.id}`, {
            method: 'POST',
            body: JSON.stringify(image)
        })
    }
}


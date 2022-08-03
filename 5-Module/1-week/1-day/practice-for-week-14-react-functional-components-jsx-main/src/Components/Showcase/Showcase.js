import image from '../../images/bulbasaur.jpg'

function Showcase() {
    const favePokemon = 'Koffing'
    const pokeCharacteristics = {
        type : "rock",
        move : "coughing"
    }
    return (
        <div>
            <h1>{favePokemon}'s Showcase Component</h1>
            <h2>{favePokemon}'s type is <span
                style={{
                    backgroundColor : 'green',
                    color : 'white'
                }}            
            >{pokeCharacteristics.type}</span> and one of their moves is <span
                style={{
                    backgroundColor : 'white',
                    color : '#00FF00'
                }}
            >{pokeCharacteristics.move}</span></h2>
            <img src={image} alt='pictureOfPokemon'/>
        </div>
    )
}

export default Showcase
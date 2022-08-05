import image from '../../images/bulbasaur.jpg'

<<<<<<< HEAD
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
=======
function Showcase({number}) {
    const favPokemon = 'Bulbasaur'
    const pokeCharacteristics = {
        type : 'Grass',
        move : 'Vine Whip'
    }
    return (
        <>
            <div>
                <h1>{favPokemon}'s Showcase Component</h1>
                <h2>{favPokemon}'s type is <span
                style={{
                    backgroundColor : 'green',
                    color : 'white'
                }}
                >{pokeCharacteristics.type}</span> and his move is <span
>>>>>>> 2022-Jan-E
                style={{
                    backgroundColor : 'white',
                    color : '#00FF00'
                }}
<<<<<<< HEAD
            >{pokeCharacteristics.move}</span></h2>
            <img src={image} alt='pictureOfPokemon'/>
        </div>
    )
}

export default Showcase
=======
                >{pokeCharacteristics.move}</span></h2>
                <img src={image} alt='fave pokemon'/>
            </div>
        </>
        
    );
}

export default Showcase;
>>>>>>> 2022-Jan-E

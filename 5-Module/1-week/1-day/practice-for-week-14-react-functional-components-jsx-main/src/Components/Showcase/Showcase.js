import image from '../../images/bulbasaur.jpg'

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
                style={{
                    backgroundColor : 'white',
                    color : '#00FF00'
                }}
                >{pokeCharacteristics.move}</span></h2>
                <img src={image} alt='fave pokemon'/>
            </div>
        </>
        
    );
}

export default Showcase;
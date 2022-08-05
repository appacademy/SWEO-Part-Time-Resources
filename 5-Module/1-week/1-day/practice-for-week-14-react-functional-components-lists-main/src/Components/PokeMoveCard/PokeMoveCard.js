import '../../PokeMoveCard.css'

<<<<<<< HEAD
function PokeMoveCard({id, move, type, level}){
    return (
        <li className='poke-move-card'>
    <h3>Move {id}</h3>
    <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
    <p>Type: {type}</p>
    <p>Level: {level}</p>
  </li>
=======
function PokeMoveCard({ id, type, move, level }) {
    return (
        <li className='poke-move-card'>
            <h3>Move {id}</h3>
            <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
            <p>Type: {type}</p>
            <p>Level: {level}</p>
        </li>
>>>>>>> 2022-Jan-E
    )
}

export default PokeMoveCard
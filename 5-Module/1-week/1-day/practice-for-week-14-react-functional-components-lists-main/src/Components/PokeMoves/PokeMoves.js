import {moves} from '../../data'
import PokeMoveCard from '../PokeMoveCard'
function PokeMoves(){


    return (
        <div>
            <h1>PokeMoves</h1>
            <ul>
            {
                moves.map(item => {
                    return (
                    <PokeMoveCard key={item.id}
                        id={item.id}
                        type={item.type}
                        level={item.level}
                        move={item.move}
                    />
                    )
                })
            }
            </ul>
        </div>
    )
}

export default PokeMoves
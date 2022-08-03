import { moves } from '../../data'
import PokeMoveCard from '../PokeMoveCard'
function PokeMoves() {

    return (
        <div>
            <ul>
                {moves.map(item => {
                    return (
                        <PokeMoveCard
                        {...item}
                        key={item.id} />
                    )
                })}
            </ul>
        </div>
    )
}

export default PokeMoves
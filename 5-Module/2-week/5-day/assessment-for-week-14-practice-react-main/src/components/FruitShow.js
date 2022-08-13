import { useParams } from 'react-router-dom'

function FruitShow({ fruits }) {
  const { fruitId } = useParams()
  const fruit = fruits.find(el => el.id === fruitId)
  return (
    <div
      className='fruit-show'
    >
      <h2>{fruit.name}</h2>
      <p>{fruit.color}</p>
      <p>{fruit.sweetness}</p>
      <p>{fruit.seeds}</p>
    </div>
  )
}

export default FruitShow;
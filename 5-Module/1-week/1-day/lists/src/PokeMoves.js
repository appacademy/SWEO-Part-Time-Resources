import { moves } from "./data";
import PokeMoveCard from "./PokeMoveCard";

const PokeMoves = () => {
	return (
		<div>
			<h1>PokeMoves</h1>
			<ul>
				{moves.map((item, index) => (
					<PokeMoveCard
						key={item.id}
						id={item.id}
						type={item.type}
						move={item.move}
						level={item.level}
					/>
				))}
				{/* {moves.map((item, index) => {
                    console.log(item)
					return (
						<li key={index}>
							{item.id}. {item.move}
						</li>
					);
				})} */}
			</ul>
		</div>
	);
};

export default PokeMoves;

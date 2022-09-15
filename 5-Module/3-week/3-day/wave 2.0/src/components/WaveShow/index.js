import './waveshow.css'

const WaveShow = ({songs, currentTrack, setPlayerOffset, setCurrentTrack})=>{
	return (
		<>
			{
				songs.map((song, i)=>{
					return (
					<li
						onClick={()=> {
							setPlayerOffset(i)
							setCurrentTrack(song.name)
							}
						}
						key={i+song.name} className={currentTrack === song.name ? 'active' : ''}>
						{song.name}
					</li>)
				})
			}
		</>
	)
}

export default WaveShow;

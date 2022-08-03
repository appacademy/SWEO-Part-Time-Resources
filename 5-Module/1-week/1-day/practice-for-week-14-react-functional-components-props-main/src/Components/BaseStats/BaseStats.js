import '../../BaseStats.css'
function BaseStats({ stats, click }) {
    return (
        <div className='base-stats'>
            <h1
            >Base Stats</h1>
            <button
                className='sp-stats'
                onClick={click}
            >
                Check special stats
            </button>
            <table>
                <tbody>

                    <tr>
                        <td>Hit Points</td>
                        <td>{stats.hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{stats.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{stats.defense}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{stats.speed}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default BaseStats
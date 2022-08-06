import { useEffect, useState } from 'react'
import './index.css'
const ServerData = () => {
  const [serverData, setServerData] = useState([])

  console.log(serverData)
  useEffect(() => {
    (async () => {
      let res = await fetch('https://fortnite-api.com/v2/news')
      const { data } = await res.json()
      setServerData(data.br.motds)
    })()
  }, [])

  if (!serverData) return <h1>No Data To Display</h1>;

  return (
    <div>
      {
        serverData.map(el => {
          return (<div>
            <img className='news-item' src={el.image} alt='someImage'/>
            <p>{el.body}</p>
          </div>)
        })
      }
    </div>
  )
};

export default ServerData;
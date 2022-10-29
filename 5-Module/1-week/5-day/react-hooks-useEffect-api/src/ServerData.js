//!!START SILENT
import { useState, useEffect } from 'react';

//!!END
const ServerData = () => {
  //!!ADD
  // return <h1>No Data To Display</h1>;
  //!!END_ADD
  //!!START SILENT
  const [serverData, setServerData] = useState();

  useEffect(() => {
    const fetchFortnite = async () => {
      const data = await fetch('https://fortnite-api.com/v2/news');
      const response = await data.json();
      const parsedData = response.data.br.motds;
      console.log(parsedData);
      setServerData(parsedData);
    };
    fetchFortnite();
  }, []);

  if (!serverData) return <h1>No Data To Display</h1>;

  return (
    <div>
      {serverData.map(data => (
        <div className='serverContainer'>
          <h1 className='title'>{data.title}</h1>
          <h2 className='body'>{data.body}</h2>
          <img className='img' src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );
  //!!END
};

export default ServerData;

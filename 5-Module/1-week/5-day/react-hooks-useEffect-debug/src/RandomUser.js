import { useState, useEffect } from 'react';

import User from './User';

const colors = ['#0c9bbd', 'red', 'orange', 'green'];

const RandomUserTwo = () => {
  const [num, setNum] = useState(0);
  const [searchChange, setSearchChange] = useState('');
  const [searchWord, setSearchWord] = useState(
    //!!START SILENT
    localStorage.getItem('user') || 'foobar'
    //!!END
    //!!ADD
    // localStorage.setItem('user') || 'foobar'
    //!!END_ADD
  );
  
  const [data, setData] = useState([]);

  useEffect(() => {
    //!!START SILENT
    const fetchUser = async () => {
    //!!END
    //!!ADD
    // const fetchUser = () => {
    //!!END_ADD
      const res = await fetch(`https://randomuser.me/api/?seed=${searchWord}`);
      const data = await res.json();
      setData(data.results);
    };
    //!!START SILENT
    fetchUser();
    //!!END
  //!!START SILENT
  }, [searchWord]);
  //!!END
  //!!ADD
  // }, []);
  //!!END_ADD

  useEffect(() => {
    //!!START SILENT
    localStorage.setItem('user', searchWord);
    //!!END
    //!!ADD
    // localStorage.getItem('user', searchWord);
    //!!END_ADD
  }, [searchWord]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log('i am running');
      setNum((prevNum) => (prevNum === 3 ? 0 : prevNum + 1));
    }, 7000);
    //!!START SILENT
    return () => clearInterval(colorInterval);
    //!!END
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors[num],
        transition: 'background-color 4s'
      }}
      className='container'
    >
      <div className='person'>
        {data?.map((data) => (
          <User key={data.id.value} data={data} />
        ))}
      </div>
      <div className='form-wrapper'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchWord(searchChange);
            setSearchChange('');
          }}
        >
          <label htmlFor='search'>Search:</label>
          <input
            id='search'
            onChange={(e) => setSearchChange(e.target.value)}
            value={searchChange}
            name='searchWord'
            placeholder='Username'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RandomUserTwo;

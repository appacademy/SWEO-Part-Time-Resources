import { useState, useEffect } from 'react';

import User from './User';

const colors = ['#0c9bbd', 'red', 'orange', 'green'];

const RandomUserTwo = () => {
  const [num, setNum] = useState(0);
  const [searchChange, setSearchChange] = useState('');

  //first bug was setItem
  const [searchWord, setSearchWord] = useState(
    localStorage.getItem('user') || 'foobar'
  );

  const [data, setData] = useState([]);

  useEffect(() => {

    //second bug -- we needed async
    const fetchUser = async () => {
      const res = await fetch(`https://randomuser.me/api/?seed=${searchWord}`);
      const data = await res.json();
      setData(data.results);
    };

    //third bug -- we needed to invoke the function
    fetchUser();

    //fourth bug, we only want this effect to run when searchWord changes
  }, [searchWord]);

  useEffect(() => {

    //5th bug we needed setItem
    localStorage.setItem('user', searchWord);
  }, [searchWord]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log('i am running');
      setNum((prevNum) => (prevNum === 3 ? 0 : prevNum + 1));
    }, 7000);

    //we needed to cleanup our setInterval (this is the cleanup function)
    return () => clearInterval(colorInterval);
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

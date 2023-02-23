import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets } from './store/tweet';

const TweetList = () => {
  const dispatch = useDispatch();
  const tweetList = useSelector((state) => Object.values(state.tweet));
  console.log(tweetList);

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  return (
    <>
      <h1>Tweet List</h1>
      {tweetList?.map(({ id, message }) => (
        <p key={id}>{message}</p>
      ))}
    </>
  );
};

export default TweetList;

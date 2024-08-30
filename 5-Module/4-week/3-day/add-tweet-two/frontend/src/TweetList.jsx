import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets } from './store/tweet';

const TweetList = () => {
  const dispatch = useDispatch();

  // NOTE: The video includes the call to `Object.values` as part of the
  // selector function passed to `useSelector`. This will cause `useSelector` to
  // return a new array every time it is called, thereby triggering refreshes
  // even when the data in the array has not changed. You never want to do that.
  // The code below shows one way to fix this inefficiency.
  //
  // (A call to a memoized selector would be even better! While the code below
  // will not trigger a refresh unless the `tweet` data changes, it will still
  // produce a new array after every call to `useSelector`. With a memoized
  // selector, you would create a new array only when the included data had
  // changed.)
  const tweets = useSelector((state) => state.tweet);
  const tweetList = Object.values(tweets);
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

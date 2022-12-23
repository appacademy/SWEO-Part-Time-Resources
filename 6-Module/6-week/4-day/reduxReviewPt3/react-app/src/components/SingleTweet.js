import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTweetThunk, editTweetThunk } from '../store/tweets';

// const SingleTweet = (props) => {
//     const { tweet } = props;
//     const { id, text, user_id, username, likedByUsers } = tweet;

const SingleTweet = ({
    tweet: { id, text, userId, username, likedByUsers },
}) => {
    const dispatch = useDispatch();
    const [showEdit, setShowEdit] = useState(false);
    const [editText, setEditText] = useState(text);

    const user = useSelector((store) => store.session.user);

    const handleEdit = () => {
        const data = {
            id,
            text: editText,
        };

        dispatch(editTweetThunk(data));
    };

    const handleDelete = () =>
        dispatch(deleteTweetThunk({ id, user_id: userId }));

    return (
        <div>
            <h4>{username}</h4>
            {showEdit ? (
                <>
                    <textarea
                        style={{ display: 'block' }}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    ></textarea>
                    <button
                        style={{ display: 'block' }}
                        onClick={() => {
                            setEditText(text);
                            setShowEdit((prev) => !prev);
                        }}
                    >
                        Cancel Edit
                    </button>
                    <button
                        style={{ display: 'block' }}
                        onClick={() => {
                            handleEdit();
                            setShowEdit((prev) => !prev);
                        }}
                    >
                        Submit Edit
                    </button>
                </>
            ) : (
                <p>{editText}</p>
            )}
            <span>
                {likedByUsers.length} Like
                {likedByUsers.length !== 1 ? 's' : null}
            </span>
            {user && user.id === userId && !showEdit ? (
                <>
                    <button
                        style={{ display: 'block' }}
                        onClick={() => setShowEdit((prev) => !prev)}
                    >
                        Edit Tweet
                    </button>
                    <button
                        style={{ display: 'block' }}
                        onClick={() => handleDelete()}
                    >
                        Delete Tweet
                    </button>
                </>
            ) : null}
        </div>
    );
};

export default SingleTweet;

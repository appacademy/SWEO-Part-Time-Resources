import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const [user, setUser] = useState({});
    const { userId } = useParams();

    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setUser(user);
        })();
    }, [userId]);

    if (!user.id) {
        return null;
    }

    return (
        <ul>
            <li>
                <strong>User Id</strong> {userId}
            </li>
            <li>
                <strong>Username</strong> {user.username}
            </li>
            <li>
                <strong>Email</strong> {user.email}
            </li>
            {user.tweets.map((tweet, i) => (
                <li key={tweet.id}>
                    <h4>Tweet #{i + 1}</h4> {tweet.text}
                </li>
            ))}
        </ul>
    );
}
export default User;

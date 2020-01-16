import React from 'react';
import axios from 'axios';

const UserCard = props => {
    const { cardInfo, followers } = props;
    console.log(props);
    return (
        <>
            <div>
                <div>
                    <img src={cardInfo.avatar_url} />
                    <h2>{cardInfo.name}</h2>
                    <h3>@{cardInfo.login}</h3>
                    <p>Location: {cardInfo.location}</p>
                    <p>Profile: </p>
                    <a href={cardInfo.html_url}>{cardInfo.html_url}</a>
                    <p>Followers: {cardInfo.followers}</p>
                    <p>Following: {cardInfo.following}</p>
                    <p>Bio: {cardInfo.bio}</p>
                </div>
            </div>
        </>
    )
}

export default UserCard;
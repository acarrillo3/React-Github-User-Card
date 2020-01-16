import React from 'react';

const UserCard = props => {
    const { cardInfo, followers } = props;
    console.log(props);
    return (
        <>
            <div>
                <div style={{borderBottom:"solid black 2px"}}>
                    <img src={cardInfo.avatar_url} />
                    <h2>{cardInfo.name}</h2>
                    <h3>@{cardInfo.login}</h3>
                    <p>Location: {cardInfo.location}</p>
                    <p>Profile: <a href={cardInfo.html_url}>{cardInfo.html_url}</a></p>
                    <p>Followers: {cardInfo.followers}</p>
                    <p>Following: {cardInfo.following}</p>
                    <p>Bio: {cardInfo.bio}</p>
                </div>
                <div >
                    <h2>{cardInfo.name}'s Follower's</h2>
                    {followers.map((follower, index) => {
                        return (
                            <div key={index}>
                                <img src={follower.avatar_url} alt="user avatar" />
                                <h3>@{follower.login}</h3>
                                <p>Profile: <a href={follower.html_url}>{follower.html_url}</a></p>
                            </div> 
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default UserCard;
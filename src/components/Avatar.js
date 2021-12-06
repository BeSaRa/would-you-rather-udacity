function Avatar({user}) {
    // if the user has no avatar place the default unknown avatar
    user.avatarURL = user.avatarURL ? user.avatarURL : '/assets/avatars/unknown.png';
    return <div className="avatar-image px-3 flex-grow-0">
        <img alt={user.name} src={user.avatarURL}/>
    </div>
}

export default Avatar;

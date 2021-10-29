import React, { useEffect, useState } from 'react';

function UploadAvatar() {
    const [avatar, setAvatar] = useState()
    useEffect(()=>{
        return ()=> URL.revokeObjectURL(avatar)
    },[avatar])
    const handleOnChange = (e)=>{
        const fileAvatar = e.target.files[0]
        fileAvatar.preview = URL.createObjectURL(fileAvatar)
        setAvatar(fileAvatar)
    }
    return (
        <div>
            <input
                type="file" 
                onChange={handleOnChange}
            />
            <img src="" alt="" />
            {avatar && <img src={avatar.preview} width='300px' alt="" />}
        </div>
    );
}

export default UploadAvatar;
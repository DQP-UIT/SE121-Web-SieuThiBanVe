import React from 'react';

const Avatar = ({url}) => {
    return (
        <div>
            <img class="w-28 h-28 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" 
            src={url} alt="Bordered avatar" />
        </div>
    );
}

export default Avatar;

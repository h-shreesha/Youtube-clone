import React from 'react';

const VideoCard = ({ info }) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    // console.log(snippet)
    return (
        <div className='px-2 mx-1 py-5 w-64 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200'>
            <img src={thumbnails.medium.url} alt="" className='rounded-lg'/>
            <ul>
                <li className='text-md font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    );
};

export default VideoCard;

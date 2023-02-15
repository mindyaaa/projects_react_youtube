import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({id, name}) {
    const { youtube } = useYoutubeApi();
    const {
        data :url 
    } = useQuery(['channel', id], 
    () => youtube.channelImageURL(id),
    {staleTime: 1000 * 60 * 5}
    );

    return (
        <div className='flex my-4 mb-8 items-center'>
            {url && <img className='w-15 h-15 rounded-full' src={url} alt={name} />}
            <p className='text-lg font-medium ml-4'>{name}</p>
        </div>
    );
}


import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({id}) {
    const { youtube } = useYoutubeApi();
    const {
        error, 
        isLoading, 
        data:videos
    } = useQuery(['channel', id], () => youtube.relatedVideos(id)
    );

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went WRONG</p>}
            {videos && 
            (
            <ul>
                {videos.map((video) => 
                    <VideoCard type="list" key={video.id} video={video}></VideoCard>
                )}
            </ul>
            )          
            }
            
        </>
    );
}


import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function Videos() {
    const { keyword } = useParams();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword], ()=>{
            return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then((res) => res.json())
        .then((data) => data.item)}
    );

    return (
        <>
            <div>Trending Videos {keyword ? `👀${keyword}` : '🔥'}</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong!</p>}
            {videos && <ul>
                {videos.map((video) => <VideoCard key={videos.id} video={video} />)}
                </ul>}
        </>
    );
}
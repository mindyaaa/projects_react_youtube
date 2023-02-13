import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function Videos() {
    let { keyword } = useParams();
    const { isLoading, error, data:videos } = useQuery(
        ['videos', keyword], async () => {
            return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
            .then((res) => res.json())
            .then((data) => data.items)});


    // const [videoData, setVideoData] = useState([]);

    // useEffect(() => {
    //     fetch('./videos/popular.json')
    //     .then((res)=> res.json())
    //     .then((data) => {
    //         setVideoData(data.items);
    //         // console.log(videoData.map((i) => i.snippet.title))
    //         // console.log(data.items[0]);
    //         // console.log(data.items[0].snippet.title)
    //     });
    // },[])

    return (
        <div>
            <h3>VIDEOS : {keyword ? `${keyword}` : '🔥'}</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went WRONG</p>}
            {videos && 
            (
            <ul>
                {videos.map((video) => 
                    <VideoCard key={video.id} video={video}></VideoCard>
                )}
            </ul>
            )          
            }
            
        </div>
    );
}


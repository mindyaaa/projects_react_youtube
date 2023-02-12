import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    let {keyword} = useParams();
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        fetch('./videos/popular.json')
        .then((res)=> res.json())
        .then((data) => {
            setVideoData(data.items);
            // console.log(videoData.map((i) => i.snippet.title))
            // console.log(data.items[0]);
            // console.log(data.items[0].snippet.title)
        });
    },[])

    return (
        <div>
            <h3>VIDEOS : {keyword ? `${keyword}` : '🔥'}</h3>
            <ul>
                {videoData.map((i) => 
                    <li key={i.id}>{i.snippet.title}</li>
                )}
            </ul>
        </div>
    );
}


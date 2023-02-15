import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();

    const { isLoading, error, data:videos } 
    = useQuery(['videos', keyword], () => youtube.search(keyword));

    return (
        <div>
            <h3>VIDEOS : {keyword ? `${keyword}` : '🔥'}</h3>

            {isLoading && <p>Loading...</p>}
            {error && <p>Something went WRONG</p>}
            {videos && 
            (
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-2'>
                {videos.map((video) => 
                    <VideoCard key={video.id} video={video}></VideoCard>
                )}
            </ul>
            )          
            }
            
        </div>
    );
}


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
import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {

    const {state : {video} } = useLocation();
    const {description, title, channelTitle, channelId} = video.snippet;

    // console.log(video);

    return (
        <section
        className='flex flex-col lg:flex-row'>
            <article className='basis-4/6'>

            <iframe 
            title={title}
            id="player" 
            type="text/html" 
            width="100%" 
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0" />

            <div className='p-8'>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <ChannelInfo id={channelId} name={channelTitle}></ChannelInfo>
                <pre className='whitespace-pre-wrap'>{description}</pre>
            </div>

            </article>

            <section className='basis-2/6'>
                <RelatedVideos id={video.id}></RelatedVideos>
            </section>
        </section>
    );
}


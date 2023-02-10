import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    let {keyword} = useParams();

    return (
        <div>
            VIDEOS : {keyword ? `${keyword}` : '🔥'}
        </div>
    );
}


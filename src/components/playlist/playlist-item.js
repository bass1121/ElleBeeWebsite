import React from 'react';


export default function PlaylistItem(props) {

    const {snippet: {title, thumbnails: {medium: {url, height, width}}, resourceId: {videoId}}} = props.item;
    
  return (
    <div className="video-container-wrapper">
        <div className="video-container">
            <a href={`https://www.youtube.com/watch?v=${videoId}&t=3s&`} target="_blank">
                <img width={width} height={height} src={url} alt='Video Thumbnail'/>
                <div className="video-title">
                    {title}
                </div>
            </a>
        </div>
    </div>
   )
}
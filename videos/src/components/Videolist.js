import React from 'react';
import VideoItem from './VideoItem';

const Videoslist = ({videos, onVideoItemSelect}) => {
    const renderedVideos = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} onVideoItemSelect={onVideoItemSelect}/>
    })
    return <div className="ui relaxed divided list">{renderedVideos}</div>
};

export default Videoslist;
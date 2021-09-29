import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSRC} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">Thank you Eden Ella!</h4>
          <p>You must read the developer's log here! </p>
      </div>
    </div>
  );
};

export default VideoDetail;

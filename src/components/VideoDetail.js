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
          <p><a href="https://docs.google.com/document/d/15e4-RoE54Aj6Kz0lSgnaEFHNDmOv9IaMP-1CV4blPvs/edit?usp=sharing" target="_blank" rel="noreferrer">Click here to read the Developer's Log"</a></p>
      </div>
    </div>
  );
};

export default VideoDetail;

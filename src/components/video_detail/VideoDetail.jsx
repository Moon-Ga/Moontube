import React from 'react';
import styles from './VideoDetail.module.css';

const VideoDetail = ({ video }) => (
  <section className={styles.deatil}>
    <iframe
      title="player"
      className={styles.video}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <h3>{video.snippet.channelTitle}</h3>
    <pre className={styles.description}>{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
import React, { useEffect, useRef } from 'react';
import './App.css';

function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return <video ref={videoRef} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer isPlaying={isPlaying} src="main.mp4" />
    </>
  );
}

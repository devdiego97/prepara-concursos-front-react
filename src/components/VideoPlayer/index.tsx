import React from 'react';
import ReactPlayer from 'react-player';

export const VideoPlayer: React.FC = () => {
  return <div style={{width:'100%',background:'red'}}
  >
    <ReactPlayer   style={{ width: '100%', height: '100%' }}  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
     
    controls />
</div>
};





import React from "react"; 
import YouTube from "react-youtube"; 

const YoutubeEmbed = () => {
  const onReady = (event) => {
    const player = event.target;

    // // For example, you can automatically play the video
    // player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  const opts = { 
    height: "600", 
    width: "400", 
    // playerVars: { 
    //   autoplay: 1, 
    // }, 
    }; 

  return (
    <div className="w-max-[90uv] mb-10 sm:mb-20 flex justify-center items-center">
      <YouTube
        videoId="6vgOYp16EDE"
        onReady={onReady}
        onError={onError}
        opts={opts}
      />
    </div>
  );
};

export default YoutubeEmbed;

// export default class YoutubeEmbed extends React.Component { 
// render() { 
// 	const opts = { 
// 	height: "600", 
// 	width: "400", 
// 	playerVars: { 
// 		autoplay: 1, 
// 	}, 
// 	}; 

// 	return ( 
// 	<div className="w-max-[90uv] mb-10 sm:mb-20 flex justify-center items-center"> 
// 		<YouTube videoId="6vgOYp16EDE"
// 			opts={opts} onReady={this._onReady} /> 
// 	</div> 
// 	); 
// } 

// _onReady(event) { 
// 	event.target.pauseVideo(); 
// } 
// } 

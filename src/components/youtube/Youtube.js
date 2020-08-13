import React from "react";
import YouTube from "react-youtube";
export default function Youtube(props) {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    const player = event.target;
    player.cueVideoById({ videoId: props.videoId });
  };
  return (
    <YouTube
      className="powerpoint"
      videoId={props.videoId}
      opts={opts}
      onReady={_onReady}
    />
  );
}

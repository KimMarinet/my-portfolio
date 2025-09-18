import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "100%",
  height = "100%",
  controls = true,
  autoPlay = false,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", minHeight: "480px" }}>
      <ReactPlayer
        src={src}
        width={width}
        height={height}
        controls={controls}
        playing={autoPlay}
      />
    </div>
  );
};

export default React.memo(VideoPlayer);
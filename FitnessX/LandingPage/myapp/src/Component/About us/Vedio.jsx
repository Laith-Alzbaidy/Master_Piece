import { React, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css"; // Corrected import path
import Image from "../../assets/images/about-pic.jpg";
import Play from "../../assets/images/play.png";
const VideoAboutUs = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="SlPhMPnQ58k"
        onClose={() => setOpen(false)}
      />
      <div className="img-continer" onClick={() => setOpen(true)}>
        <img className="img-one" src={Image}></img>
        <img className="Play-about" src={Play} alt="" />
      </div>
    </>
  );
};

export default VideoAboutUs;

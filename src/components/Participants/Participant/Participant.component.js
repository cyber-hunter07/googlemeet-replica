import React from "react";
import Card from "../../Shared/Card/Card.component";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from "../../../Gif/g1.gif";
import logo2 from "../../../Gif/g2.gif";
import logo3 from "../../../Gif/g3.gif";
import logo4 from "../../../Gif/g4.gif";
import logo5 from "../../../Gif/g5.gif";
import logo6 from "../../../Gif/g6.gif";
import logo7 from "../../../Gif/g7.gif";
import "./Participant.css";

export const Participant = (props) => {
  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
    currentUser,
  } = props;
  if (!currentParticipant) return <></>;

  let indexValues = curentIndex;
  // console.log(logoImages[curentIndex]);
  const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  return (
    <div className={`participant ${hideVideo ? "hide" : ""}`}>
      <Card>
        <video
          ref={videoRef}
          className="video"
          id={`participantVideo${curentIndex}`}
          autoPlay
          playsInline
        ></video>
        {!currentParticipant.audio && (
          <FontAwesomeIcon
            className="muted"
            icon={faMicrophoneSlash}
            title="Muted"
          />
        )}
        {showAvatar && (
          <div
            className="avatar"
          >
            <img style={{width:"400px", height:"210px"}} src={logoImages[curentIndex]}/>
          </div>
        )}
        <div className="name">
          {currentParticipant.name}
          {currentUser ? "(You)" : ""}
        </div>
      </Card>
    </div>
  );
};

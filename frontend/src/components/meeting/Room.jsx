import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();
  const meetingContainerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const connectToRoom = async () => {
      try {
        const appID = 1755869289;
        const serverSecret = "028b26ad67c75d8b4733cf2b0d7394a7";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "User");
        console.log(appID)
        console.log(serverSecret)
        // Ensure ZegoUIKitPrebuilt is initialized before calling create
        if (ZegoUIKitPrebuilt) {
          const zc = ZegoUIKitPrebuilt.create(kitToken);

          if (zc && zc.joinRoom) {
            zc.joinRoom({
              container: meetingContainerRef.current,
              scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
              },
            });
          } else {
            console.error("ZegoUIKitPrebuilt or joinRoom method not available.");
          }
        } else {
          console.error("ZegoUIKitPrebuilt not available.");
        }
      } catch (error) {
        console.error("Error connecting to room:", error);
      }
    };

    connectToRoom();

    // Programmatically navigate to the room
    navigate(`/room/${id}`);
  }, [id, navigate]);

  return (
    <div>
      <div ref={meetingContainerRef} />
    </div>
  );
}

export default Room;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #fffaf3;
  width: 100%;
  padding: 40px 0px;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
  @media only screen and (max-width: 380px) {
    height: 20vh;
  }
`;

const Vid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding-top: 40px;
  }
  @media only screen and (max-width: 380px) {
    padding-top: 20px;
  }
`;

const PlayerCon = styled.div`
  width: 80%;
  height: 600px;
  @media only screen and (max-width: 768px) {
    /* width: 600px; */
    height: 350px;
  }
  @media only screen and (max-width: 380px) {
    /* width: 300px; */
    height: 250px;
  }
`;

const Video = () => {
  return (
    <Container>
      <Vid>
        <PlayerCon>
          <iframe
            src="https://www.youtube.com/embed/VgYh9QUV3zc"
            frameBorder="0"
            allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            style={{width:"100%", height:"100%"}}
          />
        </PlayerCon>
      </Vid>
    </Container>
  );
};

export default Video;

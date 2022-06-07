import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #fffaf3;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
  @media only screen and (max-width: 380px) {
    height: 35vh;
  }
`;

const Vid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  @media only screen and (max-width: 768px) {
    padding-top: 70px;
  }
  @media only screen and (max-width: 380px) {
    padding-top: 40px;
  }
`;

const PlayerCon = styled.div`
  width: 800px;
  height: 500px;
  @media only screen and (max-width: 768px) {
    width: 600px;
    height: 400px;
  }
  @media only screen and (max-width: 380px) {
    width: 300px;
    height: 200px;
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

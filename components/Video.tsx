import React from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #fffaf3;
  width: 100%;
`;

const Vid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
`;

const Video = () => {
  return (
    <Container>
      <Vid>
        <ReactPlayer
          width="800px"
          height="500px"
          controls
          url="https://www.youtube.com/watch?v=VgYh9QUV3zc"
        />
      </Vid>
    </Container>
  );
};

export default Video;


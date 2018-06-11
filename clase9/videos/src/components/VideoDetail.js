import React from "react"
import styled from 'styled-components'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Wrapper>
      <Iframe>
        <iframe className="iframe" src={url} />
      </Iframe>
      <Details>
        <div className="title">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 2;
  margin-right: 20px;
`

const Iframe = styled.div`
  width: 100%;

  .iframe {
    border: 0;
    min-height: 350px;
    width: 100%;
  }
`

const Details = styled.div`
  padding: 30px 20px;

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .description {
    font-size: 16px;
    line-height: normal;
  }
`

export default VideoDetail;
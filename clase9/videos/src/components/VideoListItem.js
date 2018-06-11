import React from "react"
import styled from 'styled-components'

const VideoListItem = ({ video, changeCurrentVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <Wrapper onClick={() => changeCurrentVideo(video)}>
      <Media>
        <Body>
          <h3 className="title">{video.snippet.title}</h3>
        </Body>
        <Image>
          <img className="image" src={imageUrl} />
        </Image>
      </Media>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  border: 1px solid #222f3e;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  transition: background-color .3s linear 0s;

  &:hover {
    background-color: #c8d6e5;
  }
`

const Media = styled.div`
  display: flex;
  justify-content: space-between;
`

const Body = styled.div`
  flex: 3;
  margin-right: 10px;

  .title {
    color: #222f3e;
    font-size: 20px;
    line-height: normal;
  }
`

const Image = styled.div`
  flex: 1;

  .image {
    width: 100%;
    max-height: 50px;
  }
`

export default VideoListItem
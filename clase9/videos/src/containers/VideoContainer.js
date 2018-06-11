import React, { Component } from 'react'
import youtubeSearch from 'youtube-api-v3-search'
import _ from 'lodash'
import styled from 'styled-components'
import VideoSearch from './../components/VideoSearch'
import VideoList from './../components/VideoList'
import VideoDetail from './../components/VideoDetail'

const youtubeAPI = ''

class VideoContainer extends Component {
  state = {
    videos: [],
    currentVideo: null,
  }

  callVideos = (term) => {
    const opts = {q: term}
    youtubeSearch(youtubeAPI, opts).then(data => {
      const videos = data.items;
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.callVideos('perritos');
  }

  render() {
    const debounceCallVideos = _.debounce(term => {
      const q = term.length ? term : 'perritos'
      this.callVideos(q);
    }, 300);

    return (
      <div>
        <VideoSearch onSearchTermChange={debounceCallVideos} />
        <Wrapper>
          <Body>
            <VideoDetail video={this.state.currentVideo} />
            <VideoList
              changeCurrentVideo={currentVideo => this.setState({ currentVideo })}
              videos={this.state.videos} />
          </Body>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 90%;
`

const Body = styled.div`
  display: flex;
`

export default VideoContainer
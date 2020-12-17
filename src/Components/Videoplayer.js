import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LBHamPZH_RI&ab_channel=TheRaf333"
        playing
      />
    );
  }
}
export default Video;

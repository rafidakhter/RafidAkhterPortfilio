import React, { Component } from "react";
import Gallery from "react-grid-gallery";

class PhotoGallery extends Component {
  render() {
    if (this.props.data) {
      var photos = this.props.data.photos;
      {
        return photos;
      }
    }

    return (
      <section id="testimonials">
        <Gallery photos={photos} />
      </section>
    );
  }
}

export default PhotoGallery;

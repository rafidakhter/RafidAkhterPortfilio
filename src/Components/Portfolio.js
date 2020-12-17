import React, { Component } from "react";
import Card from "./ImgMediaCard";
import { Grid } from "@material-ui/core";
import Video from "./Videoplayer";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project) {
        var projectImage = "images/portfolio/" + project.image;
        return (
          <div className="columns portfolio-item">
            <Card
              title={project.title}
              description={project.description}
              program={project.program}
              image={projectImage}
              url={project.url}
            />
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <h1>Personal Projects.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <Grid container>
            {projects}
            <Video />
          </Grid>
        </div>
      </section>
    );
  }
}

export default Portfolio;

import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <div className="content-rating">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            ante ut ipsum malesuada tempus sed sed erat. Maecenas turpis odio,
            interdum at finibus in, ultrices a quam. Vivamus nisi nisi, tempor
            id rhoncus at, maximus ac massa. Integer consequat ipsum ac purus
            luctus, non tempor mi finibus. Pellentesque nec dolor nec eros
            pretium mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Quisque tortor ligula,
            pharetra et gravida vel, fringilla sed nisi. In diam mauris, tempus
            quis odio a, mattis mollis massa. Morbi euismod ipsum vel erat
            consequat, nec gravida sem finibus. Suspendisse scelerisque sit amet
            lacus eu pellentesque. Nullam sit amet posuere erat. Duis eleifend
            magna vel molestie lacinia. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam erat volutpat.
          </p>
          <div className="rating-buttons">
            <button className="like-button" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
            <p>{this.state.totalRatings}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;

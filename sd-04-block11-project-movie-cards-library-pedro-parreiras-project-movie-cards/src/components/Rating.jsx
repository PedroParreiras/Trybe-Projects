// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating movie-card-rating">
        { rating }
      </div>
    );
  }
}
export default Rating;

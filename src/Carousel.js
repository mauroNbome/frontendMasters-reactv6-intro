import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  // Arrow function solves the this undefined
  handleIndexClick = (e) => {
    this.setState({
      // By adding + we make sure its a number
      active: +e.target.dataset.index,
    });

    console.log(this.state);
  };

  render() {
    // State only has self contained data, nothing else can modify state.
    const { active } = this.state;

    // While props is data that flows down from parent component.
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
              // data-index, es una prop que enviamos al elemento, puede ser capturado desde e.target.dataset.index
              data-index={index}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

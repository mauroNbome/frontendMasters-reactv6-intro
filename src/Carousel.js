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
      <div className="flex flex-col md:flex-row">
        <img
          src={images[active]}
          alt="animal"
          className="md:w-1/2 px-4 lg:w-full "
        />

        <div className="grid gap-4 grid-cols-5 h-4 p-2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={` w-25 h-25  rounded-full border-solid 
                            border-2 border-black 
                            ${index === active ? 'opacity-70' : ''}`}
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

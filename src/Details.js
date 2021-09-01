import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from './Carousel';
import ThemeContext from './ThemeContext';

import Modal from './Modal';

import ErrorBoundary from './ErrorBoundary';

class Details extends Component {
  // *x* babel is transpiling this for us, so we dont have to add a constructor, super,etc.
  state = { loading: true, showModal: false };

  async componentDidMount() {
    // Match and params are coming from react router.
    // We're typing id because of the params we setted in the App.js
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();

    // takes an object and marge it back with the old state.
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => (window.location = 'http://bit.ly/pet-adopt');

  render() {
    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    // Testing errors...
    // throw new Error('jasfasd');

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>

          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h2>Would you like to adopt {name}?</h2>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// High order component so we can receive props
// export default withRouter(Details); <-- allows get data from router

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}

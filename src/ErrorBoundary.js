import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  // If there's an error it calls:
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // I log this to Sentry, Azure Monitor, New Relic, TrackJS
    console.error('ErrorBoundary caught an error', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      // That's how you redirect with router.
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error{' '}
          <Link to="/">
            <b>Go back</b>
          </Link>
          <br />
          or wait 5 seconds, you&#39;ll be redirected...
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

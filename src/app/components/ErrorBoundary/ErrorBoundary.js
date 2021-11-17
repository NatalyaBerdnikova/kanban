import React, { useState, useEffect } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      stack: null,
      message: null,
    };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true, stack: err.stack, message: err.message };
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div>Guys, something strange is happened!</div>
          <button onClick={() => window.location.reload()}>
            Reload the page
          </button>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

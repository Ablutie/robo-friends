import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, message) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>ERROR ERROR ERROR</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
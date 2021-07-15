import { checkPropTypes } from "prop-types";
import { Component } from "react";

interface CustomErrorType extends Error { };

interface RenderFallbackProps<ErrorType extends CustomErrorType = Error> {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
}

type RenderFallbackType = <ErrorType extends Error>(
  params: RenderFallbackProps<ErrorType>
) => React.ReactNode;

interface ErrorBoundaryProps {
  renderFallback: RenderFallbackType;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: CustomErrorType | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props);

    this.state = { hasError: false, error: null };

  }

  static getDerivedStateFromError(error: CustomErrorType) {
    return {
      hasError: true,
      error,
    };
  }

  handleBoundaryError(error: CustomErrorType) {
    this.setState({ error, hasError: true })
  }

  componentDidCatch(error: CustomErrorType, errorInfo) {
    console.error(error);

  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    const { children, renderFallback } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary
      });
    }

    return children;
  }
}

export default ErrorBoundary;
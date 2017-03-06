import React, { Component, cloneElement } from 'react';

function decorate(component, props) {
  const mergedProps ={ ...component.props, ...props };
  // Wraps the input component in a container, without mutating it. Good!
  return cloneElement(component, mergedProps, component.props.children);
}

function decorateWithContext(contextTypes, context) {
  return function (DecoratedComponent) {
    return class Decorator extends Component {
        static childContextTypes = contextTypes;

        getChildContext() {
          return context;
        }

        render() {
          return (
            <DecoratedComponent {...this.props} />
          );
        }
    }
  }
}

export {
  decorate,
  decorateWithContext
}

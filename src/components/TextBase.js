import React, { Component, PropTypes } from 'react';

class TextBase extends Component {

  static propTypes = {
    bold: PropTypes.bool,
    italic: PropTypes.bool
  }

  render(){
    return (
      <p {...this.props}>
        { this.props.children }
      </p>
    )
  }
}

export default TextBase;

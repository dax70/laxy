import React, { Component } from 'react';

class TextBlock extends Component {
  render() {
    return (
      <span {...this.props} >
        { this.props.children }
      </span>
    )
  }
}

export default TextBlock;

/* @flow */

import React, { Component } from 'react';

class Image extends Component {
  render() {
    // TODO: consider wrapping.
    // @Hack - due to create-react-app
    const src = process.env.PUBLIC_URL + this.props.src;
    return (
      <img alt={this.props.alt} src={src} width={this.props.width} height={this.props.height}/>
    )
  }
}

export default Image;

import React, { Component } from 'react';

class Block extends Component {
  render(){
    return (
      <div {...this.props}>{this.props.children}</div>
    )
  }
}

export default Block;

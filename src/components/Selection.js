import React, { Component } from 'react';
import TextBlock from './TextBlock';

const defaultStyle = {
  backgroundColor: 'blue',
  color: '#fff',
  fontWeight:'bold',
}

class Selection extends Component {
  render(){
    const child = Children.only(this.props.children);
    const style = Object.assign({}, child.props.style, defaultStyle);
    const props = Object.assign({}, child.props, {style});

    return (
      <TextBlock {...this.props}>
        { this.props.children }
      </TextBlock>
    )
  }
}

export default Selection;

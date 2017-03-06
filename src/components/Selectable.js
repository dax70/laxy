import React,  from 'react';
import DocumentPart from './DocumentPart';
import { decorate } from './Decorator';

class Selectable extends DocumentPart {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    
  }

  render() {
    const mergedProps = { ...this.props, onClick:this.onClick };
    return decorate(Children.only(this.props.children), mergedProps);
  }
}

export default Selectable;

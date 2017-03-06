import React, { Component, Children } from 'react';
import { isString } from '../utils/string';
import { decorate } from './Decorator';

class Bold extends Component {

  static defaultProps = {
    style: {fontWeight:'bold'}
  }

  render() {
    const children = this.props.children;
    if(!children && children.length === 1){
      // @Hack - using React Children.only as validation
      // Throws if it finds an array.
      Children.only(this.props.children)
    }

    if(isString(children)) {
      return (<span {...this.props}>{children}</span>)
    }

    const child = children[0];
    return decorate(child, this.props);
  }
}

export default Bold;

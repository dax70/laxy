import React from 'react';
import DocumentPart from './DocumentPart';

class Text extends DocumentPart {

  render(){
    return (
      <div {...this.props}>
        { this.props.children }
      </div>
    )
  }
}

export default Text;

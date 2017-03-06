import React, { Component, PropTypes } from 'react';
import EditorState from './EditorState';
import Visitor from './Visitor';

class Document extends Component {

  static defaultProps = {
    visitor: new Visitor()
  }

  static propTypes = {
    visitor: PropTypes.objectOf(Visitor)
  }

  render() {
    const {source, visitor}  = this.props;
    const children = visitor.visit(source);

    return (
      <EditorState>      
        <div data-document="standard">
          { children }
        </div>
      </EditorState>
    );
  }
}

export default Document;

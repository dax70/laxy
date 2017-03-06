import React, {Component} from 'react';

class DocumentPart extends Component {
  static contextTypes = {
    editorMode: React.PropTypes.object
  }

  componentWillMount() {
    const {editorMode} = this.context;
    console.log(editorMode);
  }
}

export default DocumentPart;

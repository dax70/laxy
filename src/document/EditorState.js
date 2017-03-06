import {Component, Children, PropTypes} from 'react';

class EditorState extends Component {

  static defaultProps = {
    editorMode: {
      inEdit: false
    }
  }

  static propTypes = {
      editorMode: PropTypes.object,
    }

  static childContextTypes = {
    editorMode: PropTypes.object
  }

  // Set the share value
  getChildContext() {
    return {
      editorMode: this.props.editorMode
    };
  }

  render() {
    console.log(this.props.editorMode);
    return Children.only(this.props.children);
  }
}

export default EditorState;

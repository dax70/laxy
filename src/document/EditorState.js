import React, {Component, Children, PropTypes} from 'react';
import { decorate } from '../components/Decorator';

class EditorState extends Component {

  constructor(props) {
    super(props);
    this.contentClicked = this.contentClicked.bind(this);
    this.state = { inEdit: false };
  }

  static childContextTypes = {
    editorMode: React.PropTypes.object
  }

  contentClicked(e) {
    this.setState(prevState => ({
        inEdit: !this.state.inEdit
    }))
  }

  onKeyPress(e: SyntheticKeyboardEvent) {
    console.log(String.fromCharCode(event.which));
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  // Set the share value
  getChildContext() {
    return {
      editorMode: {
        inEdit: this.state.inEdit
      }
    };
  }

  render() {
    const props = { ...this.props, ...{ onClick: this.contentClicked}};
    return decorate(Children.only(this.props.children), props);
  }
}

export default EditorState;

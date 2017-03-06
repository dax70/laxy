import React, { Component, PropTypes } from 'react';
import EditorState from './EditorState';
import Visitor from './Visitor';
import { Selectable } from '../components';

class Document extends Component {

  constructor(props) {
    super(props);
    this.contentClicked = this.contentClicked.bind(this);
    this.state = { inEdit: false };
  }

  static defaultProps = {
    visitor: new Visitor()
  }

  static propTypes = {
    visitor: PropTypes.objectOf(Visitor)
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

  render() {
    const {source, visitor}  = this.props;
    const {content} = source;

    const docItems = Array.isArray(content)? content: [content];

    const children = docItems.map((part, index) => {
      return <Selectable key={index} onClick={this.contentClicked}>{visitor.visit({index: index++, part})}</Selectable>
    });

    return (
      <EditorState editorMode={ this.state }>
        <div data-document="standard">
          { children }
        </div>
      </EditorState>
    );
  }
}

export default Document;

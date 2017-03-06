

import React, {Element} from 'react';
import {Bold, Image, Text, TextBlock } from '../components';
import { isString } from '../utils/string';

export default class Visitor {

  visit(source): Element<any> {
    const {index, part} = source;

    const context = part;

    switch (part.type) {
      case 'img':
        return this.visitImage(index, context);
      case 'bold':
        return this.visitBold(index, context);
      case 'text':
        return this.visitText(index, context);
      case 'block':
        return this.visitTextBlock(index, context)
      default:
        throw TypeError(`Document part ${part} not supported at ${index}`);
    }
  }

  visitImage(index, props) {
    return <Image key={index} {...props.attr} />
  }

  visitText(index, props) {
    const {content} = props;
    if(isString(content)) {
      return <Text key={index} >{content}</Text>
    }

    const nested = content.content;
    if(nested) {
      return this.visit({index: 0, part: content});
    }

    // props is an array
    const textContent = content.map((part, index)=> this.visit({index, part}));
    return <Text key={index} >{textContent}</Text>
  }

  visitBold(index, props) {
    const {content} = props;

    if(isString(content)) {
      return <Bold key={index} >{content}</Bold>
    }

    const nested = content.content;
    if(nested) {
      return this.visit({index: 0, part: content});
    }

    const textContent = content.map((part, index)=> this.visit({index, part}));
    return <Bold key={index} >{textContent}</Bold>
  }

  visitTextBlock(index, props) {
    return <TextBlock key={index} >{props.content}</TextBlock>
  }
}

import React, { Component } from 'react';
import './App.css';
import Document from './document';

const doc = {
    content: [{
        type: 'text',
        content: [
          {
            type: 'bold',
            content: {
              type:'block', content: 'Some Text'
            }
          },
          {
            type:'img',
            attr: { src:'/Mac-null.png', width:'178', height:'145.5'}
          },
          {
            type:'block',
            content: 'Followed by some more.'
          },
          {
            type:'text',
            content:'Plain text'
          },
          {
            type:'text',
            content:[ {type: 'block', content:'Formatted '}, { type: 'bold', content:'text'}]
          }
      ]
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Document source={doc}>

        </Document>
      </div>
    );
  }
}

export default App;

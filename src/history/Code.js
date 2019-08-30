import React, { Component } from 'react';
import './Code.css';

export class Code extends Component {
  render() {
    return (
      <div className="Code">
        <pre>
          <code>
            {`<label class="select">
  <select class="selector">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
  </select>
</label>`}
          </code>
        </pre>
      </div>
    );
  }
}

export default Code;

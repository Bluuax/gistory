import React, { Component } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from './theme';
import './Code.css';

export class Code extends Component {
  render() {
    return (
      <div className="Code">
        <Highlight {...defaultProps} theme={theme} code={this.props.content} language={this.props.language}>
          {/* TODO */}
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              <code>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    <div className="line-number">{i + 1}</div> {/* TODO */}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    );
  }
}

export default Code;

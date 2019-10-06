import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Base64 } from 'js-base64';
import theme from 'prism-react-renderer/themes/github';
import './Code.css';

function Code(props) {
  return (
    <Highlight {...defaultProps} theme={theme} code={Base64.decode(props.content)} language={props.language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: `${i}${line.map(item => item.content)}` })} className="Code-animation">
              <span className="line-number">{i + 1}</span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default Code;

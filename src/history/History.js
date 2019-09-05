import React, { Component } from 'react';
import Timeline from './Timeline';
import Code from './Code';
import Card from './Card';
import './History.css';
import axios from 'axios';
import { Base64 } from 'js-base64';

export class History extends Component {
  static defaultProps = {
    source: 'https://api.github.com/repos/bluuax/gistory/commits?path=src/App.js'
  };

  state = {
    versions: '',
    content: ''
  };

  componentDidMount() {
    let versions;

    axios.get(this.props.source).then(resp => {
      console.log(resp.data);
      versions = resp.data;
    });

    /*
    axios.get(versions[0].).then(resp => {
      console.log(resp.data);
      versions = resp.data;
    });
    */

    let temp =
      'https://api.github.com/repos/Bluuax/gistory/contents/src/App.js?ref=1f9710a55dce1661cbf32f60cd54ad6513866dc5';

    axios.get(temp).then(resp => {
      console.log(Base64.decode(resp.data.content));
      this.setState({ content: Base64.decode(resp.data.content) });
    });
  }

  render() {
    return (
      <div className="History-container">
        <div className="History-timeline">
          <Timeline boxesAmount={6} />
        </div>
        <div className="History-code">
          <Code content={this.state.content} />
        </div>
        <div className="History-card History-changes-card">
          <Card title="Changes" color="#f5cba7" /> {/* TODO: Modaler Dialog - See all changes */}
        </div>
        <div className="History-card History-info-card">
          <Card title="Info" color="#BB8FCE" />
        </div>
      </div>
    );
  }
}

export default History;

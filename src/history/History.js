import React, { Component } from 'react';
import Timeline from './Timeline';
import Code from './Code';
import Card from './Card';
import './History.css';
import axios from 'axios';
import { Base64 } from 'js-base64';

export class History extends Component {
  static defaultProps = {
    /* TODO: Branch dynamisch machen */
    source: 'https://api.github.com/repos/bluuax/gistory/commits?sha=master&path=src/App.js'
  };

  state = {
    versions: [],
    content: '',
    loading: true
  };

  async componentDidMount() {
    try {
      const resp = await axios.get(this.props.source);
      const commits = resp.data;
      this.setState({ versions: commits });

      let contentSource = `https://api.github.com/repos/Bluuax/gistory/contents/src/App.js?ref=${commits[0].sha}`;
      const resp2 = await axios.get(contentSource);
      const commit = resp2.data;
      this.setState({ content: Base64.decode(commit.content), loading: false });
    } catch (e) {
      console.error('ERROR');
    }
  }

  render() {
    return (
      <div className="History-container">
        {!this.state.loading && (
          <React.Fragment>
            <div className="History-timeline">
              <Timeline displayAmount={6} id={this.state.versions.map(item => item.sha)} />
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default History;

import React, { Component } from 'react';
import axios from 'axios';
import { Base64 } from 'js-base64';
import Timeline from './Timeline';
import Code from './Code';
import Card from './Card';
import './History.css';

export class History extends Component {
  static defaultProps = {
    /* TODO: Branch dynamisch machen */
    source: 'https://api.github.com/repos/bluuax/gistory/commits?sha=master&path=src/App.js'
  };

  state = {
    versions: [],
    contents: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const commitListResp = await axios.get(this.props.source);
      const commits = commitListResp.data;
      this.setState({ versions: commits });

      const owner = 'Bluuax';
      const repo = 'gistory';
      const path = 'src/App.js';

      const contentSource = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=`;
      const commitsResp = await Promise.all(
        commits.map(async commit => {
          return await axios.get(`${contentSource}${commit.sha}`);
        })
      );

      this.setState({ content: commitsResp.map(content => Base64.decode(content.data.content)), loading: false });

      // TODO: Temp
      const temp = await axios.get('https://api.github.com/rate_limit', {
        headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
      });
      console.log(temp.data.rate);
    } catch (e) {
      console.error(`ERROR: ${e}`);
    }
  }

  render() {
    return (
      <div className="History-container">
        {/* TODO: Loading-Spinner einbauen */}
        {!this.state.loading && (
          <React.Fragment>
            <div className="History-timeline">
              <Timeline displayAmount={6} id={this.state.versions.map(item => item.sha)} />
            </div>
            <div className="History-code">
              <Code content={this.state.content[0]} />
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

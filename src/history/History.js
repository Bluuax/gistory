import React, { Component } from 'react';
import axios from 'axios';
import Timeline from './Timeline';
import Code from './Code';
import Card from './Card';
import './History.css';

export class History extends Component {
  static defaultProps = {
    /* TODO: 
    - URL dnyamisch auslesen
    - Branch dynamisch machen */
    source: 'https://api.github.com/repos/bluuax/gistory/commits?sha=master&path=src/App.js',
    owner: 'Bluuax',
    repo: 'gistory',
    path: 'src/App.js'
  };

  state = {
    versions: [],
    selectedCommit: {},
    loading: true
  };

  async componentDidMount() {
    try {
      const commitListResp = await axios.get(this.props.source, {
        headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
      });
      const commits = commitListResp.data;
      this.setState({ versions: commits });

      const contentSource = `https://api.github.com/repos/${this.props.owner}/${this.props.repo}/contents/${this.props.path}?ref=`;
      const commitsResp = await Promise.all(
        commits.map(async commit => {
          return await axios.get(`${contentSource}${commit.sha}`, {
            headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
          });
        })
      );

      this.setState(st => ({
        versions: st.versions.map((version, index) => ({ ...version, content: commitsResp[index].data.content })),
        selectedCommit: { ...st.versions[0], content: commitsResp[0].data.content },
        loading: false
      }));

      // TODO: Temp
      const temp = await axios.get('https://api.github.com/rate_limit', {
        headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
      });
      console.log(temp.data.rate);
    } catch (e) {
      console.error(`ERROR: ${e}`);
    }
  }

  selectCommit = sha => {
    this.setState(st => ({
      selectedCommit: st.versions.find(version => version.sha === sha)
    }));
  };

  render() {
    return (
      <div className="History-container">
        {/* TODO: Loading-Spinner einbauen */}
        {!this.state.loading && (
          <React.Fragment>
            <div className="History-timeline">
              <Timeline displayAmount={6} versions={this.state.versions} selectCommit={this.selectCommit} />
            </div>
            <div className="History-code">
              <Code content={this.state.selectedCommit.content} language="jsx" /> {/* TODO: Dynamisch ermitteln */}
            </div>
            <div className="History-card History-info-card">
              <Card title="Info" color="#f5cba7" />
            </div>
            <div className="History-card History-changes-card">
              <Card title="Changes" color="#bb8fce" /> {/* TODO: Modaler Dialog - See all changes */}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default History;

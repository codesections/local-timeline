import './style';
import { Component } from 'preact';
import LoadingMsg from './components/loading.js';
import Toot from './components/toot.js';

export default class App extends Component {
  constructor() {
    super();
    this.state.loaded = 'false';
    this.state.messages = [];
    this.state.idOfLastLoadedToot = '';
  }

  componentDidMount() {
    this.getLocalTL();
  }

  getLocalTL() {
    const xhr = new XMLHttpRequest();
    let url = 'https://fosstodon.org/api/v1/timelines/public?local=true';
    if (this.state.idOfLastLoadedToot) { url += `&max_id=${this.state.idOfLastLoadedToot}`; }

    xhr.open('GET', url, true);
    const context = this;

    xhr.onreadystatechange = () => {
      if (
        xhr.readyState === XMLHttpRequest.DONE
        && xhr.status === 200
      ) {
        const fullResponse = JSON.parse(xhr.responseText);
        const propertiesToKeep = [
          'account',
          'content',
          'created_at',
          'favourites_count',
          'reblogs_count',
          'replies_count',
          'media_attachments',
          'spoiler_text',
        ];
        const response = [];
        fullResponse.forEach((responseObj) => {
          const filtered = Object.keys(responseObj).filter(key => propertiesToKeep.includes(key))
            .reduce((obj, key) => {
              obj[key] = responseObj[key];
              return obj;
            }, {});
          response.push(filtered);
        });
        context.setState({
          messages: context.state.messages.concat(response),
          idOfLastLoadedToot: fullResponse[fullResponse.length - 1].id,
          loaded: true,
        });
      }
    };
    xhr.send();
  }

  render() {
    return (
      <div className="body__defaults">
        <div>
          <h1 className="header--main" id="add-an-instance-h1">
            Fosstodon local timeline
          </h1>
        </div>
        <div className="results--target-toot">
          {this.state.loaded === true
            ? this.state.messages.map(message => <Toot message={message} />)
            : <LoadingMsg />}
        </div>
        <button type="button" onClick={() => this.getLocalTL.call(this)} className="button">
          Load More
        </button>
      </div>
    );
  }
}

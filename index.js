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
        const response = filterResponse(fullResponse);
        response.forEach((toot, i) => {
          response[i] = insertCustomEmoji(toot);
        });
        context.setState({
          messages: context.state.messages.concat(response),
          idOfLastLoadedToot: fullResponse[fullResponse.length - 1].id,
          loaded: true,
        });
      }
    };
    xhr.send();

    const filterResponse = function (unfilteredResponse) {
      const propertiesToKeep = [
        'account',
        'content',
        'created_at',
        'favourites_count',
        'reblogs_count',
        'replies_count',
        'media_attachments',
        'spoiler_text',
        'emojis',
      ];
      const response = [];
      unfilteredResponse.forEach((responseObj) => {
        const filtered = Object.keys(responseObj).filter(key => propertiesToKeep.includes(key))
          .reduce((obj, key) => {
            obj[key] = responseObj[key];
            return obj;
          }, {});
        response.push(filtered);
      });
      return response;
    };

    const insertCustomEmoji = function (response) {
      // add emoji in display name
      response.account.emojis.forEach((emojiObj) => {
        const displayName = response.account.display_name;
        const customEmoji = new RegExp(`:${emojiObj.shortcode}:`, 'g');
        response.account.display_name = displayName.replace(
          customEmoji,
          `<img class="custom-emoji" src="${emojiObj.static_url}" alt=":${emojiObj.shortcode}">`,
        );
      });
      if (response.emojis) {

        response.emojis.forEach((emojiObj) => {
          const customEmoji = new RegExp(`:${emojiObj.shortcode}:`, 'g');
          response.content = response.content.replace(
            customEmoji,
            `<img class="custom-emoji" src="${emojiObj.static_url}" alt=":${emojiObj.shortcode}">`,
          );
        });
      }
      return response;
    };
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

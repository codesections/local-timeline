import { Component } from 'preact';

class TootContent extends Component {
  constructor(props) {
    super(props);
    this.state.textHidden = true;
  }

  render(props) {
    if (props.cwText) {
      return (
        <div>
          <div style={{ display: 'inline-block' }}>{props.cwText}</div>
          <button
            type="button"
            className="button--show-more"
            onClick={() => this.setState({ textHidden: !this.state.textHidden })}
          >
            show more
          </button>
          <div
            style={{ display: this.state.textHidden ? 'none' : 'block' }}
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        </div>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: props.text }} />
  }
}

export default TootContent;

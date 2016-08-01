import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

export default class StyleButton extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    style: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
      </span>
    );
  }
}

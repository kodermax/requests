import React, { Component, PropTypes } from 'react';
export default class ListView extends Component {
  static propTypes = {
    params: PropTypes.object
  };
  constructor (props) {
    super(props);
    this.id = this.props.params.id;
  }
  render () {
    return (
      <div>
        {this.props.params.id}
      </div>
    );
  }
}

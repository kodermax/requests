import React, {Component, PropTypes} from 'react';
import Button from 'react-biz/lib/button';

export default class ActionsView extends Component {
  static propTypes = {
    actions: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    console.log(props);
    this.btnAction = this.handleAction.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  handleAction = (code) => {
    console.log(code);
  };
  render() {
    let actions = this.props.actions.map((item) => {
      return (
        <div key={item.code}><Button onMouseUp={this.btnAction} label={item.title} /></div>
      );
    });
    return (
      <div>
        {actions}
      </div>
    );
  }
}

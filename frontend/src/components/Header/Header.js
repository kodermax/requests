import React, { Component} from 'react';
import { Button } from 'react-biz/lib/button';
import AppBar from 'react-biz/lib/app_bar';
import Badge from 'react-biz/lib/badge';
import LoadingBar from '../Bar/LoadingBar';
import theme from './theme.scss';

export default class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  constructor (props) {
    super(props);
    this.toHome = this.handleToHome.bind(this);
    this.toList = this.handleToList.bind(this);
  }
  handleToHome = (e) => {
    e.preventDefault();
    this.context.router.push('/requests');
  };
  handleToList = (e) => {
    e.preventDefault();
    this.context.router.push('/requests/list');
  };

  render () {
    return (
      <div>
        <AppBar flat={true} theme={theme}>
          <Button icon="home" theme={theme} onMouseUp={this.toHome} />
          <Button label="Все заявки" raised={true} onMouseUp={this.toList} />
          <Badge theme={theme} badgeContent={10} secondary={true} badgeStyle={{top: 12, right: 12}}>
            <Button label="Исполняю" raised={true} />
          </Badge>
        </AppBar>
        <LoadingBar />
      </div>
    );
  }
}
export default Header;

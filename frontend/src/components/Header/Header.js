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
  toHome = (e) => {
    e.preventDefault();
    this.context.router.push('/');
  };
  toList = (e) => {
    e.preventDefault();
    this.context.router.push('/list');
  };

  render () {
    return (
      <div>
        <h1>Заявки</h1>
        <AppBar flat theme={theme}>
          <Button label='Мои заявки' raised onMouseUp={::this.toList} />
          <Badge theme={theme} badgeContent={10} secondary badgeStyle={{top: 12, right: 12}}>
            <Button label='Исполняю' raised />
          </Badge>
          <Button label='Создать' raised primary onMouseUp={::this.toHome} />
        </AppBar>
        <LoadingBar />
      </div>
    );
  }
}
export default Header;

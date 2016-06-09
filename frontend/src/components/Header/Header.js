import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-biz/lib/button';
import AppBar from 'react-biz/lib/app_bar';

export const Header = () => (
  <div>
    <h1>Заявки</h1>
    <AppBar flat>
      <Link to='/list'>
        <Button label='Мои заявки' raised primary />
      </Link>
    </AppBar>
  </div>
);

export default Header;

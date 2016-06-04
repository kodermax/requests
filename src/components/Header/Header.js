import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Header.scss';
import {Button} from 'react-biz/lib/button';
import AppBar from 'react-biz/lib/app_bar';

export const Header = () => (
  <div>
    <h1>Заявки</h1>
    <AppBar flat>
      <Button label='Мои заявки' raised primary />
    </AppBar>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Главная
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
);

export default Header;

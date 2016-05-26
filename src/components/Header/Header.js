import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Header.scss';

export const Header = () => (
  <div>
    <h1>Заявки</h1>
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

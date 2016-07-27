// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Home from './Home';
import RequestsList from './Requests/List';
import RequestsItem from './Requests/Item';
import CreateTrip from './Requests/Trip/Create';
import ListTrip from './Requests/Trip/List';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/requests',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CreateTrip(store),
    RequestsList(store),
    RequestsItem(store),
    ListTrip(store),
  ],
});

export default createRoutes;

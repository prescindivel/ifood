import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Order from './pages/Order';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Home,
    Order,
  })
);

export default Routes;

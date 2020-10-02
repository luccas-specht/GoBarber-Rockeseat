import { Login, SingUp } from '../../ui/pages';

const ROUTERS = {
  defaultRoute: {
    path: () => '/',
    component: Login,
  },

  login: {
    path: () => '/login',
    component: Login,
  },

  register: {
    path: () => '/sing-up',
    component: SingUp,
  },
};

export { ROUTERS };

import { SingIn, SingUp } from '../ui/pages';

const ROUTERS = {
  defaultRoute: {
    path: () => '/',
    component: SingIn,
  },

  login: {
    path: () => '/sing-in',
    component: SingIn,
  },

  register: {
    path: () => '/sing-up',
    component: SingUp,
  },
};

export { ROUTERS };

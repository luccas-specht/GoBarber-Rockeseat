import { Login, SingUp } from '../../ui/pages';

const paths = {
  default: () => '/',
  login: () => '/login',
  SingUp: () => '/sing-up',
};

const components = {
  login: Login,
  singUp: SingUp,
};

const routers = {
  defaultRoute: {
    path: paths.default(),
    component: components.login,
  },

  login: {
    path: paths.login(),
    component: components.login,
  },

  register: {
    path: paths.SingUp(),
    component: components.singUp,
  },
};

export { routers };

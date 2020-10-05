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

const routers = [
  {
    path: paths.default(),
    component: components.login,
    isPublic: true,
  },

  {
    path: paths.login(),
    component: components.login,
    isPublic: true,
  },

  {
    path: paths.SingUp(),
    component: components.singUp,
    isPublic: true,
  },
];

export { routers };

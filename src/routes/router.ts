import { SingIn, SingUp } from '../ui/pages';

const PATHS = {
  login: '/sing-in',
  register: '/sing-up',
};

const ROUTERS = [
  {
    path: PATHS.login,
    component: SingIn,
    isPublic: true,
  },
  {
    path: PATHS.register,
    component: SingUp,
    isPublic: true,
  },
];

export { ROUTERS };

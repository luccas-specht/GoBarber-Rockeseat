import {
   Login, 
   SingUp, 
   Dashboard,
   ForgotPassword,
   ResetPassword
   } from '../../ui/pages';

const paths = {
  default: () => '/',
  login: () => '/login',
  singUp: () => '/sing-up',
  forgotPassword: ()=>'/forgot-password',
  resetPassowrd: ()=> '/reset-password',
  dashboard: ()=> '/dashboard'
};

const components = {
  login: Login,
  singUp: SingUp,
  forgotPassword: ForgotPassword,
  dashboard: Dashboard,
  resetPassword: ResetPassword
};

const routers = [
  {
    isPublic: true,
    path: paths.default(),
    component: components.login,
  },
  {
    isPublic: true,
    path: paths.login(),
    component: components.login,
  },
  {
    isPublic: true,
    path: paths.singUp(),
    component: components.singUp,
  },
  {
    isPublic: true,
    path: paths.forgotPassword(),
    component: components.forgotPassword,
  },
  {
    isPublic: true,
    path: paths.resetPassowrd(),
    component: components.resetPassword,
  },
  {
    isPublic: false,
    path: paths.dashboard(),
    component: components.dashboard,
  }
];

export { routers };
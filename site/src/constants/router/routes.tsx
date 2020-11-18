import {
   Login, 
   SingUp, 
   Dashboard } from '../../ui/pages';

const paths = {
  default: () => '/',
  login: () => '/login',
  singUp: () => '/sing-up',
  dashboard: ()=> '/dashboard'
};

const components = {
  login: Login,
  singUp: SingUp,
  dashboard: Dashboard
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
    isPublic: false,
    path: paths.dashboard(),
    component: components.dashboard,
  }
];

export { routers };

// const routers = {
//   default: {
//     path: paths.default(),
//     component: components.login(),
//   },

//   login: {
//     path: paths.login(),
//     component: components.login(),
//   },

//   singUp: {
//     path: paths.singUp(),
//     component: components.singUp(),
//   },

//  dashboard: {
//     path: paths.dashboard(),
//     component: components.dashboard(),
//   }
// }
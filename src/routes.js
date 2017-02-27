// @flow
import Root from 'containers/Root';
import Dashboard from 'containers/Dashboard';
import DiffBuildDetail from 'pages/DiffBuildDetail';
import NotFound from 'pages/NotFound';
import fetchDiffBuild from 'highorders/fetchDiffBuild';

export default {
  path: '/',
  component: Root,
  childRoutes: [
    {
      component: Dashboard,
      indexRoute: {
        component: NotFound,
      },
      childRoutes: [
        {
          path: 'builds/:encoded',
          component: fetchDiffBuild(DiffBuildDetail),
        },
        {
          path: '*',
          component: NotFound,
        },
      ],
    },
  ],
};

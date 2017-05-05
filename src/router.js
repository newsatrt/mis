import React from 'react';
import {Router} from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'AppPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/AppPage'));
        },'AppPage');
      },
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/syllabus'));
          cb(null, require('./routes/SyllabusDaily'));
        }, 'DailyPage');
      },
      childRoutes: [
        {
          path: 'daily',
          name: 'DailyPage',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/syllabus'));
              cb(null, require('./routes/SyllabusDaily'));
            }, 'DailyPage');
          },
        },
        {
          path: 'month',
          name: 'MonthPage',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/syllabus'));
              cb(null, require('./routes/SyllabusMonth'));
            }, 'MonthPage');
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Login'));
        },'LoginPage');
      },
    }
  ];

  return <Router history={history} routes={routes}/>;
}

export default RouterConfig;

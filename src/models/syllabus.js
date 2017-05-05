import * as syllabusService from '../services/syllabus';
export default {
  namespace: 'syllabus',
  state: {
    list: []
  },
  reducers: {
    handleDailyList(state, action) {
      return {
        ...state,
        list: action.payload.list
      }
    },
    handleMonthList(state, action) {
      return {
        ...state,
        list: action.payload.list
      }
    },
  },
  effects: {
    *getDailyList({payload: {date}}, {call, put}) {
      if (!date) {
        let currentDate = new Date();
        date = currentDate.getFullYear() + "" +
          (currentDate.getMonth() < 9 ? (0 + "" + (currentDate.getMonth() + 1)) : (currentDate.getMonth() + 1)) + "" +
          (currentDate.getDate() < 10 ? (0 + "" + currentDate.getDate()) : currentDate.getDate())
      }
      const {data} = yield call(syllabusService.getDailyList, {id: 1, date: 20170407});
      if (data.result === 0) {
        yield put({
          type: 'handleDailyList',
          payload: {
            list: data.data
          },
        });
      }
    },
    *getMonthList({payload: {year = 2017, month = new Date().getMonth() + 1}}, {call, put}) {
      const {data} = yield call(syllabusService.getMonthList, {id: 1, year: year, month: month});
      if (data.result === 0) {
        yield put({
          type: 'handleMonthList',
          payload: {
            list: data.data
          },
        });
      }
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/daily') {
          dispatch({type: 'getDailyList', payload: query});
        } else if (pathname === '/month') {
          dispatch({type: 'getMonthList', payload: query});
        }
      });
    }
  },
};

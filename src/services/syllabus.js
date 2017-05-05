import request from '../utils/request';
import config from '../utils/config';
let basePath = config.basePath;

export function getDailyList(values) {
  return request(basePath + 'courses/teacher/daily', {
    method: 'POST',
    body: JSON.stringify(values)
  });
}

export function getMonthList(values) {
  return request(basePath + 'courses/teacher/month', {
    method: 'POST',
    body: JSON.stringify(values)
  });
}

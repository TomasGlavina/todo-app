const request = require('supertest');

const app = require('../src/app');

describe('app', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/what-is-this-event')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

// const tasks = [
//   {
//     _id: 1,
//     task: 'Wake up',
//     createdAt: '2022-12-07T21:16:43.268Z',
//     updatedAt: '2022-12-07T21:16:43.268Z',
//     __v: 0,
//   },
//   {
//     _id: 2,
//     task: 'Get Coffee',
//     createdAt: '2022-12-07T21:16:47.818Z',
//     updatedAt: '2022-12-07T21:16:47.818Z',
//     __v: 0,
//   },
//   {
//     _id: 3,
//     task: 'Code',
//     createdAt: '2022-12-07T21:16:50.011Z',
//     updatedAt: '2022-12-07T21:16:50.011Z',
//     __v: 0,
//   },
//   {
//     _id: 4,
//     task: 'Go back to sleep',
//     createdAt: '2022-12-11T18:47:28.677Z',
//     updatedAt: '2022-12-11T18:47:28.677Z',
//     __v: 0,
//   },
// ];

// describe('GET /api/v1/tasks', () => {
//   it('responds with a json message', (done) => {
//     request(app)
//       .get('/api/v1/tasks')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, tasks, done);
//   });
// });

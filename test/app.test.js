const request = require('supertest');
const app = require('../app'); // import the app
let server;

beforeAll(() => {
  server = app.listen(3000); // start server only for tests
});

afterAll(() => {
  server.close(); // stop server after tests
});

describe('GET /users', () => {
  it('should return all users', async () => {
    const res = await request(server).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('POST /users', () => {
  it('should create a new user', async () => {
    const res = await request(server).post('/users').send({ name: 'Charlie' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Charlie');
  });
});

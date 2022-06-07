const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('zodiac-api2 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });
  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/11');
    const taurus = {
      id: '11',
      name: 'taurus',
      dates: 'Apr 20 - May 20',
      symbol: 'Bull',
    };
    expect(res.body).toEqual(taurus);
  });
  -zodiacs;

  afterAll(() => {
    pool.end();
  });
});

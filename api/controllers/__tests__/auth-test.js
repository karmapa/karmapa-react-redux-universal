import {expect} from 'chai';
import request from 'supertest';

const app = require('./../../app');

describe('auth', () => {

  describe('GET /auth', () => {

    it('should respond', () => {

      request(app)
        .get('api/auth')
        .expect('Content-Type', /json/)
        .expect(200, 'ok')
        .end((err, res) => {
          if (err) {
            throw err;
          }
        });
    });
  });

});

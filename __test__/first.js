/* eslint-disable no-undef */
const request = require('supertest');
const app = require('./app'); 
// eslint-disable-next-line no-undef
describe('Sports Scheduler', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4000); 

  afterAll((done) => {
    server.close(done); 

  describe('POST /create-player', () => {
    it('should create a new player account', async () => {
      const res = await request(app)
        .post('/create-player')
        .send({
          first: 'John',
          last: 'Doe',
          email: 'john.doe@example.com',
          password: 'password123',
        });
      expect(res.status).toBe(200);
      expect(res.text).toContain('successfully created account');
    });
  });

  // Test case for creating a sport
  describe('POST /createsport', () => {
    it('should create a new sport', async () => {
      const res = await request(app)
        .post('/createsport')
        .send({
          sport: 'Football',
          admin: 'admin@example.com',
        });
      expect(res.status).toBe(200);
      // Add more assertions as needed
    });
  });

  // Test case for creating a match
  describe('POST /creatematch', () => {
    it('should create a new match', async () => {
      const res = await request(app)
        .post('/creatematch')
        .send({
          sport: 'Football',
          admin: 'admin@example.com',
          date: '2024-02-10',
          venue: 'Stadium',
          match: 'Match1',
          teamsize: 11,
          timein: '09:00',
          timeout: '12:00'
        });
      expect(res.status).toBe(200);
      // Add more assertions as needed
    });
  });

  // Test case for joining a match
  describe('POST /joinmatch', () => {
    it('should allow a player to join a match', async () => {
      const res = await request(app)
        .post('/joinmatch')
        .send({
          admin: 'admin@example.com',
          selectedInfo: 'Football#Match1#2024-02-10#09:00#12:00'
        });
      expect(res.status).toBe(200);
      // Add more assertions as needed
    });
  });

  // Test case for deleting a match
  describe('POST /deletematch', () => {
    it('should delete a match', async () => {
      const res = await request(app)
        .post('/deletematch')
        .send({
          deleteMatch: ['Football:Match1'],
          reason: ['Match cancelled due to bad weather']
        });
      expect(res.status).toBe(200);
      // Add more assertions as needed
    });
  });
});
  })});
const request = require('supertest');
//const express = require('express');
const app = require('../app'); // You’ll need to export app from app.js

describe('GET /users', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('POST /users', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/users').send({ name: 'Charlie' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Charlie');
  });
});

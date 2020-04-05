const express = require('express');
const supertest = require('supertest');

function testSever(route) {
  const app = express();
  route(app);
  return supertest(app);
}

module.exports = testSever;

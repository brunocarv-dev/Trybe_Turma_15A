const { uppercase } = require('./fix1');
const { test, expect } = require('@jest/globals');

test( '', (done) => {
  uppercase('oie', (string) => {
    expect(string).toBe('OIE');
    done();
  }); 
});
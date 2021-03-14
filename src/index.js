module.exports = function reverse (n) {
  if(n == null || typeof(n) != 'number') {
      return 0;
  }

  n = n > 0 ? n : n * -1;

  return +(''+n)
      .split('')
      .reverse()
      .join('');
}

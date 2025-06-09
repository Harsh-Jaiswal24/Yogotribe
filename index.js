const express = require('express');
const app = express();
const port = 3000;

// Prime checking logic
function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false; // divisible by something other than 1 and itself
  }
  return true;
}


// Endpoint: GET /is-prime?number=17
app.get('/is-prime', (req, res) => {
  const number = parseInt(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({ error: 'Please provide a valid number' });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

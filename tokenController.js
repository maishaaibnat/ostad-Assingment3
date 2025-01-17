const jwt = require('jsonwebtoken');

exports.createToken = (req, res) => {
  const token = jwt.sign({ data: 'myData' }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
};

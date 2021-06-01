const { Router } = require("express");
const { check, validationResult } = require('express-validator');
const router= Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

router.post(
  '/register',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length 6 symbols').isLength({ min: 6 })
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect registration data'
      });
    }

    const { email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: 'Such a user with this email already regisetred' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({message: 'User has been registered'});
  } catch (e) {
    res.status(500).json({ message: 'Error on Server', errorMessage: e.message, errorStack: e.stack });
  }
});

router.post(
  '/login',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length 6 symbols').isLength({ min: 6 })
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect Login data'
      });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User with such email not found' });
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password, try again' })
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    );

    res.json({ token, userId :user.id });

  } catch (e) {
    res.status(500).json({ message: 'Error on Server', errorMessage: e.message, errorStack: e.stack });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Student, Admin } = require('../models/User'); 

const bodyParser = express.json();
 
router.post('/student/signup', bodyParser, async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newStudent = new Student({ name, email, password });
        await newStudent.save();

        res.status(201).json({ message: 'Student logged in successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.post('/admin/signup', bodyParser, async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newAdmin = new Admin({ username, email, password });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin logged in successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
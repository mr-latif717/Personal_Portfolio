const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');
const { 
    submitContact, 
    getMessages, 
    getMessageById, 
    deleteMessage 
} = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

// Auth Routes
router.post('/auth/login', loginUser);

// Contact Routes
router.post('/contacts', submitContact);
router.get('/contacts', protect, getMessages);
router.get('/contacts/:id', protect, getMessageById);
router.delete('/contacts/:id', protect, deleteMessage);

module.exports = router;

const db = require('../config/db');
const nodemailer = require('nodemailer');

// @desc    Submit contact message
// @route   POST /api/contacts
// @access  Public
const submitContact = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(query, [name, email, subject, message]);

        // Optional: Send email notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `New Portfolio Message: ${subject}`,
                text: `You have received a new message from ${name} (${email}):\n\n${message}`
            };

            // Send email without blocking response
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) console.error('Error sending email:', error);
                else console.log('Email sent:', info.response);
            });
        }

        res.status(201).json({ message: 'Message sent successfully', id: result.insertId });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all messages
// @route   GET /api/contacts
// @access  Private
const getMessages = async (req, res) => {
    try {
        const [messages] = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get a single message
// @route   GET /api/contacts/:id
// @access  Private
const getMessageById = async (req, res) => {
    try {
        const [messages] = await db.query('SELECT * FROM contacts WHERE id = ?', [req.params.id]);
        
        if (messages.length === 0) {
            return res.status(404).json({ message: 'Message not found' });
        }
        
        res.json(messages[0]);
    } catch (error) {
        console.error('Error fetching message:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a message
// @route   DELETE /api/contacts/:id
// @access  Private
const deleteMessage = async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM contacts WHERE id = ?', [req.params.id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Message not found' });
        }
        
        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { submitContact, getMessages, getMessageById, deleteMessage };

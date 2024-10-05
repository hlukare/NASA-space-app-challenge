// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public')); // Serve static files from 'public' directory

app.post('/upload', upload.single('blog-upload'), (req, res) => {
    res.send('File uploaded successfully.');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

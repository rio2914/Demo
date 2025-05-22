const express = require('express');
const app = express();
const port = 3000;

// Sample GET API
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, this is your GET API response!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

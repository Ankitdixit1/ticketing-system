const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./mock_data.json')

// get
app.get("/api/ticket/:id", (req, res) => {
    const { id } = Number(req.params.id);
    const ticket = data.find((item) => item.id === id);
    res.send(ticket);
});

app.listen(4000);
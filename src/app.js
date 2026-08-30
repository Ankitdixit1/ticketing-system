const express = require("express");
const app = express();
// middlewares that enables express to parse json bodies
app.use(express.json());
// health check route
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        serverice: "ticketing service",
    });
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Something went wrong!" });
});

// exports the app to be used in server.js
module.exports = app;
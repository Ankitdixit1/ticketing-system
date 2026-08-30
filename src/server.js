const app = require("./app");
const PORT = 4000;


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: "Something went wrong!" });
});
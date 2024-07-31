app.post('/executeQuery', (req, res) => {
    const { query } = req.body;
    // Assume 'db' is your database connection
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error executing query' });
        } else {
            res.send(results);
        }
    });
});
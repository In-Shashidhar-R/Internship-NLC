const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import the cors middleware

const app = express();

// Enable CORS for all origins
app.use(cors());

// MySQL database connection configuration
const connection = mysql.createConnection({
    host: "HostType",
    user: "username",
    password: "Password",
    database: "Database_name"
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database');
});

// API endpoint to retrieve data within a date range
app.get('/api/data/:startDate/:endDate', (req, res) => {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    // MySQL query to fetch Date, Temperature, and Vibration data within the date range
    const query = `SELECT Date, Time, TemperatureL, VibrationL, TemperatureR, VibrationR FROM sensor_data WHERE date BETWEEN ? AND ?`;

    // Execute the query
    connection.query(query, [startDate, endDate], (err, results) => {
        if (err) {
            console.error('Error executing query: ', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Send the fetched data as JSON response
        res.json(results);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
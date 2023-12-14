const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'smarthome',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

// API endpoint to insert customer order
app.post('/api/customerOrders', (req, res) => {
  const {
    userName,
    orderName,
    orderPrice,
    userAddress,
    creditCardNo,
    dayDate,
  } = req.body;

  const insertQuery = `
    INSERT INTO customerOrders
    (userName, orderName, orderPrice, userAddress, creditCardNo, dayDate)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    insertQuery,
    [userName, orderName, orderPrice, userAddress, creditCardNo, dayDate],
    (err, result) => {
      if (err) {
        console.error('Error inserting data: ' + err.stack);
        res.status(500).send('Error inserting data');
      } else {
        res.status(200).send('Data inserted successfully');
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

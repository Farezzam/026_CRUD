const express = require("express");
let mysql = require("mysql2");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  'Tahu13bulat11',
    database: 'biodata',
    port : 3308
})

db.connect((err) => {
    if (err){
        console.error('Error Connecting to database:' + err.stack);
        return;
    }
    console.log('Connection successfully');
})

app.get('api/users', (req, res) => {
    db.query('SELECT * from users', (err, result) => {
        if(err){
            console.error('Error executing query:' + err.stack);
            res.status(500).send('Error retching users');
            return;
        }
        res.json(result);
    })
})
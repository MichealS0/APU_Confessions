import express from "express";
import mysql from "mysql";
import cors from 'cors';

// Create App
const app = express()

// Database connection
const db = mysql.createConnection({
    host:"localhost",
    user:"MichealS0",
    password:"4w4bj0udmuneeb#13",
    database:"ConfessionsMain"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res) =>{
    res.json("Backend connected")
})

app.get("/ConfessionsMain", (req,res) =>{
    const q = 'SELECT * FROM ConfessionsMain.ConfessionsTable;'
    db.query(q,(err,data) =>{
        if (err) return res.json(err)
        return res.json(data);
    })
})

app.post("/ConfessionsTable", (req, res) =>{
    const q = 'INSERT INTO `ConfessionsMain`.`ConfessionsTable` (`Title`, `Description`, `Photo`) VALUES (?)'
    const values = [req.body.title, req.body.description, req.body.photo]

    db.query(q, [values], (err, data) =>{
        if (err) return res.json(err)
        return res.json("Confession Added!");
    })
})

// Start
app.listen(8800, () =>{
    console.log("Server Live")
})
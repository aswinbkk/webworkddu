const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors()); // Allows your HTML page to request data from this server
app.use(express.json()); // Parses incoming JSON data

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let studentCollection;

async function connectDB() {
    try {
        await client.connect();
        const db = client.db('school');
        studentCollection = db.collection('student');
        console.log("Connected to MongoDB - School Database");
    } catch (error) {
        console.error("Connection failed", error);
    }
}
connectDB();

// API Route: CREATE a student
app.post('/api/students', async (req, res) => {
    try {
        const newStudent = {
            ...req.body,
            createdAt: new Date()
        };
        const result = await studentCollection.insertOne(newStudent);
        res.status(201).json({ message: "Student added", id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: "Failed to add student" });
    }
});

// API Route: READ all students
app.get('/api/students', async (req, res) => {
    try {
        const students = await studentCollection.find().toArray();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch students" });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
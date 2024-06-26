import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

// MySQL connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'students_db'
};

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Students API');
});

// Get all students aged 15
app.get('/students/age/15', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM students WHERE age = 15');
  connection.end();
  res.json(rows);
});

// Get the name and score from Class 9B
app.get('/students/class/9B', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT name, exam_score FROM students WHERE class = ?', ['9B']);
  connection.end();
  res.json(rows);
});

// Get all students, sorted by exam score (highest to lowest)
app.get('/students/sorted/score', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM students ORDER BY exam_score DESC');
  connection.end();
  res.json(rows);
});

// Count all students in every class
app.get('/students/count/class', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT class, COUNT(*) AS student_count FROM students GROUP BY class');
  connection.end();
  res.json(rows);
});

// Get average exam score, for every class that has more than 2 students
app.get('/students/average/score', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT class, AVG(exam_score) AS average_score FROM students GROUP BY class HAVING COUNT(*) > 2');
  connection.end();
  res.json(rows);
});

// Get all unique classes in the database
app.get('/students/unique/classes', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT DISTINCT class FROM students');
  connection.end();
  res.json(rows);
});

// Get the first five registered students, sorted by registration date
app.get('/students/first-five', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM students ORDER BY enrollment_date ASC LIMIT 5');
  connection.end();
  res.json(rows);
});

// Get the name and score for students whose scores are >80 and above 14 years old
app.get('/students/high-scores', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT name, exam_score FROM students WHERE exam_score > 80 AND age > 14');
  connection.end();
  res.json(rows);
});

// Get average exam score from 16-year-old students
app.get('/students/average/age/16', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT AVG(exam_score) AS average_score FROM students WHERE age = 16');
  connection.end();
  res.json(rows);
});

// Get the student name who has the highest exam score in class 8A
app.get('/students/highest-score/8A', async (req: Request, res: Response) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT name FROM students WHERE class = ? ORDER BY exam_score DESC LIMIT 1', ['8A']);
  connection.end();
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

CREATE DATABASE school;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT,
    class VARCHAR(10),
    exam_score FLOAT,
    enrollment_date DATE
);

INSERT INTO students (name, age, class, exam_score, enrollment_date) VALUES
('Alice', 14, '8A', 85.5, '2023-01-15'),
('Bob', 15, '9B', 78.0, '2022-09-05'),
('Charlie', 14, '8A', 92.0, '2023-02-20'),
('David', 16, '10C', 74.5, '2021-06-10'),
('Eve', 15, '9B', 88.5, '2022-10-01'),
('Frank', 14, '8A', 69.5, '2023-03-10'),
('Grace', 15, '9B', 91.0, '2022-11-25'),
('Heidi', 16, '10C', 84.0, '2021-08-15'),
('Ivan', 14, '8A', 73.5, '2023-04-05'),
('Judy', 16, '10C', 79.0, '2021-09-30');

1. SELECT * FROM students WHERE age = 15;
Menampilkan semua siswa yang berumur 15 tahun (full kolom)

2. SELECT name, exam_score FROM students WHERE class = '9B';
Menampilkan nama dan nilai ujian dari siswa kelas 9B

3. SELECT * FROM students ORDER BY exam_score DESC;
"ORDER BY" untuk mengurutkan, "DESC" urutan dari terbesar ke terkecil

4. SELECT class, COUNT(*) AS student_count FROM students GROUP BY class;
Fungsi "COUNT()" untuk menghitung jumlah siswa secara keseluruhan, disimpan ke variabel student_count
GROUP BY berfungsi untuk mengelompokkan jumlah siswa di tiap kelas

5. SELECT class, AVG(exam_score) AS average_score
FROM students
GROUP BY class
HAVING COUNT( * ) > 2;
Fungsi "AVG()" untuk menghitung rata-rata, disimpan ke variabel average_score.
"HAVING COUNT( * ) > 2" untuk menyaring kelas yang siswanya lebih dari 2 orang

6. SELECT DISTINCT class FROM students; 
Menampilkan nama kelas yang ada pada database, setiap value hanya akan muncul sekali saja

7. SELECT * FROM students ORDER BY enrollment_date ASC LIMIT 5;
Mengurutkan dari tanggal penerimaan yang terdahulu. LIMIT 5 untuk hanya menampilkan 5 siswa teratas.

8. SELECT name, exam_score 
FROM students 
WHERE exam_score > 80 AND age > 14;
Hanya menampilkan siswa yang skor ujiannya diatas 80 dan lebih tua dari 14 tahun.

9. SELECT AVG(exam_score) AS average_score FROM students WHERE age = 16;
Fungsi "AVG()" untuk menghitung rata-rata, disimpan ke variabel average_score.
Adapun fungsi AVG() ini hanya berlaku untuk siswa yang berumur 16.

10. SELECT name 
FROM students 
WHERE class = '8A' 
ORDER BY exam_score DESC 
LIMIT 1;
SELECT name hanya menampilkan nama, WHERE class ='8A' untuk menampilkan hanya siswa dari kelas 8A.
ORDER BY, DESC, LIMIT untuk memastikan hanya 1 siswa terbaik saja yang ditampilkan.

Tinggal benerin MySQL serta bikin database, table & masukkin baris2 nya (INSERT INTO), udah kelar

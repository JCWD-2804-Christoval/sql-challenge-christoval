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
HAVING COUNT(*) > 2;
Fungsi "AVG()" untuk menghitung rata-rata, disimpan ke variabel average_score.
"HAVING COUNT(*) > 2" untuk menyaring kelas yang siswanya lebih dari 2 orang

6. SELECT DISTINCT class FROM students; 
Menampilkan nama kelas yang ada pada database, setiap value hanya akan muncul sekali saja

7. SELECT * FROM students ORDER BY enrollment_date ASC LIMIT 5;
Mengurutkan dari tanggal penerimaan yang terdahulu. LIMIT 5 untuk hanya menampilkan 5 siswa teratas.

8. SELECT name, exam_score 
FROM students 
WHERE exam_score > 80 AND age > 14;
Hanya menampilkan siswa yang skor ujiannya diatas 80 dan lebih tua dari 14  tahun.

9. SELECT AVG(exam_score) AS average_score FROM students WHERE age = 16;
Fungsi "AVG()" untuk menghitung rata-rata, disimpan ke variabel average_score.
Adapun fungsi AVG() ini hanya berlaku untuk siswa yang berumur 16.

11. SELECT name 
FROM students 
WHERE class = '8A' 
ORDER BY exam_score DESC 
LIMIT 1;
SELECT name hanya menampilkan nama, WHERE class ='8A' untuk menampilkan hanya siswa dari kelas 8A.
ORDER BY, DESC, LIMIT untuk memastikan hanya 1 siswa terbaik saja yang ditampilkan.

Tinggal benerin MySQL serta bikin database, table & masukkin baris2 nya (INSERT INTO), udah kelar

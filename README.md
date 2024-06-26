1. SELECT * FROM students WHERE age = 15;

2. SELECT name, exam_score FROM students WHERE class = '9B';

3. SELECT * FROM students ORDER BY exam_score DESC;

4. SELECT class, COUNT(*) AS student_count FROM students GROUP BY class;

5. SELECT class, AVG(exam_score) AS average_score
FROM students
GROUP BY class
HAVING COUNT(*) > 2;

6. SELECT DISTINCT class FROM students;

7. SELECT * FROM students ORDER BY enrollment_date ASC LIMIT 5;

8. SELECT name, exam_score 
FROM students 
WHERE exam_score > 80 AND age > 14;

9. SELECT AVG(exam_score) AS average_score FROM students WHERE age = 16;

10. SELECT name 
FROM students 
WHERE class = '8A' 
ORDER BY exam_score DESC 
LIMIT 1;

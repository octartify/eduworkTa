CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    gender CHAR(1),
    address VARCHAR(255)
);

INSERT INTO users (user_id, name, email, phone, gender, address) VALUES
(1, 'Octavia', 'tata@example.com', '123-123-3210', 'F', 'Tangerang'),
(2, 'Riyan', 'yan@example.com', '111-222-3333', 'M', 'Jakarta'),
(3, 'Putri', 'putri@example.com', '321-321-1111', 'F', 'Solo');

SELECT name AS 'Nama', phone AS 'Telepon', address AS 'Alamat' FROM users;



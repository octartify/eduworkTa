CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
    role VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE categories (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    code VARCHAR(255),
    name VARCHAR(255),
    slug VARCHAR(255),
    description TEXT,
    status VARCHAR(50),
    photo VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    category_id INTEGER,
    user_id INTEGER,
    code VARCHAR(255),
    name VARCHAR(255),
    slug VARCHAR(255),
    description LONGTEXT,
    photo VARCHAR(255),
    qty DOUBLE,
    unit VARCHAR(50),
    price DOUBLE,
    status VARCHAR(50),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

SELECT 
    p.id AS product_id,
    p.name AS product_name,
    c.name AS category_name,
    u.name AS user_name
FROM 
    products p
LEFT JOIN 
    categories c ON p.category_id = c.id
LEFT JOIN 
    users u ON p.user_id = u.id;
    

SELECT * FROM products;
SELECT * FROM categories;
SELECT * FROM users;

INSERT INTO users (id, email, name, password, address, role, status, created_at, updated_at)
VALUES (1, 'ina@mail.com', 'Ina', 'rahasia123', 'Tangerang', 'Staff', 'active', NOW(), NOW()),
       (2, 'Ino@email.com', 'Ino', 'password123', 'Jakarta', 'Staff', 'active', NOW(), NOW()),
       (3, 'Ini@mail.com', 'Ini', 'password1234', 'Bogor', 'Staff', 'non-active', NOW(), NOW());

INSERT INTO categories (id, user_id, code, name, slug, description, status, photo)
VALUES (10, 1, 'ELEC', 'Electronics', 'electronics', 'All electronic items', 'active', 'electronics.jpg'),
       (12, 3, 'FURN', 'Furniture', 'furniture', 'Various furniture items', 'active', 'furniture.jpg'),
	   (33, 2, 'CLO', 'Clothes', 'clothes', 'Various clothes items', 'active', 'dress.jpg');

INSERT INTO products (id, category_id, user_id, code, name, slug, description, photo, qty, unit, price, status)
VALUES (1, 10, 1, 'P100', 'TV', 'television', 'TV Digital', 'tv.jpg', 10, 'pcs', 1200.00, 'active'),
       (2, 12, 3, 'P200', 'Chair', 'chair', 'wooden chair', 'chair.jpg', 5, 'pcs', 850.00, 'active'),
       (3, 33, 2, 'P300', 'Dress', 'dress', 'Red dress', 'reddress.jpg', 50, 'pcs', 25.00, 'active');
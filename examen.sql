CREATE DATABASE examen;
USE examen;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombreCliente VARCHAR(100) NOT NULL
);

CREATE TABLE productos (
    id_Producto INT PRIMARY KEY AUTO_INCREMENT,
    Rubro VARCHAR(50),
    Tipo VARCHAR(50),
    NombreProducto VARCHAR(100) NOT NULL
);

CREATE TABLE fechas (
    id_Fecha INT PRIMARY KEY AUTO_INCREMENT,
    anio INT NOT NULL,
    trimestre TINYINT CHECK (trimestre BETWEEN 1 AND 4),
    mes TINYINT CHECK (mes BETWEEN 1 AND 12),
    dia TINYINT CHECK (dia BETWEEN 1 AND 31)
);

CREATE TABLE ventas (
    id_Cliente INT,
    id_Producto INT,
    id_Fecha INT,
    ImporteTotal DECIMAL(10, 2),
    Utilidad DECIMAL(10, 2),
    FOREIGN KEY (id_Cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_Producto) REFERENCES productos(id_Producto),
    FOREIGN KEY (id_Fecha) REFERENCES fechas(id_Fecha)
);



INSERT INTO clientes (nombreCliente) VALUES
('Armin Daniel'),
('Maria Lopez'),
('Carlos Gutierrez'),
('Antonio Fernandez'),
('Luis Sanchez'),
('Sofia Mamani'),
('Pedro Rodriguez'),
('Carmen Morales'),
('Jorge Ruiz'),
('Gabriela Romero');


INSERT INTO productos (Rubro, Tipo, NombreProducto) VALUES
('Electrodomésticos', 'Cocina', 'Licuadora'),
('Electrónica', 'Celulares', 'Smartphone'),
('Electrodomésticos', 'Limpieza', 'Aspiradora'),
('Electrónica', 'Audio', 'Parlante Bluetooth'),
('Electrónica', 'Computadoras', 'Laptop'),
('Electrónica', 'Accesorios', 'Flash Externo'),
('Electrónica', 'Cámaras', 'Cámara Digital Compacta'),
('Electrónica', 'Accesorios', 'Gimbal para Cámara'),
('Electrónica', 'Cámaras', 'Cámara Instantánea'),
('Electrónica', 'Accesorios', 'Estuche para Cámara');


INSERT INTO fechas (anio, trimestre, mes, dia) VALUES
(2024, 1, 1, 15),
(2024, 1, 2, 28),
(2024, 2, 4, 5),
(2024, 2, 5, 12),
(2024, 3, 7, 20),
(2024, 3, 8, 15),
(2024, 4, 10, 1),
(2024, 4, 11, 11),
(2024, 4, 12, 25),
(2024, 4, 12, 31);


INSERT INTO ventas (id_Cliente, id_Producto, id_Fecha, ImporteTotal, Utilidad) VALUES
(1, 1, 1, 150.00, 20.00),
(2, 2, 2, 50.00, 10.00),
(3, 3, 3, 300.00, 60.00),
(4, 4, 4, 1200.00, 200.00),
(5, 5, 5, 180.00, 30.00),
(6, 6, 6, 400.00, 100.00),
(7, 7, 7, 250.00, 50.00),
(8, 8, 8, 80.00, 15.00),
(9, 9, 9, 45.00, 8.00),
(10, 10, 10, 1500.00, 250.00);

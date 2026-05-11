CREATE DATABASE IF NOT EXISTS checador_taxis;
USE checador_taxis;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'checador') DEFAULT 'checador'
);

CREATE TABLE operadores (
    id_operador INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    tipo_servicio ENUM('bicitaxi', 'mototaxi') NOT NULL,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo'
);

CREATE TABLE vehiculos (
    id_vehiculo INT AUTO_INCREMENT PRIMARY KEY,
    numero_unidad VARCHAR(20) NOT NULL UNIQUE,
    tipo ENUM('bicitaxi', 'mototaxi') NOT NULL,
    placas VARCHAR(20),
    estado ENUM('disponible', 'en_servicio', 'mantenimiento') DEFAULT 'disponible'
);

CREATE TABLE rutas (
    id_ruta INT AUTO_INCREMENT PRIMARY KEY,
    nombre_ruta VARCHAR(100) NOT NULL,
    zona VARCHAR(100),
    descripcion TEXT
);

CREATE TABLE checadas (
    id_checada INT AUTO_INCREMENT PRIMARY KEY,
    id_operador INT NOT NULL,
    id_vehiculo INT NOT NULL,
    id_ruta INT,
    fecha DATE NOT NULL,
    hora_entrada TIME NOT NULL,
    hora_salida TIME NULL,
    observaciones TEXT,

    FOREIGN KEY (id_operador) REFERENCES operadores(id_operador),
    FOREIGN KEY (id_vehiculo) REFERENCES vehiculos(id_vehiculo),
    FOREIGN KEY (id_ruta) REFERENCES rutas(id_ruta)
);

-- DATOS DE PRUEBA 

INSERT INTO usuarios (nombre, correo, password, rol) VALUES
('Administrador General', 'admin@checador.com', '12345', 'admin'),
('Carlos Ramirez', 'checador@checador.com', '12345', 'checador');

INSERT INTO operadores (nombre, apellido, telefono, tipo_servicio, estado) VALUES
('Juan', 'Perez', '5512345678', 'mototaxi', 'activo'),
('Luis', 'Garcia', '5598765432', 'bicitaxi', 'activo'),
('Miguel', 'Lopez', '5544556677', 'mototaxi', 'activo');

INSERT INTO vehiculos (numero_unidad, tipo, placas, estado) VALUES
('MOTO-01', 'mototaxi', 'ABC123', 'disponible'),
('MOTO-02', 'mototaxi', 'XYZ987', 'en_servicio'),
('BICI-01', 'bicitaxi', NULL, 'disponible');

INSERT INTO rutas (nombre_ruta, zona, descripcion) VALUES
('Ruta Centro', 'Centro', 'Base principal hacia zona comercial'),
('Ruta Mercado', 'Mercado', 'Zona de mercado y calles cercanas'),
('Ruta Escolar', 'Escuelas', 'Recorrido por zonas escolares');

INSERT INTO checadas (
    id_operador,
    id_vehiculo,
    id_ruta,
    fecha,
    hora_entrada,
    hora_salida,
    observaciones
) VALUES
(1, 1, 1, '2026-05-11', '08:00:00', '16:00:00', 'Turno completo'),
(2, 3, 2, '2026-05-11', '09:00:00', NULL, 'En servicio'),
(3, 2, 3, '2026-05-11', '07:30:00', '15:30:00', 'Sin incidencias');
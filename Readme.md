# PRESENTACION DE EXAMEN 
---
## Ejercicio 1
1. Realizar la siguiente estructura con consultas SQL, añada 10 registros.

./examen.sql
## Ejercicio 2
2. Realizar las operaciones dentro de la base de datos donde se vea los procedimientos
almacenados (3), funciones (3) y triggers (3).

### Procedimientos Almacenados

1. 
   Procedimiento para insertar un cliente nuevo en la tabla `clientes`.

   ```sql
   DELIMITER //
   CREATE PROCEDURE insertarCliente(nombre VARCHAR(100))
   BEGIN
       INSERT INTO clientes (nombreCliente) VALUES (nombre);
   END //
   DELIMITER ;
   ```

2. 
   Procedimiento que actualiza el importe total de una venta específica.

   ```sql
   DELIMITER //
   CREATE PROCEDURE actualizarImporteVenta(id INT, nuevoImporte DECIMAL(10, 2))
   BEGIN
       UPDATE ventas
       SET ImporteTotal = nuevoImporte
       WHERE id_Cliente = id;
   END //
   DELIMITER ;
   ```

3. Procedimiento que lista todas las ventas de un cliente dado.

   ```sql
   DELIMITER //
   CREATE PROCEDURE listarVentasCliente(id INT)
   BEGIN
       SELECT * FROM ventas WHERE id_Cliente = id;
   END //
   DELIMITER ;
   ```

### Funciones

1. **Calcular Utilidad Promedio de un Producto**
   Calcula la utilidad promedio de un producto específico.

   ```sql
   DELIMITER //
   CREATE FUNCTION utilidadPromedioProducto(idProd INT) RETURNS DECIMAL(10, 2)
   BEGIN
       DECLARE promedio DECIMAL(10, 2);
       SELECT AVG(Utilidad) INTO promedio
       FROM ventas
       WHERE id_Producto = idProd;
       RETURN promedio;
   END //
   DELIMITER ;
   ```

2. **Obtener Nombre de un Cliente**
   Función para obtener el nombre de un cliente dado su ID.

   ```sql
   DELIMITER //
   CREATE FUNCTION obtenerNombreCliente(id INT) RETURNS VARCHAR(100)
   BEGIN
       DECLARE nombre VARCHAR(100);
       SELECT nombreCliente INTO nombre
       FROM clientes
       WHERE id_cliente = id;
       RETURN nombre;
   END //
   DELIMITER ;
   ```

3. **Calcular Ventas Totales por Año**
   Calcula el total de ventas realizadas en un año específico.

   ```sql
   DELIMITER //
   CREATE FUNCTION ventasTotalesAnio(anio INT) RETURNS DECIMAL(10, 2)
   BEGIN
       DECLARE total DECIMAL(10, 2);
       SELECT SUM(ImporteTotal) INTO total
       FROM ventas
       INNER JOIN fechas ON ventas.id_Fecha = fechas.id_Fecha
       WHERE fechas.anio = anio;
       RETURN total;
   END //
   DELIMITER ;
   ```

### Triggers

1. **Trigger para Actualizar el Stock al Insertar una Venta**
   Actualiza el campo `cantidad` de `productos` al agregar una venta.

   ```sql
   DELIMITER //
   CREATE TRIGGER actualizarStockVenta AFTER INSERT ON ventas
   FOR EACH ROW
   BEGIN
       UPDATE productos
       SET cantidad = cantidad - 1
       WHERE id_Producto = NEW.id_Producto;
   END //
   DELIMITER ;
   ```

2. **Trigger para Verificar el Límite de Ventas**
   Antes de insertar una venta, verifica si la utilidad es mayor a un valor límite.

   ```sql
   DELIMITER //
   CREATE TRIGGER verificarUtilidad BEFORE INSERT ON ventas
   FOR EACH ROW
   BEGIN
       IF NEW.Utilidad < 10 THEN
           SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La utilidad debe ser mayor a 10';
       END IF;
   END //
   DELIMITER ;
   ```

3. **Trigger para Registrar Cambios en Ventas**
   Registra la fecha de modificación cuando se actualiza el `ImporteTotal` en la tabla `ventas`.

   ```sql
   DELIMITER //
   CREATE TRIGGER registrarCambioImporte AFTER UPDATE ON ventas
   FOR EACH ROW
   BEGIN
       IF OLD.ImporteTotal <> NEW.ImporteTotal THEN
           INSERT INTO fechas (anio, trimestre, mes, dia)
           VALUES (YEAR(CURDATE()), QUARTER(CURDATE()), MONTH(CURDATE()), DAY(CURDATE()));
       END IF;
   END //
   DELIMITER ;
   ```
## Ejecicio 3
3. Integrar la pregunta número uno al diseño que presentó la anterior semana, utilice los
objetos necesarios para lograr el CRUD.
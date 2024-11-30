
### 1. **Procedimientos Almacenados**

1. **Insertar Cliente Nuevo:**

   ```sql
   CALL insertarCliente('Armin Mendieta Nuevo');
   ```

2. **Actualizar Importe de Venta:**

   ```sql
   CALL actualizarImporteVenta(123, 500.75);
   ```

3. **Listar Ventas de un Cliente:**

   ```sql
   CALL listarVentasCliente(123);
   ```

### 2. **Funciones**

1. **Calcular Utilidad Promedio de un Producto:**

   ```sql
   SELECT utilidadPromedioProducto(456);
   ```

2. **Obtener Nombre de un Cliente:**

   ```sql
   SELECT obtenerNombreCliente(123);
   ```

3. **Calcular Ventas Totales por Año:**

   ```sql
   SELECT ventasTotalesAnio(2023);
   ```

### 3. **Triggers**

1. **Trigger para Actualizar el Stock al Insertar una Venta:**
   Este trigger se ejecuta automáticamente cuando se inserta una venta
   ```sql
   INSERT INTO ventas (id_Producto, id_Cliente, ImporteTotal, Utilidad)
   VALUES (456, 123, 100.00, 15.00);
   ```

2. **Trigger para Verificar el Límite de Ventas:**
   Este trigger se ejecuta antes de insertar una venta y verifica si la utilidad es mayor a 10.  debe dar error.

   ```sql
   INSERT INTO ventas (id_Producto, id_Cliente, ImporteTotal, Utilidad)
   VALUES (456, 123, 100.00, 5.00); 
   ```

3. **Trigger para Registrar Cambios en Ventas:**
   Este trigger se ejecuta automáticamente cuando se actualiza el `ImporteTotal` de una venta.

   ```sql
   UPDATE ventas
   SET ImporteTotal = 150.00
   WHERE id_Cliente = 123 AND id_Producto = 456;
   ```

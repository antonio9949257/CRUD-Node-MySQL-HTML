document.addEventListener('DOMContentLoaded', () => {
 
  cargarClientes();

 
  document.getElementById('formCliente').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nombreCliente = document.getElementById('nombreCliente').value;

 
    axios.post('/api/clientes', { nombreCliente })
      .then(response => {
        alert(response.data.message);
        cargarClientes();  
        document.getElementById('formCliente').reset();
      })
      .catch(error => console.error('Error al agregar el cliente:', error));
  });
});

function cargarClientes() {
  console.log('Recargando clientes...');  
  axios.get('/api/clientes')
    .then(response => {
      const clientes = response.data;
      const lista = document.getElementById('clientesLista');
      lista.innerHTML = ''; 

      clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `${cliente.nombreCliente} 
                        <button class="btn btn-warning btn-sm ms-2" onclick="editarCliente(${cliente.id_cliente})">Editar</button>
                        <button class="btn btn-danger btn-sm ms-2" onclick="eliminarCliente(${cliente.id_cliente})">Eliminar</button>`;
        lista.appendChild(li);
      });
    })
    .catch(error => console.error('Error al cargar los clientes:', error));
}

function editarCliente(id) {
  const nombreCliente = prompt('Nuevo nombre del cliente:');
  if (nombreCliente) {
    axios.put(`/api/clientes/${id}`, { nombreCliente })
      .then(response => {
        alert(response.data.message);
        cargarClientes(); 
      })
      .catch(error => console.error('Error al editar el cliente:', error));
  }
}

function eliminarCliente(id) { 
  if (confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
    axios.delete(`/api/clientes/${id}`)
      .then(response => {
        alert(response.data.message);
        cargarClientes(); 
      })
      .catch(error => console.error('Error al eliminar el cliente:', error));
  }
}
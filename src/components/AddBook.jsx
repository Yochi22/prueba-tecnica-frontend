import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../../CSS/addbook.css'

function AddBook() {
  const { id } = useParams();
  const [Referencia, setReferences] = useState('');
  const [Nombre, setName] = useState('');
  const [Cantidad, setQuantity] = useState('');
  const [Valor, setValue] = useState('');
  const [Estado, setStatus] = useState('');
  const [Lugar, setLocation] = useState('');
  const [Observacion, setObservations] = useState('');
  const [Categories_id, setCategories_id] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      Referencias: Referencia,
      Nombre: Nombre,
      Cantidad: Cantidad,
      Valor: Valor,
      Estado: Estado,
      Lugar: Lugar,
      Observaciones:Observacion,
      Categories_id: Categories_id,
    };

    axios.post(`https://api-crud-sql.up.railway.app/api/categories/${id}/elements/`, newBook)
      .then(response => {
        console.log(response.data);
        // Realizar cualquier acción adicional después de agregar el libro
        // Por ejemplo, mostrar un mensaje de éxito, restablecer los campos del formulario, etc.
      })
      .catch(error => {
        console.log(error);
        // Manejar cualquier error que ocurra durante la solicitud
        // Por ejemplo, mostrar un mensaje de error al usuario
      });
  };

  return (
    <div className='categorialista'>
      <h1>Agregar Libro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Referencias:
          <input type="text" value={Referencia} onChange={(e) => setReferences(e.target.value)} />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" value={Nombre} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Cantidad:
          <input type="text" value={Cantidad} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <br />
        <label>
          Valor:
          <input type="text" value={Valor} onChange={(e) => setValue(e.target.value)} />
        </label>
        <br />
        <label>
          Estado:
          <input type="text" value={Estado} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <br />
        <label>
          Lugar:
          <input type="text" value={Lugar} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Observaciones:
          <input type="text" value={Observacion} onChange={(e) => setObservations(e.target.value)} />
        </label>
        <br />
        <label>
          Categoría:
          <input type="text" value={Categories_id} onChange={(e) => setCategories_id(e.target.value)} />
        </label>
        <button type="submit">Agregar Libro</button>
      </form>
      <Link to={'/categories'}>
      <button className='boton2' >Regresar</button>
      </Link>
    </div>
  );
}

export default AddBook;
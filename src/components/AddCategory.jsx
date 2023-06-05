import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../CSS/addbook.css'


function AddCategory() {
  const [newCategory, setNewCategory] = useState({
    Codigo: '',
    Nombre: '',
    Descripcion: '',
    Observacion: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://api-crud-sql.up.railway.app/api/categories/', newCategory)
      .then(response => {
        console.log('Categoría agregada:', response.data);
        // Aquí puedes realizar alguna acción adicional después de agregar la categoría
        setNewCategory({
          Codigo: '',
          Nombre: '',
          Descripcion: '',
          Observacion: ''
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='containercategory'>
      <h1>Agregar Categoría</h1>
      <form onSubmit={handleSubmit}>
        <div className='category'>
          <label>Código:</label>
          <input
            type="text"
            name="Codigo"
            value={newCategory.Codigo}
            onChange={handleInputChange}
          />
        </div>
        <div ClassName='category'>
          <label>Nombre:</label>
          <input
            type="text"
            name="Nombre"
            value={newCategory.Nombre}
            onChange={handleInputChange}
          />
        </div>
        <div ClassName='category'>
          <label>Descripción:</label>
          <input
            type="text"
            name="Descripcion"
            value={newCategory.Descripcion}
            onChange={handleInputChange}
          />
        </div>
        <div ClassName='category'>
          <label>Observación:</label>
          <input
            type="text"
            name="Observacion"
            value={newCategory.Observacion}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
      <Link to={'/categories'}>
      <button className='boton3'>Regresar</button>
      </Link>
    </div>
  );
}

export default AddCategory;
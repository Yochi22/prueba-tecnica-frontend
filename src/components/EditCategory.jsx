import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../CSS/addbook.css'

function EditCategory() {
  const { id } = useParams();
  const [category, setCategory] = useState({});
  const [editedCategory, setEditedCategory] = useState({
    Codigo: '',
    Nombre: '',
    Descripcion: '',
    Observacion: ''
  });

  useEffect(() => {
    axios.get(`https://api-crud-sql.up.railway.app/api/categories/${id}`)
      .then(response => {
        setCategory(response.data);
        setEditedCategory({
          Codigo: response.data.Codigo,
          Nombre: response.data.Nombre,
          Descripcion: response.data.Descripcion,
          Observacion: response.data.Observacion
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCategory({ ...editedCategory, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(`https://api-crud-sql.up.railway.app/api/categories/${id}`, editedCategory)
      .then(response => {
        console.log('Categoría editada:', response.data);
        // Aquí puedes realizar alguna acción adicional después de editar la categoría
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='editcategory'>
      <h1>Editar Categoría</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Código:</label>
          <input
            type="text"
            name="Codigo"
            value={editedCategory.Codigo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="Nombre"
            value={editedCategory.Nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            name="Descripcion"
            value={editedCategory.Descripcion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Observación:</label>
          <input
            type="text"
            name="Observacion"
            value={editedCategory.Observacion}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
      <Link to={'/categories'}>
      <button className='boton2'>Regresar</button>
      </Link>
    </div>
  );
}

export default EditCategory;

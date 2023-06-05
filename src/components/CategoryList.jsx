import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  '../../CSS/categorylist.css'

function CategoryList() {
  const [categories, setCategories] = useState([]);


  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get('https://api-crud-sql.up.railway.app/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteCategory = (id) => {
    axios.delete(`https://api-crud-sql.up.railway.app/api/categories/${id}`)
      .then(() => {
        // Eliminar la categoría de la lista localmente
        setCategories(categories.filter(category => category.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='categorialista'>
      <h1>Lista de Categorías</h1>
      <Link to="/AddCategory">
        <button className='button1'>Agregar categoría</button>
      </Link>
      <ul>
        {categories.map(category => (
          <div className='container'>
            <li key={category.id}>
            <strong>ID:</strong> {category.id}<br />
            <strong>Nombre:</strong> {category.Nombre}<br />
            <strong>Código:</strong> {category.Codigo}<br />
            <strong>Descripción:</strong> {category.Descripcion}<br />
            <strong>Observación:</strong> {category.Observacion}<br />
            <Link to={`/editcategory/${category.id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={() => handleDeleteCategory(category.id)}>Eliminar</button>
            <Link to={`/Elements/${category.id}`}>
              <button>Abrir elementos</button>
            </Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;


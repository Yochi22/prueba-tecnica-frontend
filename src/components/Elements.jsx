import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../CSS/categorylist.css';

function Elements() {
  const [elements, setElements] = useState([]);
  const [filteredElements, setFilteredElements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchElements();
  }, []);

  const fetchElements = () => {
    axios
      .get(`https://api-crud-sql.up.railway.app/api/categories/${id}/elements/${id}`)
      .then((response) => {
        setElements(response.data);
        setFilteredElements(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteElement = (elementId) => {
    axios
      .delete(`https://api-crud-sql.up.railway.app/api/elements/${id}`)
      .then((response) => {
        // Actualizar la lista de elementos después de eliminar uno
        fetchElements();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = elements.filter((element) =>
      element.Nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredElements(filtered);
  };

  return (
    <div className='container2'>
      <h1>Lista de Libros por Categoría</h1>
      <div className='search-container'>
        <input type='text' placeholder='Buscar por nombre' value={searchTerm} onChange={handleSearch} />
      </div>
      <Link to={`/addbook/${id}`}>
        <button>Agregar libro</button>
      </Link>
      <ul>
        {filteredElements.map((element) => (
          <li key={element.id}>
            <strong>ID:</strong> {element.id}<br />
            <strong>Referencias:</strong> {element.Referencias}<br />
            <strong>Nombre:</strong> {element.Nombre}<br />
            <strong>Cantidad:</strong> {element.Cantidad}<br />
            <strong>Valor:</strong> {element.Valor}<br />
            <strong>Estado:</strong> {element.Estado}<br />
            <strong>Lugar:</strong> {element.Lugar}<br />
            <strong>Observaciones:</strong> {element.Observaciones}<br />
            <strong>Categoría ID:</strong> {element.Categories_id}<br />
            <Link to={`/editbook/${element.id}`}>
              <button>Editar libro</button>
            </Link>
            <button onClick={() => deleteElement(element.id)}>Eliminar libro</button>
            <Link to={'/categories'}>
              <button>Regresar</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Elements;
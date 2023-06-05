import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import  '../../CSS/categorylist.css'

function EditBook() {
    const { id } = useParams();

  const [book, setBook] = useState({});
  const [Referencias, setReferencias] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Cantidad, setCantidad] = useState('');
  const [Valor, setValor] = useState('');
  const [Estado, setEstado] = useState('');
  const [Lugar, setLugar] = useState('');
  const [Observaciones, setObservaciones] = useState('');
  const [Categories_id, setCategories_id] = useState('');

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = () => {
    axios.get(`https://api-crud-sql.up.railway.app/api/elements/${id}`)
      .then(response => {
        setBook(response.data);
        setReferencias(response.data.Referencias);
        setNombre(response.data.Nombre);
        setCantidad(response.data.Cantidad);
        setValor(response.data.Valor);
        setEstado(response.data.Estado);
        setLugar(response.data.Lugar);
        setObservaciones(response.data.Observaciones);
        setCategories_id(response.data.Categories_id);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedBook = {
      ...book,
      Referencias: Referencias,
      Nombre: Nombre,
      Cantidad: Cantidad,
      Valor: Valor,
      Estado: Estado,
      Lugar: Lugar,
      Observaciones: Observaciones,
      Categories_id: Categories_id
    };

    axios.patch(`https://api-crud-sql.up.railway.app/api/elements/${id}`, updatedBook)
      .then(response => {
        console.log('Libro editado:', response.data);
        // Realiza cualquier acción adicional después de editar el libro
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className='categorialista'>
      <h1>Editar Libro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Referencias:
          <input type="text" value={Referencias} onChange={(e) => setReferencias(e.target.value)} />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Cantidad:
          <input type="text" value={Cantidad} onChange={(e) =>  setCantidad(e.target.value)} />
        </label>
        <br />
        <label>
          Valor:
          <input type="text" value={Valor} onChange={(e) => setValor(e.target.value)} />
        </label>
        <br />
        <label>
          Estado:
          <input type="text" value={Estado} onChange={(e) => setEstado(e.target.value)} />
        </label>
        <br />
        <label>
          Lugar:
          <input type="text" value={Lugar} onChange={(e) =>  setLugar(e.target.value)} />
        </label>
        <br />
        <label>
          Observaciones:
          <input type="text" value={Observaciones} onChange={(e) => setObservaciones(e.target.value)} />
        </label>
        <label>
          Categoria ID:
          <input type="text" value={Categories_id} onChange={(e) => setCategories(e.target.value)} />
        </label>
        <br />
        <button type="submit">Actualizar Libro</button>
        <Link to={'/categories/'}>
      <button >Regresar</button>
      </Link>
      </form>
    </div>
  );
  }

  
  export default EditBook;
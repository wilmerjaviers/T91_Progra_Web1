import React from 'react';
import './CategoryItem.css';

const CategoryItem = ({ category, onEdit, onDelete, loading }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/150';
  };

  return (
    <tr>
      <td>{category.id}</td>
      <td>
        <img
          src={category.image}
          alt={`Imagen de ${category.name}`}
          className="category-image rounded"
          onError={handleImageError}
        />
      </td>
      <td>{category.name}</td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => onEdit(category)}
            disabled={loading}
          >
            <i className="fas fa-edit me-1"></i>
            Editar
          </button>
          <button
            className="btn btn-danger btn-sm ms-1"
            onClick={() => onDelete(category.id)}
            disabled={loading}
          >
            <i className="fas fa-trash-alt me-1"></i>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CategoryItem;
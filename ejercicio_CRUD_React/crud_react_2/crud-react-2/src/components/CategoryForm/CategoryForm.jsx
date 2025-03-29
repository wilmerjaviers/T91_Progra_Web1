import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import './CategoryForm.css';

const CategoryForm = ({ values, errors, handleChange, handleSubmit, resetForm, editMode, loading }) => {
  return (
    <div className="card category-form-card">
      <div className="card-header bg-primary text-white">
        <h5>{editMode ? 'Editar Categoría' : 'Añadir Categoría'}</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              disabled={loading}
              placeholder="Nombre de la categoría"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="image" className="form-label">URL de la imagen:</label>
            <input
              type="text"
              className={`form-control ${errors.image ? 'is-invalid' : ''}`}
              id="image"
              name="image"
              value={values.image}
              onChange={handleChange}
              disabled={loading}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            {errors.image && <div className="invalid-feedback">{errors.image}</div>}
            <div className="mt-2 text-center">
              <img
                src={values.image || 'https://via.placeholder.com/150'}
                alt="Vista previa"
                className="category-image-preview img-thumbnail"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
            </div>
          </div>
          
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <LoadingSpinner size="sm" text={editMode ? "Actualizando..." : "Guardando..."} inline />
              ) : (
                editMode ? 'Actualizar' : 'Guardar'
              )}
            </button>
            {editMode && (
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={resetForm}
                disabled={loading}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
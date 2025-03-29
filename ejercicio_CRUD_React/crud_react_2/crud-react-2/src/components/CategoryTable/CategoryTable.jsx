import React from 'react';
import CategoryItem from '../CategoryItem';
import LoadingSpinner from '../LoadingSpinner';
import './CategoryTable.css';

const CategoryTable = ({ categories, loading, onEdit, onDelete, onRefresh }) => {
  return (
    <div className="card category-table-card">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="m-0">Lista de Categorías</h5>
        <button 
          className="btn btn-sm btn-light" 
          onClick={onRefresh}
          disabled={loading}
        >
          <i className="fas fa-sync-alt me-1"></i> Actualizar
        </button>
      </div>
      <div className="card-body">
        {loading ? (
          <LoadingSpinner text="Cargando categorías..." />
        ) : (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {categories.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">No hay categorías disponibles</td>
                  </tr>
                ) : (
                  categories.map((category) => (
                    <CategoryItem
                      key={category.id}
                      category={category}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      loading={loading}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryTable;
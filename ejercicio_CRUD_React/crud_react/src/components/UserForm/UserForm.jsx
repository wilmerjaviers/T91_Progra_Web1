import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import './UserForm.css';

const UserForm = ({ values, errors, handleChange, handleSubmit, resetForm, editMode, loading }) => {
  return (
    <div className="card user-form-card">
      <div className="card-header bg-primary text-white">
        <h5>{editMode ? 'Editar Usuario' : 'Añadir Usuario'}</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              disabled={loading}
              placeholder="ejemplo@correo.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          
          {!editMode && (
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña:</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                disabled={loading}
                placeholder="Mínimo 4 caracteres"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          )}
          
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
              placeholder="Nombre completo"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="avatar" className="form-label">Avatar URL:</label>
            <input
              type="text"
              className="form-control"
              id="avatar"
              name="avatar"
              value={values.avatar}
              onChange={handleChange}
              disabled={loading}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <div className="mt-2 text-center">
              <img
                src={values.avatar}
                alt="Avatar Preview"
                className="avatar-preview img-thumbnail"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://api.escuelajs.co/api/v1/files/1.png';
                }}
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Rol:</label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={values.role}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="customer">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
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

export default UserForm;
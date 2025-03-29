import React from 'react';
import UserItem from '../UserItem';
import LoadingSpinner from '../LoadingSpinner';
import './UserTable.css';

const UserTable = ({ users, loading, onEdit, onDelete, onRefresh }) => {
  return (
    <div className="card user-table-card">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="m-0">Lista de Usuarios</h5>
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
          <LoadingSpinner text="Cargando usuarios..." />
        ) : (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Avatar</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">No hay usuarios disponibles</td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <UserItem
                      key={user.id}
                      user={user}
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

export default UserTable;
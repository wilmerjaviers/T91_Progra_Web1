import React from 'react';
import './UserItem.css';

const UserItem = ({ user, onEdit, onDelete, loading }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://api.escuelajs.co/api/v1/files/1.png';
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <img
          src={user.avatar}
          alt={`Avatar de ${user.name}`}
          className="user-avatar rounded-circle"
          width="50"
          height="50"
          onError={handleImageError}
        />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <span className={`badge ${user.role === 'admin' ? 'bg-danger' : 'bg-success'}`}>
          {user.role}
        </span>
      </td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => onEdit(user)}
            disabled={loading}
          >
            <i className="fas fa-edit me-1"></i>
            Editar
          </button>
          <button
            className="btn btn-danger btn-sm ms-1"
            onClick={() => onDelete(user.id)}
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

export default UserItem;
import { useState, useEffect, useCallback } from 'react';
import userService from '../services/userService';
import { showSuccessAlert, showErrorAlert, showConfirmDialog } from '../utils/alerts';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (error) {
      setError(error.response?.data?.message || 'Error al obtener usuarios');
      showErrorAlert('Error', 'No se pudieron cargar los usuarios');
    } finally {
      setLoading(false);
    }
  }, []);


  const createUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      await userService.createUser(userData);
      showSuccessAlert('Éxito', 'Usuario creado correctamente');
      await fetchUsers();
      return true;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al crear el usuario';
      setError(errorMessage);
      showErrorAlert('Error', errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

 
  const updateUser = async (id, userData) => {
    setLoading(true);
    setError(null);
    try {
      await userService.updateUser(id, userData);
      showSuccessAlert('Éxito', 'Usuario actualizado correctamente');
      await fetchUsers();
      return true;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al actualizar el usuario';
      setError(errorMessage);
      showErrorAlert('Error', errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  
  const deleteUser = async (id) => {
    const result = await showConfirmDialog(
      '¿Estás seguro?',
      'Esta acción no se puede revertir',
      'Sí, eliminar',
      'Cancelar'
    );

    if (result.isConfirmed) {
      setLoading(true);
      setError(null);
      try {
        await userService.deleteUser(id);
        showSuccessAlert('Eliminado', 'El usuario ha sido eliminado');
        await fetchUsers();
        return true;
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error al eliminar el usuario';
        setError(errorMessage);
        showErrorAlert('Error', errorMessage);
        return false;
      } finally {
        setLoading(false);
      }
    }
    return false;
  };

 
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    error,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
  };
};

export default useUsers;
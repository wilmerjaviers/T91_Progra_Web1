import { useState, useEffect, useCallback } from 'react';
import categoryService from '../services/categoryService';
import { showSuccessAlert, showErrorAlert, showConfirmDialog } from '../utils/alerts';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await categoryService.getCategories();
      setCategories(data);
    } catch (error) {
      setError(error.response?.data?.message || 'Error al obtener categorías');
      showErrorAlert('Error', 'No se pudieron cargar las categorías');
    } finally {
      setLoading(false);
    }
  }, []);

  const createCategory = async (categoryData) => {
    setLoading(true);
    setError(null);
    try {
      await categoryService.createCategory(categoryData);
      showSuccessAlert('Éxito', 'Categoría creada correctamente');
      await fetchCategories();
      return true;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al crear la categoría';
      setError(errorMessage);
      showErrorAlert('Error', errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateCategory = async (id, categoryData) => {
    setLoading(true);
    setError(null);
    try {
      await categoryService.updateCategory(id, categoryData);
      showSuccessAlert('Éxito', 'Categoría actualizada correctamente');
      await fetchCategories();
      return true;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al actualizar la categoría';
      setError(errorMessage);
      showErrorAlert('Error', errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
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
        await categoryService.deleteCategory(id);
        showSuccessAlert('Eliminado', 'La categoría ha sido eliminada');
        await fetchCategories();
        return true;
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error al eliminar la categoría';
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
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    error,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory
  };
};

export default useCategories;
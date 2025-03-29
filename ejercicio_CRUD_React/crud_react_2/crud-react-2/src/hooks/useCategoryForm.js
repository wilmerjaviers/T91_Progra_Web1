import { useState } from 'react';
import { validateCategoryForm } from '../utils/validators';

const useCategoryForm = (initialState = {}, validateOnChange = false) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) {
      setErrors(validateCategoryForm({ ...values, [name]: value }));
    }
  };

  const validateForm = () => {
    const formErrors = validateCategoryForm(values);
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const setupEditMode = (id, data) => {
    setValues(data);
    setCurrentId(id);
    setEditMode(true);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setEditMode(false);
    setCurrentId(null);
  };

  return {
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validateForm,
    setupEditMode,
    resetForm,
    editMode,
    currentId
  };
};

export default useCategoryForm;
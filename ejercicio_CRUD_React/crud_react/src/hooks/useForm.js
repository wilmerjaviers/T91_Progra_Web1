import { useState } from 'react';
import { validateUserForm } from '../utils/validators';

const useForm = (initialState = {}, validateOnChange = false) => {
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
      setErrors(validateUserForm({ ...values, [name]: value }, editMode));
    }
  };

  
  const validateForm = () => {
    const formErrors = validateUserForm(values, editMode);
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

export default useForm;

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  export const isValidPassword = (password, minLength = 4) => {
    return password && password.length >= minLength;
  };
  

  export const validateUserForm = (formData, isEditMode = false) => {
    const errors = {};
    
    
    if (!formData.email) {
      errors.email = 'El email es requerido';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Email inválido';
    }
    
   
    if (!isEditMode) {
      if (!formData.password) {
        errors.password = 'La contraseña es requerida';
      } else if (!isValidPassword(formData.password)) {
        errors.password = 'La contraseña debe tener al menos 4 caracteres';
      }
    }
    
 
    if (!formData.name) {
      errors.name = 'El nombre es requerido';
    }
    
    return errors;
  };
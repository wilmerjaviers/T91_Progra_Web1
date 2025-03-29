export const validateCategoryForm = (formData) => {
    const errors = {};
    
    if (!formData.name) {
      errors.name = 'El nombre es requerido';
    } else if (formData.name.length < 3) {
      errors.name = 'El nombre debe tener al menos 3 caracteres';
    }
    
    if (!formData.image) {
      errors.image = 'La URL de la imagen es requerida';
    } else if (!isValidImageUrl(formData.image)) {
      errors.image = 'La URL de la imagen es inválida';
    }
    
    return errors;
  };
  
  export const isValidImageUrl = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch (_) {
      return false;
    }
  };
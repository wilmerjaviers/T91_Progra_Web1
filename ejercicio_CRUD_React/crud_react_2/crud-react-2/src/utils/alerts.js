import Swal from 'sweetalert2';

export const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: 'success',
    title,
    text,
  });
};

export const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
  });
};

export const showWarningAlert = (title, text) => {
  Swal.fire({
    icon: 'warning',
    title,
    text,
  });
};

export const showInfoAlert = (title, text) => {
  Swal.fire({
    icon: 'info',
    title,
    text,
  });
};

export const showConfirmDialog = (title, text, confirmButtonText = 'Sí', cancelButtonText = 'Cancelar') => {
  return Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText,
    cancelButtonText
  });
};
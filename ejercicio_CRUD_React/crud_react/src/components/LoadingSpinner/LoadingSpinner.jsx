import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'md', text = 'Cargando...', inline = false }) => {
  
  const spinnerSize = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  }[size];

  if (inline) {
    return (
      <div className="d-inline-flex align-items-center">
        <div className={`spinner-border ${spinnerSize} text-primary me-2`} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        {text && <span>{text}</span>}
      </div>
    );
  }

  return (
    <div className="loading-spinner-container">
      <div className={`spinner-border ${spinnerSize} text-primary`} role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      {text && <p className="mt-2">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
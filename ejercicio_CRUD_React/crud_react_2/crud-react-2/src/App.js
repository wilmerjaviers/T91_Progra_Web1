import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import CategoryForm from './components/CategoryForm';
import CategoryTable from './components/CategoryTable';


import useCategories from './hooks/useCategories';
import useCategoryForm from './hooks/useCategoryForm';

function App() {
  
  const initialFormState = {
    name: '',
    image: 'https://via.placeholder.com/150'
  };

 
  const [activeTab, setActiveTab] = useState('categories');

  
  const { 
    categories, 
    loading, 
    fetchCategories, 
    createCategory, 
    updateCategory, 
    deleteCategory 
  } = useCategories();

  
  const {
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
  } = useCategoryForm(initialFormState);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    if (editMode) {
      
      await updateCategory(currentId, {
        name: values.name,
        image: values.image
      });
    } else {
    
      await createCategory(values);
    }
    
    resetForm();
    setIsSubmitting(false);
  };

  
  const handleEdit = (category) => {
    setupEditMode(category.id, {
      name: category.name,
      image: category.image
    });
  };

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="fw-bold">Ejercicio CRUD React #2</h1>
        <p className="text-muted">Solo puedes Eliminar categorias nuevas</p>
      </header>
      
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'categories' ? 'active' : ''}`} 
            onClick={() => setActiveTab('categories')}
          >
            Categorías
          </button>
        </li>
      </ul>
      
      <div className="row">
        <div className="col-md-4">
          <CategoryForm
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
            editMode={editMode}
            loading={isSubmitting}
          />
        </div>
        
        <div className="col-md-8">
          <CategoryTable
            categories={categories}
            loading={loading}
            onEdit={handleEdit}
            onDelete={deleteCategory}
            onRefresh={fetchCategories}
          />
        </div>
      </div>

      <footer className="text-center mt-5 text-muted">
        <small>&copy; {new Date().getFullYear()} WILMER SANCHEZ</small>
      </footer>
    </div>
  );
}

export default App;